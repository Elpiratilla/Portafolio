#!/usr/bin/env node
/* Toma una captura de la demo de cada proyecto y la guarda en img/capturas/.
   Requisitos (una sola vez):  npm install --no-save playwright && npx playwright install chromium
   Uso:
     node tools/capturas.js            -> toma las capturas y muestra la línea img: para pegar en data.js
     node tools/capturas.js --aplicar  -> además escribe esa línea en js/data.js por ti
   Las demos gratuitas de Render tardan en despertar: el script espera hasta 90 segundos. */
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");

const raiz = path.resolve(__dirname, "..");
const archivoData = path.join(raiz, "js", "data.js");
const fuente = fs.readFileSync(archivoData, "utf8");
const ctx = {};
vm.runInNewContext(fuente + ";this.DATA = DATA;", ctx);
const aplicar = process.argv.includes("--aplicar");

const slug = t => t.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

(async () => {
  let chromium;
  try { ({ chromium } = require("playwright")); }
  catch { console.error("Falta Playwright. Ejecuta: npm install --no-save playwright && npx playwright install chromium"); process.exit(1); }

  fs.mkdirSync(path.join(raiz, "img", "capturas"), { recursive: true });
  const navegador = await chromium.launch();
  const pagina = await navegador.newPage({ viewport: { width: 1280, height: 720 } });
  let nuevo = fuente;

  for (const p of ctx.DATA.proyectos) {
    if (!p.demo) continue;
    /* Las demos locales (demos/...) se abren desde el disco */
    const url = /^https?:/.test(p.demo) ? p.demo : "file://" + path.join(raiz, p.demo);
    const rel = "img/capturas/" + slug(p.titulo) + ".jpg";
    try {
      console.log("Capturando", p.titulo, "->", url);
      await pagina.goto(url, { waitUntil: "networkidle", timeout: 90000 });
      await pagina.waitForTimeout(800);
      await pagina.screenshot({ path: path.join(raiz, rel), type: "jpeg", quality: 82 });
      console.log('  img: "' + rel + '"');
      if (aplicar) {
        const re = new RegExp('(titulo:\\s*"' + p.titulo.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + '"[^}]*?img:\\s*)"[^"]*"');
        nuevo = nuevo.replace(re, '$1"' + rel + '"');
      }
    } catch (e) {
      console.warn("  No se pudo capturar " + p.titulo + ": " + e.message);
    }
  }
  await navegador.close();
  if (aplicar) { fs.writeFileSync(archivoData, nuevo); console.log("js/data.js actualizado."); }
})();
