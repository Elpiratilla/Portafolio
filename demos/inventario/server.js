/* Demo de inventario: servidor Node.js sin frameworks + base de datos SQLite.
   Uso: npm install && npm start  ->  http://localhost:3000 */
const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const Database = require("better-sqlite3");

const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, "public");
const db = new Database(process.env.DB_FILE || path.join(__dirname, "inventario.db"));
db.pragma("journal_mode = WAL");
db.exec(`CREATE TABLE IF NOT EXISTS productos (
  id        INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre    TEXT    NOT NULL,
  categoria TEXT    NOT NULL DEFAULT 'General',
  stock     INTEGER NOT NULL DEFAULT 0 CHECK (stock >= 0),
  minimo    INTEGER NOT NULL DEFAULT 0 CHECK (minimo >= 0),
  precio    REAL    NOT NULL DEFAULT 0 CHECK (precio >= 0)
)`);

if (db.prepare("SELECT COUNT(*) AS n FROM productos").get().n === 0) {
  const ins = db.prepare("INSERT INTO productos (nombre, categoria, stock, minimo, precio) VALUES (?,?,?,?,?)");
  [["Harina de maíz 1 kg", "Abarrotes", 40, 15, 1.1], ["Frijol rojo 1 lb", "Abarrotes", 12, 20, 0.95],
   ["Aceite 900 ml", "Abarrotes", 25, 10, 2.8], ["Queso duro 1 lb", "Lácteos", 6, 8, 3.5],
   ["Café molido 400 g", "Bebidas", 30, 10, 4.25]].forEach(p => ins.run(...p));
}

const q = {
  listar: db.prepare("SELECT * FROM productos ORDER BY nombre COLLATE NOCASE"),
  uno: db.prepare("SELECT * FROM productos WHERE id = ?"),
  crear: db.prepare("INSERT INTO productos (nombre, categoria, stock, minimo, precio) VALUES (@nombre,@categoria,@stock,@minimo,@precio)"),
  editar: db.prepare("UPDATE productos SET nombre=@nombre, categoria=@categoria, stock=@stock, minimo=@minimo, precio=@precio WHERE id=@id"),
  borrar: db.prepare("DELETE FROM productos WHERE id = ?"),
  resumen: db.prepare(`SELECT COUNT(*) AS productos, COALESCE(SUM(stock),0) AS unidades,
    COALESCE(SUM(stock*precio),0) AS valor, COALESCE(SUM(stock <= minimo),0) AS bajoStock FROM productos`)
};

/* Valida y limpia lo que llega del cliente: nunca se confía en el navegador */
function limpiar(b) {
  const nombre = String(b.nombre ?? "").trim().slice(0, 80);
  const categoria = String(b.categoria ?? "General").trim().slice(0, 40) || "General";
  const stock = Number(b.stock), minimo = Number(b.minimo), precio = Number(b.precio);
  if (!nombre) return { error: "El nombre es obligatorio." };
  if (!Number.isInteger(stock) || stock < 0) return { error: "El stock debe ser un número entero de 0 o más." };
  if (!Number.isInteger(minimo) || minimo < 0) return { error: "El mínimo debe ser un número entero de 0 o más." };
  if (!Number.isFinite(precio) || precio < 0) return { error: "El precio debe ser 0 o más." };
  return { datos: { nombre, categoria, stock, minimo, precio: Math.round(precio * 100) / 100 } };
}

const json = (res, code, obj) => {
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(obj));
};
const leerCuerpo = req => new Promise((ok, fail) => {
  let s = "";
  req.on("data", c => { s += c; if (s.length > 10_000) { req.destroy(); fail(new Error("grande")); } });
  req.on("end", () => { try { ok(s ? JSON.parse(s) : {}); } catch { fail(new Error("json")); } });
  req.on("error", fail);
});

const TIPOS = { ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript", ".svg": "image/svg+xml", ".png": "image/png", ".ico": "image/x-icon" };

async function api(req, res, url) {
  const m = url.pathname.match(/^\/api\/productos(?:\/(\d+))?$/);
  if (url.pathname === "/api/resumen" && req.method === "GET") return json(res, 200, q.resumen.get());
  if (!m) return json(res, 404, { error: "Ruta no encontrada." });
  const id = m[1] ? Number(m[1]) : null;

  if (req.method === "GET" && !id) return json(res, 200, q.listar.all());
  if (req.method === "POST" && !id) {
    const v = limpiar(await leerCuerpo(req));
    if (v.error) return json(res, 400, { error: v.error });
    const r = q.crear.run(v.datos);
    return json(res, 201, q.uno.get(r.lastInsertRowid));
  }
  if (!id) return json(res, 405, { error: "Método no permitido." });
  if (!q.uno.get(id)) return json(res, 404, { error: "Ese producto no existe." });
  if (req.method === "PUT") {
    const v = limpiar(await leerCuerpo(req));
    if (v.error) return json(res, 400, { error: v.error });
    q.editar.run({ ...v.datos, id });
    return json(res, 200, q.uno.get(id));
  }
  if (req.method === "DELETE") { q.borrar.run(id); return json(res, 200, { ok: true }); }
  return json(res, 405, { error: "Método no permitido." });
}

const server = http.createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    if (url.pathname.startsWith("/api/")) return await api(req, res, url);
    /* Archivos estáticos, sin salirse de la carpeta public */
    const rel = url.pathname === "/" ? "index.html" : decodeURIComponent(url.pathname).replace(/^\/+/, "");
    const file = path.resolve(PUBLIC, rel);
    if (!file.startsWith(PUBLIC + path.sep) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      return res.end("No encontrado");
    }
    res.writeHead(200, { "Content-Type": TIPOS[path.extname(file)] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  } catch (e) {
    json(res, e.message === "json" || e.message === "grande" ? 400 : 500, { error: e.message === "json" ? "JSON inválido." : e.message === "grande" ? "Solicitud demasiado grande." : "Error del servidor." });
  }
});

if (require.main === module) server.listen(PORT, () => console.log("Inventario en http://localhost:" + PORT));
module.exports = server;
