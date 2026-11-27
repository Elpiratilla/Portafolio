#!/usr/bin/env node
/* Reemplaza TU-DOMINIO por tu dirección real en HTML, robots.txt y sitemap.xml.
   Uso:  node tools/dominio.js https://elusuario.github.io/Portafolio/
   Si la dirección ya fue puesta antes, vuelve a ejecutarlo con la misma para repetir sin problema. */
const fs = require("node:fs");
const path = require("node:path");

const arg = process.argv[2];
if (!arg || !/^https?:\/\/[^\s/]+(\/\S*)?$/.test(arg)) {
  console.error("Uso: node tools/dominio.js https://tu-dominio.com/");
  process.exit(1);
}
const base = arg.replace(/\/+$/, "");            /* sin barra final */
const raiz = path.resolve(__dirname, "..");
/* Todas las páginas .html de la raíz, más robots.txt y sitemap.xml (el 404 no lleva dominio) */
const objetivos = fs.readdirSync(raiz).filter(f => f.endsWith(".html") && f !== "404.html").concat(["robots.txt", "sitemap.xml"]);

for (const f of objetivos) {
  const ruta = path.join(raiz, f);
  if (!fs.existsSync(ruta)) continue;
  const antes = fs.readFileSync(ruta, "utf8");
  /* "https://TU-DOMINIO/algo" pasa a "base/algo"; "https://TU-DOMINIO/" pasa a "base/" */
  const despues = antes.replace(/https:\/\/TU-DOMINIO/g, base);
  if (despues !== antes) { fs.writeFileSync(ruta, despues); console.log("Actualizado:", f); }
  else console.log("Sin cambios:", f);
}
console.log("Listo. Publica los cambios y revisa la vista previa en https://www.opengraph.xyz/");
