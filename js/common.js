/* Funciones compartidas por todas las páginas */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const P = DATA.personas;
const primerNombre = n => n.split(" ")[0];
const iniciales = n => n.split(" ").map(x => x.charAt(0)).join("").slice(0, 2).toUpperCase();
const byLabel = k => k === "j" ? "Hecho por los dos" : "Hecho por " + P[k].nombre;

function proyectoHTML(p){
  return `
  <article class="row" data-who="${p.quien}">
    <div class="tile" aria-hidden="true">${esc(p.titulo.charAt(0))}</div>
    <div>
      <h2>${esc(p.titulo)}</h2>
      <p class="by">${esc(byLabel(p.quien))}</p>
      <p class="desc">${esc(p.desc)}</p>
      <ul class="tags">${p.tags.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      <div class="links">${p.demo ? `<a href="${esc(p.demo)}">Ver demo</a>` : ""}${p.codigo ? `<a href="${esc(p.codigo)}">Ver código</a>` : ""}</div>
    </div>
  </article>`;
}

$("foot").textContent = DATA.contacto;
$("theme").addEventListener("click", () => {
  const r = document.documentElement;
  const dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  r.dataset.theme = dark ? "light" : "dark";
});