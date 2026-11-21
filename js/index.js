/* Página de inicio: proyectos + acceso a cada perfil */
document.title = DATA.titulo;
$("titulo").textContent = DATA.titulo;
$("intro").textContent = DATA.intro;

$("intro").insertAdjacentHTML("afterend",
  `<nav class="nav" aria-label="Secciones">
    <a href="#filters">Proyectos</a>
    <a href="#servicios">Servicios</a>
    <a href="#contacto">Contacto</a>
    <a href="${esc(P.a.pagina)}">${esc(primerNombre(P.a.nombre))}</a>
    <a href="${esc(P.b.pagina)}">${esc(primerNombre(P.b.nombre))}</a>
  </nav>`);

const hayJuntos = DATA.proyectos.some(p => p.quien === "j");
const filtros = [["todos","Todos"],["a",P.a.nombre],["b",P.b.nombre],["j","Juntos"]].filter(([k]) => k !== "j" || hayJuntos);
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

/* ===== Servicios ===== */
$("servicios").innerHTML = `<h2>Qué podemos hacer por ti</h2>
  <div class="srv-grid">${DATA.servicios.map(x => `<article class="srv"><h3>${esc(x.titulo)}</h3><p>${esc(x.desc)}</p></article>`).join("")}</div>`;

/* ===== Cómo trabajamos (es una secuencia, por eso va numerado) ===== */
$("proceso").innerHTML = `<h2>Cómo trabajamos</h2>
  <ol class="pasos">${DATA.proceso.map(x => `<li><h3>${esc(x.titulo)}</h3><p>${esc(x.desc)}</p></li>`).join("")}</ol>`;

/* ===== Preguntas frecuentes ===== */
$("faq").innerHTML = `<h2>Preguntas frecuentes</h2>
  <div class="faq-list">${DATA.faq.map(x => `<details><summary>${esc(x.p)}</summary><p>${esc(x.r)}</p></details>`).join("")}</div>`;

/* ===== Contacto ===== */
const C = DATA.contacto;
$("contacto").innerHTML = `<h2>Cuéntanos tu idea</h2>
  <p class="c-intro">${esc(C.texto)}${waLink ? ` También puedes <a href="${esc(waLink)}" target="_blank" rel="noopener">escribirnos por WhatsApp</a>.` : ""}</p>
  <form id="form" novalidate>
    <label>Tu nombre<input name="nombre" required autocomplete="name"></label>
    <label>Tu correo<input name="correo" type="email" required autocomplete="email"></label>
    <label>¿A quién le escribes?
      <select name="para">
        <option value="j">A los dos</option>
        <option value="a">${esc(P.a.nombre)}</option>
        <option value="b">${esc(P.b.nombre)}</option>
      </select>
    </label>
    <label>Mensaje<textarea name="mensaje" rows="5" required></textarea></label>
    <button type="submit">Enviar mensaje</button>
    <p id="estado" role="status" aria-live="polite"></p>
  </form>`;

const estado = t => { $("estado").textContent = t; };

$("form").addEventListener("submit", async e => {
  e.preventDefault();
  const f = e.target, d = Object.fromEntries(new FormData(f));
  if (!d.nombre.trim() || !/^\S+@\S+\.\S+$/.test(d.correo) || !d.mensaje.trim()) {
    estado("Revisa que el nombre, el correo y el mensaje estén completos.");
    return;
  }
  const para = d.para === "j" ? [correoDe("a"), correoDe("b")] : [correoDe(d.para)];
  if (C.formspree) {
    try {
      const r = await fetch(C.formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ nombre: d.nombre, correo: d.correo, para: para.join(", "), mensaje: d.mensaje })
      });
      if (!r.ok) throw new Error("envio");
      f.reset();
      estado("Mensaje enviado. Te responderemos pronto.");
    } catch {
      estado("No se pudo enviar el mensaje. Escríbenos directo a " + para.join(" o ") + ".");
    }
  } else {
    const cuerpo = d.mensaje + "\n\n" + d.nombre + " (" + d.correo + ")";
    location.href = "mailto:" + para.join(",") + "?subject=" + encodeURIComponent("Contacto desde el portafolio") + "&body=" + encodeURIComponent(cuerpo);
    estado("Se abrió tu aplicación de correo con el mensaje listo para enviar.");
  }
});