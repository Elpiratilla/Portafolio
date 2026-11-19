const DATA = {
  titulo: "Nuestro portafolio",
  intro: "Proyectos de desarrollo web que hemos construido, juntos y por separado. Cada color indica quién lo hizo.",
  personas: {
    a: { nombre: "Mateo Lara", rol: "Front end y Back end", sobre: "Una línea sobre ti y lo que haces en los proyectos." },
    b: { nombre: "Iker Mejia", rol: "Front end y Back end", sobre: "Una línea sobre ti y lo que haces en los proyectos." }
  },
  /* quien: "a" (persona 1), "b" (persona 2) o "j" (juntos) */
  proyectos: [
    { titulo: "Go 503", quien: "a", desc: "Proyecto de rastreo de autobuses para saber a qué hora llegan y por donde pasan.", tags: ["HTML", "CSS", "JavaScript", "Node.js"," SQL"], demo: "https://go503.onrender.com", codigo: "https://github.com/Elpiratilla/bus-tracker.git" },
    { titulo: "Sin límites", quien: "a", desc: "Proyecto para promover la inclusión digital ganador del primer lugar de Crea-j.", tags: ["HTML", "CSS", "JavaScript", "PHP" ], demo: "https://sinlimites.lat/Inicio", codigo: "https://github.com/Elpiratilla/paginacrea1.git" },
    { titulo: "Blue's", quien: "b", desc: "Proyecto musicoterapia ganador del segundo lugar de Crea-j.", tags: ["HTML", "CSS", "JavaScript"], demo: "", codigo: "https://github.com/alem3jia774-byte/BLUES.git" }
  ],
  contacto: "Escríbenos a correo@ejemplo.com"
};
/* ================================================= */

const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const P = DATA.personas;
const byLabel = k => k === "j" ? "Hecho por los dos" : "Hecho por " + P[k].nombre;

document.title = DATA.titulo;
$("titulo").textContent = DATA.titulo;
$("intro").textContent = DATA.intro;
$("foot").textContent = DATA.contacto;

const filtros = [["todos","Todos"],["a",P.a.nombre],["b",P.b.nombre],["j","Juntos"]];
$("filters").innerHTML = filtros.map(([k,t],i) => `<button type="button" data-f="${k}" aria-pressed="${i===0}">${esc(t)}</button>`).join("");

function render(f){
  const items = DATA.proyectos.filter(p => f === "todos" || p.quien === f);
  $("list").innerHTML = items.length ? items.map(p => `
  <article class="row" data-who="${p.quien}">
    <div class="tile" aria-hidden="true">${esc(p.titulo.charAt(0))}</div>
    <div>
      <h2>${esc(p.titulo)}</h2>
      <p class="by">${esc(byLabel(p.quien))}</p>
      <p class="desc">${esc(p.desc)}</p>
      <ul class="tags">${p.tags.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      <div class="links">${p.demo ? `<a href="${esc(p.demo)}">Ver demo</a>` : ""}${p.codigo ? `<a href="${esc(p.codigo)}">Ver código</a>` : ""}</div>
    </div>
  </article>`).join("") : `<p class="empty">Todavía no hay proyectos en esta categoría.</p>`;
}
render("todos");

$("filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
  render(b.dataset.f);
});

$("about").innerHTML = ["a","b"].map(k => `
<div class="who ${k}"><h3>${esc(P[k].nombre)}</h3><p><strong>${esc(P[k].rol)}.</strong> ${esc(P[k].sobre)}</p></div>`).join("");

$("theme").addEventListener("click", () => {
  const r = document.documentElement;
  const dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  r.dataset.theme = dark ? "light" : "dark";
});