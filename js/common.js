/* Funciones compartidas por todas las páginas */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const P = DATA.personas;
const primerNombre = n => n.split(" ")[0];
const iniciales = n => n.split(" ").map(x => x.charAt(0)).join("").slice(0, 2).toUpperCase();
const correoDe = k => (P[k].contacto.find(c => c.etiqueta === "Correo") || {}).valor || "";
const byLabel = k => k === "j" ? "Hecho por los dos" : "Hecho por " + P[k].nombre;

function proyectoHTML(p){
  return `
  <article class="row${p.img ? " has-shot" : ""}" data-who="${p.quien}">
    <div class="tile" aria-hidden="true">${esc(p.titulo.charAt(0))}</div>
    <div>
      ${p.img ? `<img class="shot" src="${esc(p.img)}" alt="Captura de ${esc(p.titulo)}" loading="lazy">` : ""}
      <h2>${esc(p.titulo)}</h2>
      <p class="by">${esc(byLabel(p.quien))}</p>
      ${p.premio ? `<p class="award">${esc(p.premio)}</p>` : ""}
      <p class="desc">${esc(p.desc)}</p>
      <ul class="tags">${p.tags.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      <div class="links">${p.demo ? `<a href="${esc(p.demo)}">Ver demo</a>` : ""}${p.codigo ? `<a href="${esc(p.codigo)}">Ver código</a>` : ""}${DATA.detalles && DATA.detalles[p.titulo] ? `<button type="button" class="det" data-det="${esc(p.titulo)}">Ver detalles</button>` : ""}</div>
    </div>
  </article>`;
}

$("foot").textContent = DATA.pie;
$("theme").addEventListener("click", () => {
  const r = document.documentElement;
  const dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  r.dataset.theme = dark ? "light" : "dark";
});

/* ===== WhatsApp: botón flotante (se oculta si no hay número en data.js) ===== */
const WA = DATA.whatsapp || {};
const waNum = String(WA.numero || "").replace(/\D/g, "");
const waLink = waNum ? "https://wa.me/" + waNum + "?text=" + encodeURIComponent(WA.mensaje || "") : "";
if (waLink) {
  document.body.insertAdjacentHTML("beforeend",
    `<a class="wa" href="${esc(waLink)}" target="_blank" rel="noopener" aria-label="Escribir por WhatsApp">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor"><path d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/></svg>
      <span>WhatsApp</span>
    </a>`);
} 

/* ===== Ventana de detalles de proyecto ===== */
document.body.insertAdjacentHTML("beforeend", `<dialog id="dlg" aria-labelledby="dlg-t"><div id="dlg-c"></div><button type="button" id="dlg-x">Cerrar</button></dialog>`);
const dlg = $("dlg");
document.addEventListener("click", e => {
  const b = e.target.closest(".det");
  if (b) {
    const t = b.dataset.det, d = DATA.detalles[t], p = DATA.proyectos.find(x => x.titulo === t);
    $("dlg-c").innerHTML = `<h2 id="dlg-t">${esc(t)}</h2><dl>` + [["Objetivo","objetivo"],["Problema","problema"],["Solución","solucion"],["Resultado","resultado"]].map(([l,k]) => `<dt>${l}</dt><dd>${esc(d[k])}</dd>`).join("") + `<dt>Tecnologías</dt><dd>${esc(p.tags.join(", "))}</dd></dl>`;
    dlg.showModal();
  } else if (e.target === dlg || e.target.id === "dlg-x") dlg.close();
});
