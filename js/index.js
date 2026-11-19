/* Página de inicio: proyectos + acceso a cada perfil */
document.title = DATA.titulo;
$("titulo").textContent = DATA.titulo;
$("intro").textContent = DATA.intro;

$("intro").insertAdjacentHTML("afterend",
  `<nav class="nav" aria-label="Secciones">
    <a href="#filters">Proyectos</a>
    <a href="${esc(P.a.pagina)}">${esc(primerNombre(P.a.nombre))}</a>
    <a href="${esc(P.b.pagina)}">${esc(primerNombre(P.b.nombre))}</a>
  </nav>`);

const filtros = [["todos","Todos"],["a",P.a.nombre],["b",P.b.nombre],["j","Juntos"]];
$("filters").innerHTML = filtros.map(([k,t],i) => `<button type="button" data-f="${k}" aria-pressed="${i===0}">${esc(t)}</button>`).join("");

function render(f){
  const items = DATA.proyectos.filter(p => f === "todos" || p.quien === f);
  $("list").innerHTML = items.length ? items.map(proyectoHTML).join("") : `<p class="empty">Todavía no hay proyectos en esta categoría.</p>`;
}
render("todos");

$("filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
  render(b.dataset.f);
});

$("quienes").innerHTML = `<h2>Quiénes somos</h2><div class="pl-grid">` + ["a","b"].map(k => {
  const p = P[k];
  const mini = p.foto ? `<img class="mini" src="${esc(p.foto)}" alt="" width="56" height="56">` : `<span class="mini" aria-hidden="true">${esc(iniciales(p.nombre))}</span>`;
  return `<a class="pl ${k}" href="${esc(p.pagina)}">${mini}<span><strong>${esc(p.nombre)}</strong><small>${esc(p.rol)}. Ver perfil</small></span></a>`;
}).join("") + `</div>`;