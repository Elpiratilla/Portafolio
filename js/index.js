/* Página de inicio: proyectos + acceso a cada perfil */
document.title = "Portafolio · " + DATA.pie;
const H = DATA.hero;
$("titulo").textContent = H.titulo;
$("intro").textContent = H.texto;
$("intro").insertAdjacentHTML("afterend",
  `<div class="cta"><a class="btn" href="#filters">Ver nuestros proyectos</a><a class="btn alt" href="#contacto">Solicitar una cotización</a></div>
  <p class="linea">${esc(H.linea)}</p>
  <nav class="nav" aria-label="Secciones">
    <a href="#filters">Proyectos</a>
    <a href="#servicios">Servicios</a>
    <a href="#sectores">Sectores</a>
    <a href="#proceso">Proceso</a>
    <a href="#paquetes">Paquetes</a>
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

const grid = (cls, arr, fn) => `<div class="${cls}">${arr.map(fn).join("")}</div>`;
const lista = a => `<ul class="inc">${a.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`;

/* ===== Servicios (catálogo) ===== */
$("servicios").innerHTML = `<h2>Qué podemos hacer por ti</h2>` + grid("srv-grid", DATA.servicios, x =>
  `<article class="srv"><h3>${esc(x.titulo)}</h3><p class="prob"><strong>Resuelve:</strong> ${esc(x.problema)}</p><p class="qi">Qué incluye</p>${lista(x.incluye)}<a class="mas" href="#contacto" data-srv="${esc(x.titulo)}">Solicitar información</a></article>`);

/* ===== Sectores ===== */
$("sectores").innerHTML = `<h2>¿Para quién trabajamos?</h2>` + grid("srv-grid cuatro", DATA.sectores, x => `<article class="srv"><h3>${esc(x.titulo)}</h3><p>${esc(x.desc)}</p></article>`) + `<p class="nota">No nos limitamos a estos sectores: son nuestros primeros mercados.</p>`;

/* ===== Por qué elegirnos ===== */
$("porque").innerHTML = `<h2>¿Por qué elegirnos?</h2>` + grid("srv-grid cuatro", DATA.porque, x => `<article class="srv"><h3>${esc(x.titulo)}</h3><p>${esc(x.desc)}</p></article>`);

/* ===== Cómo trabajamos (secuencia numerada) ===== */
$("proceso").innerHTML = `<h2>Cómo trabajamos</h2>
  <ol class="pasos">${DATA.proceso.map(x => `<li><h3>${esc(x.titulo)}</h3><p>${esc(x.desc)}</p></li>`).join("")}</ol>
  <p class="nota">${esc(DATA.procesoNota)}</p>`;

/* ===== Paquetes ===== */
$("paquetes").innerHTML = `<h2>Paquetes y cotizaciones</h2><p class="c-intro">No manejamos precios fijos: cotizamos según las funcionalidades, la dificultad y el tiempo de desarrollo.</p>` +
  grid("srv-grid", DATA.paquetes, x => `<article class="srv"><h3>${esc(x.titulo)}</h3><p class="prob">${esc(x.para)}</p><p class="qi">Puede incluir</p>${lista(x.incluye)}</article>`) +
  `<a class="btn" href="#contacto">Solicitar cotización personalizada</a>`;

/* ===== Testimonios (solo si hay reales en data.js) ===== */
if (DATA.testimonios.length) {
  $("testimonios").hidden = false;
  $("testimonios").innerHTML = `<h2>Lo que dicen nuestros clientes</h2>` + grid("srv-grid", DATA.testimonios, x => `<figure class="srv"><blockquote>${esc(x.texto)}</blockquote><figcaption><strong>${esc(x.nombre)}</strong>, ${esc(x.negocio)}<br><small>${esc(x.servicio)}</small></figcaption></figure>`);
}

/* ===== Preguntas frecuentes ===== */
$("faq").innerHTML = `<h2>Preguntas frecuentes</h2>
  <div class="faq-list">${DATA.faq.map(x => `<details><summary>${esc(x.p)}</summary><p>${esc(x.r)}</p></details>`).join("")}</div>`;

/* ===== Contacto ===== */
const C = DATA.contacto;
const optsSrv = DATA.servicios.map(s => `<option>${esc(s.titulo)}</option>`).join("") + "<option>Otro / no estoy seguro</option>";
$("contacto").innerHTML = `<h2>Cuéntanos tu idea</h2>
  <p class="c-intro">${esc(C.texto)} También puedes <a href="${waLink ? esc(waLink) : "#"}" target="_blank" rel="noopener">escribirnos por WhatsApp</a> o al <a href="mailto:${esc(correoDe("a"))}">correo</a>.</p>
  <form id="form" novalidate>
    <label>Tu nombre<input name="nombre" required autocomplete="name"></label>
    <label>Nombre de tu negocio<input name="negocio" autocomplete="organization"></label>
    <label>Tu correo<input name="correo" type="email" required autocomplete="email"></label>
    <label>Tipo de servicio que necesitas<select name="servicio">${optsSrv}</select></label>
    <label>Describe tu proyecto<textarea name="mensaje" rows="5" required></textarea></label>
    <label>Presupuesto aproximado (opcional)<input name="presupuesto" inputmode="text" placeholder="Ej. $300"></label>
    <button type="submit">Enviar solicitud</button>
    <p id="estado" role="status" aria-live="polite"></p>
  </form>`;
document.addEventListener("click", e => {
  const s = e.target.closest("[data-srv]"); if (s) $("form").elements.servicio.value = s.dataset.srv;
});

const estado = t => { $("estado").textContent = t; };

$("form").addEventListener("submit", async e => {
  e.preventDefault();
  const f = e.target, d = Object.fromEntries(new FormData(f));
  if (!d.nombre.trim() || !/^\S+@\S+\.\S+$/.test(d.correo) || !d.mensaje.trim()) {
    estado("Revisa que el nombre, el correo y el mensaje estén completos.");
    return;
  }
  const para = [...new Set([correoDe("a"), correoDe("b")].filter(Boolean))];
  if (C.formspree) {
    try {
      const r = await fetch(C.formspree, {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify({ ...d, para: para.join(", ") })
      });
      if (!r.ok) throw new Error("envio");
      f.reset();
      estado("Mensaje enviado. Te responderemos pronto.");
    } catch {
      estado("No se pudo enviar el mensaje. Escríbenos directo a " + para.join(" o ") + ".");
    }
  } else {
    const cuerpo = d.mensaje + "\n\nNegocio: " + d.negocio + "\nServicio: " + d.servicio + "\nPresupuesto: " + d.presupuesto + "\n" + d.nombre + " (" + d.correo + ")";
    location.href = "mailto:" + para.join(",") + "?subject=" + encodeURIComponent("Contacto desde el portafolio") + "&body=" + encodeURIComponent(cuerpo);
    estado("Se abrió tu aplicación de correo con el mensaje listo para enviar.");
  }
});

/* El botón flotante de WhatsApp se oculta cuando el formulario está en pantalla, para que no tape el botón "Enviar" */
const wa = document.querySelector(".wa");
if (wa && "IntersectionObserver" in window) {
  new IntersectionObserver(([en]) => wa.classList.toggle("oculto", en.isIntersecting), { rootMargin: "0px 0px -10% 0px" })
    .observe($("form"));
}

/* ===== Footer ===== */
$("foot-grid").innerHTML = `<div><strong>${esc(DATA.pie)}</strong><p>${esc(DATA.piedesc)}</p></div>
  <div><strong>Secciones</strong><ul><li><a href="#inicio">Volver al inicio</a></li><li><a href="#filters">Proyectos</a></li><li><a href="#proceso">Cómo trabajamos</a></li><li><a href="#faq">Preguntas frecuentes</a></li></ul></div>
  <div><strong>Servicios</strong><ul>${DATA.servicios.map(s => `<li>${esc(s.titulo)}</li>`).join("")}</ul></div>
  <div><strong>Contacto</strong><ul><li><a href="mailto:${esc(correoDe("a"))}">${esc(correoDe("a"))}</a></li>${P.a.contacto.concat(P.b.contacto).filter(c => c.etiqueta === "GitHub").map(c => `<li><a href="${esc(c.href)}" target="_blank" rel="noopener">GitHub · ${esc(c.valor.split("/").pop())}</a></li>`).join("")}</ul></div>
  <p class="priv"><strong>Aviso de privacidad:</strong> ${esc(DATA.privacidad)}</p>`;
$("foot").textContent = "© " + new Date().getFullYear() + " " + DATA.pie + ". Todos los derechos reservados.";
