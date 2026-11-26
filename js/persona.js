/* Página de perfil: se elige con <body data-persona="a"> o "b" */
const k = document.body.dataset.persona;
const otra = k === "a" ? "b" : "a";
const p = P[k];

document.title = p.nombre + " · " + U.perfil;
const metaDesc = document.querySelector('meta[name="description"]');
if (metaDesc) metaDesc.content = p.nombre + " · " + p.rol + ". " + U.perfilDesc;

const foto = p.foto
  ? `<img class="foto" src="${esc(p.foto)}" alt="${esc(p.nombre)}" width="160" height="160">`
  : `<div class="foto" aria-hidden="true">${esc(iniciales(p.nombre))}</div>`;

$("perfil").innerHTML = `
  <article class="persona ${k}">
    ${foto}
    <div>
      <h1>${esc(p.nombre)}</h1>
      <p class="rol">${esc(p.rol)}</p>
      <p class="sobre">${esc(p.sobre)}</p>
      <div class="cols">
        <div>
          <h4>${esc(U.habilidades)}</h4>
          <ul class="chips">${p.habilidades.map(h => `<li>${esc(h)}</li>`).join("")}</ul>
        </div>
        <div>
          <h4>${esc(U.formacion)}</h4>
          ${p.formacion.map(f => `<div class="item"><strong>${esc(f.titulo)}</strong><span>${esc(f.lugar)} · ${esc(f.fecha)}</span></div>`).join("")}
        </div>
        <div>
          <h4>${esc(U.contacto)}</h4>
          <ul class="contact">${p.contacto.map(c => `<li><span>${esc(LANG === "en" && c.etiqueta === "Correo" ? "Email" : c.etiqueta)}:</span><a href="${esc(c.href)}">${esc(c.valor)}</a></li>`).join("")}</ul>
        </div>
      </div>
    </div>
  </article>`;

const suyos = T.proyectos.filter(x => x.quien === k || x.quien === "j");
$("mis-titulo").textContent = U.proyectosDe + primerNombre(p.nombre);
$("list").innerHTML = suyos.length ? suyos.map(proyectoHTML).join("") : `<p class="empty">${esc(U.sinProyectos)}</p>`;

$("otro").href = P[otra].pagina;
$("otro").textContent = U.verPerfilDe + primerNombre(P[otra].nombre);
