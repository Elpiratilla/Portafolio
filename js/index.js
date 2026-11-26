/* Página de inicio: proyectos, servicios, cotizador y contacto */
document.title = LANG === "en" ? "Portfolio · " + T.pie : "Portafolio · " + T.pie;
const metaDesc = document.querySelector('meta[name="description"]');
if (LANG === "en" && metaDesc) metaDesc.content = "Portfolio of Mateo Lara and Iker Mejia, software development students in El Salvador. Websites and custom systems with HTML, CSS, JavaScript, Node.js, PHP and SQL.";

const H = T.hero;
$("titulo").textContent = H.titulo;
$("intro").textContent = H.texto;
$("intro").insertAdjacentHTML("afterend",
  `<div class="cta"><a class="btn" href="#filters">${esc(U.verProyectos)}</a><a class="btn alt" href="#contacto">${esc(U.pedirCotizacion)}</a></div>
  <p class="linea">${esc(H.linea)}</p>
  <nav class="nav" aria-label="${esc(U.navAria)}">
    <a href="#filters">${esc(U.nProyectos)}</a>
    <a href="#servicios">${esc(U.nServicios)}</a>
    <a href="#sectores">${esc(U.nSectores)}</a>
    <a href="#tecnologias">${esc(U.nTec)}</a>
    <a href="#proceso">${esc(U.nProceso)}</a>
    <a href="#paquetes">${esc(U.nPaquetes)}</a>
    <a href="#cotizador">${esc(U.nCotizador)}</a>
    <a href="#contacto">${esc(U.nContacto)}</a>
    <a href="${esc(P.a.pagina)}">${esc(primerNombre(P.a.nombre))}</a>
    <a href="${esc(P.b.pagina)}">${esc(primerNombre(P.b.nombre))}</a>
  </nav>`);
$("filters").setAttribute("aria-label", U.filtrar);

const hayJuntos = T.proyectos.some(p => p.quien === "j");
const filtros = [["todos", U.todos], ["a", P.a.nombre], ["b", P.b.nombre], ["j", U.juntos]].filter(([k]) => k !== "j" || hayJuntos);
$("filters").innerHTML = filtros.map(([k, t], i) => `<button type="button" data-f="${k}" aria-pressed="${i === 0}">${esc(t)}</button>`).join("");

function render(f) {
  const items = T.proyectos.filter(p => f === "todos" || p.quien === f);
  $("list").innerHTML = items.length ? items.map(proyectoHTML).join("") : `<p class="empty">${esc(U.sinCategoria)}</p>`;
}
render("todos");

$("filters").addEventListener("click", e => {
  const b = e.target.closest("button"); if (!b) return;
  document.querySelectorAll("#filters button").forEach(x => x.setAttribute("aria-pressed", x === b));
  render(b.dataset.f);
});

$("quienes").innerHTML = `<h2>${esc(U.quienes)}</h2><div class="pl-grid">` + ["a", "b"].map(k => {
  const p = P[k];
  const mini = p.foto ? `<img class="mini" src="${esc(p.foto)}" alt="" width="56" height="56">` : `<span class="mini" aria-hidden="true">${esc(iniciales(p.nombre))}</span>`;
  return `<a class="pl ${k}" href="${esc(p.pagina)}">${mini}<span><strong>${esc(p.nombre)}</strong><small>${esc(p.rol)}. ${esc(U.verPerfil)}</small></span></a>`;
}).join("") + `</div>`;

const grid = (cls, arr, fn) => `<div class="${cls}">${arr.map(fn).join("")}</div>`;
const lista = a => `<ul class="inc">${a.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`;

/* ===== Servicios (catálogo) ===== */
$("servicios").innerHTML = `<h2>${esc(U.srvTitulo)}</h2>` + grid("srv-grid", T.servicios, x =>
  `<article class="srv"><h3>${esc(x.titulo)}</h3><p class="prob"><strong>${esc(U.resuelve)}</strong> ${esc(x.problema)}</p><p class="qi">${esc(U.incluye)}</p>${lista(x.incluye)}<div class="srv-links"><a class="mas" href="#contacto" data-srv="${esc(x.titulo)}">${esc(U.pedirInfo)}</a>${x.demo ? `<a class="mas" href="${esc(x.demo)}">${esc(U.verEjemplo)}</a>` : ""}</div></article>`);

/* ===== Sectores ===== */
$("sectores").innerHTML = `<h2>${esc(U.sectoresTitulo)}</h2>` + grid("srv-grid cuatro", T.sectores, x => `<article class="srv"><h3>${esc(x.titulo)}</h3><p>${esc(x.desc)}</p></article>`) + `<p class="nota">${esc(U.sectoresNota)}</p>`;

/* ===== Por qué elegirnos ===== */
$("porque").innerHTML = `<h2>${esc(U.porqueTitulo)}</h2>` + grid("srv-grid cuatro", T.porque, x => `<article class="srv"><h3>${esc(x.titulo)}</h3><p>${esc(x.desc)}</p></article>`);

/* ===== Tecnologías: se cuentan solas a partir de los proyectos ===== */
const conteo = {};
T.proyectos.forEach(p => p.tags.forEach(t => { conteo[t] = (conteo[t] || 0) + 1; }));
const techs = Object.entries(conteo).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
const usuarioGH = k => { const g = P[k].contacto.find(c => c.etiqueta === "GitHub"); return g ? g.href.replace(/\/+$/, "").split("/").pop() : ""; };
$("tecnologias").innerHTML = `<h2>${esc(U.tecTitulo)}</h2><p class="c-intro">${esc(U.tecIntro)}</p>
  <ul class="tec">${techs.map(([t, n]) => `<li><span>${esc(t)}</span><b>${n} ${esc(n === 1 ? U.tecProyecto : U.tecProyectos)}</b></li>`).join("")}</ul>
  <ul class="gh" id="gh">${["a", "b"].filter(usuarioGH).map(k => `<li data-u="${esc(usuarioGH(k))}"><a href="https://github.com/${esc(usuarioGH(k))}" target="_blank" rel="noopener">${esc(U.verGithub + primerNombre(P[k].nombre))}</a> <span></span></li>`).join("")}</ul>`;

/* Cantidad de repositorios públicos: se pide a GitHub y, si falla o se acaba el límite, simplemente no se muestra */
document.querySelectorAll("#gh li").forEach(async li => {
  const u = li.dataset.u, clave = "gh-" + u;
  try {
    let n = sessionStorage.getItem(clave);
    if (n === null) {
      const r = await fetch("https://api.github.com/users/" + encodeURIComponent(u));
      if (!r.ok) return;
      n = String((await r.json()).public_repos);
      sessionStorage.setItem(clave, n);
    }
    li.querySelector("span").textContent = "· " + n + " " + U.repos;
  } catch {}
});

/* ===== Cómo trabajamos (secuencia numerada) ===== */
$("proceso").innerHTML = `<h2>${esc(U.procesoTitulo)}</h2>
  <ol class="pasos">${T.proceso.map(x => `<li><h3>${esc(x.titulo)}</h3><p>${esc(x.desc)}</p></li>`).join("")}</ol>
  <p class="nota">${esc(T.procesoNota)}</p>`;

/* ===== Paquetes: el "desde" sale del cotizador para que nunca se contradigan ===== */
const baseDe = id => T.cotizador.base.find(b => b.id === id);
$("paquetes").innerHTML = `<h2>${esc(U.paquetesTitulo)}</h2><p class="c-intro">${esc(U.paquetesIntro)}</p>` +
  grid("srv-grid", T.paquetes, x => {
    const b = baseDe(x.baseId);
    return `<article class="srv"><h3>${esc(x.titulo)}</h3>${b ? `<p class="desde">${esc(U.desde)} <strong>${dinero(b.precio[0])}</strong> USD</p>` : ""}<p class="prob">${esc(x.para)}</p><p class="qi">${esc(U.puedeIncluir)}</p>${lista(x.incluye)}</article>`;
  }) +
  `<a class="btn" href="#contacto">${esc(U.paquetesCta)}</a>`;

/* ===== Cotizador ===== */
const CZ = T.cotizador;
$("cotizador").innerHTML = `<h2>${esc(U.cotTitulo)}</h2><p class="c-intro">${esc(U.cotIntro)}</p>
  <form id="cot" class="cot" novalidate>
    <fieldset><legend>${esc(U.cotTipo)}</legend>
      ${CZ.base.map((b, i) => `<label class="op"><input type="radio" name="base" value="${esc(b.id)}"${i === 0 ? " checked" : ""}><span><strong>${esc(b.titulo)}</strong><small>${esc(b.desc)}</small></span></label>`).join("")}
    </fieldset>
    <fieldset><legend>${esc(U.cotExtras)}</legend>
      ${CZ.extras.map(x => `<label class="op"><input type="checkbox" name="extra" value="${esc(x.id)}"><span><strong>${esc(x.titulo)}</strong></span></label>`).join("")}
      <label class="op"><input type="checkbox" name="urgente" value="1"><span><strong>${esc(U.cotUrgente)}</strong></span></label>
    </fieldset>
    <div class="cot-res" role="status" aria-live="polite">
      <p class="cot-t">${esc(U.cotResultado)}</p>
      <p class="cot-rango" id="cot-rango"></p>
      <p class="nota">${esc(U.cotNota)}</p>
      <a class="btn" id="cot-enviar" href="#contacto">${esc(U.cotEnviar)}</a>
    </div>
  </form>`;

let estimado = { rango: "", items: "", baseId: CZ.base[0].id };
function calcular() {
  const f = $("cot").elements;
  const b = CZ.base.find(x => x.id === f.base.value);
  const sel = [...$("cot").querySelectorAll('input[name="extra"]:checked')].map(i => CZ.extras.find(x => x.id === i.value));
  let min = b.precio[0] + sel.reduce((s, x) => s + x.precio[0], 0);
  let max = b.precio[1] + sel.reduce((s, x) => s + x.precio[1], 0);
  const urg = f.urgente.checked;
  if (urg) { min *= CZ.urgente; max *= CZ.urgente; }
  const r5 = n => Math.round(n / 5) * 5;
  const rango = dinero(r5(min)) + " – " + dinero(r5(max));
  $("cot-rango").textContent = rango + " USD";
  estimado = { rango, baseId: b.id, items: [b.titulo].concat(sel.map(x => x.titulo), urg ? [U.cotUrgente] : []).join(", ") };
}
$("cot").addEventListener("input", calcular);
$("cot").addEventListener("submit", e => e.preventDefault());
calcular();

/* ===== Testimonios (solo si hay reales en data.js) ===== */
if (T.testimonios.length) {
  $("testimonios").hidden = false;
  $("testimonios").innerHTML = `<h2>${esc(U.testimoniosTitulo)}</h2>` + grid("srv-grid", T.testimonios, x => `<figure class="srv"><blockquote>${esc(x.texto)}</blockquote><figcaption><strong>${esc(x.nombre)}</strong>, ${esc(x.negocio)}<br><small>${esc(x.servicio)}</small></figcaption></figure>`);
}

/* ===== Preguntas frecuentes ===== */
$("faq").innerHTML = `<h2>${esc(U.faqTitulo)}</h2>
  <div class="faq-list">${T.faq.map(x => `<details><summary>${esc(x.p)}</summary><p>${esc(x.r)}</p></details>`).join("")}</div>`;

/* ===== Contacto ===== */
const C = T.contacto;
const optsSrv = T.servicios.map(s => `<option>${esc(s.titulo)}</option>`).join("") + `<option>${esc(U.fOtro)}</option>`;
$("contacto").innerHTML = `<h2>${esc(U.cTitulo)}</h2>
  <p class="c-intro">${esc(C.texto)} ${esc(U.cTambien)} <a href="${waLink ? esc(waLink) : "#"}" target="_blank" rel="noopener">${esc(U.cWhats)}</a> ${esc(U.cO)} <a href="mailto:${esc(correoDe("a"))}">${esc(U.cCorreo)}</a>.</p>
  <form id="form" novalidate>
    <label>${esc(U.fNombre)}<input name="nombre" required autocomplete="name"></label>
    <label>${esc(U.fNegocio)}<input name="negocio" autocomplete="organization"></label>
    <label>${esc(U.fCorreo)}<input name="correo" type="email" required autocomplete="email"></label>
    <label>${esc(U.fServicio)}<select name="servicio">${optsSrv}</select></label>
    <label>${esc(U.fMensaje)}<textarea name="mensaje" rows="5" required></textarea></label>
    <label>${esc(U.fPresupuesto)}<input name="presupuesto" inputmode="text" placeholder="${esc(U.fPlaceholder)}"></label>
    <div class="hp" aria-hidden="true"><label>No llenar este campo<input type="text" name="_gotcha" tabindex="-1" autocomplete="off"></label></div>
    <button type="submit">${esc(U.fEnviar)}</button>
    <p id="estado" role="status" aria-live="polite"></p>
  </form>`;

document.addEventListener("click", e => {
  const s = e.target.closest("[data-srv]"); if (s) $("form").elements.servicio.value = s.dataset.srv;
});
/* "Enviar este estimado": copia el resultado del cotizador al mensaje y elige el servicio que corresponde */
$("cot-enviar").addEventListener("click", () => {
  const f = $("form").elements;
  const linea = U.cotMensaje.replace("{rango}", estimado.rango).replace("{items}", estimado.items);
  f.mensaje.value = f.mensaje.value.trim() ? f.mensaje.value.trim() + "\n\n" + linea : linea;
  f.servicio.value = T.servicios[estimado.baseId === "sistema" ? 1 : 0].titulo;
});

const estado = t => { $("estado").textContent = t; };

$("form").addEventListener("submit", async e => {
  e.preventDefault();
  const f = e.target, d = Object.fromEntries(new FormData(f));
  if (d._gotcha) { f.reset(); estado(U.fOk); return; }   /* un robot llenó el campo oculto: se descarta sin avisar */
  delete d._gotcha;
  if (!d.nombre.trim() || !/^\S+@\S+\.\S+$/.test(d.correo) || !d.mensaje.trim()) {
    estado(U.fRevisa);
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
      estado(U.fOk);
    } catch {
      estado(U.fError + para.join(LANG === "en" ? " or " : " o ") + ".");
    }
  } else {
    const cuerpo = d.mensaje + "\n\n" + U.fNegocio + ": " + d.negocio + "\n" + U.fServicio + ": " + d.servicio + "\n" + U.fPresupuesto + ": " + d.presupuesto + "\n" + d.nombre + " (" + d.correo + ")";
    location.href = "mailto:" + para.join(",") + "?subject=" + encodeURIComponent(U.fAsunto) + "&body=" + encodeURIComponent(cuerpo);
    estado(U.fMailto);
  }
});

/* El botón flotante de WhatsApp se oculta cuando el formulario está en pantalla, para que no tape el botón "Enviar" */
const wa = document.querySelector(".wa");
if (wa && "IntersectionObserver" in window) {
  new IntersectionObserver(([en]) => wa.classList.toggle("oculto", en.isIntersecting), { rootMargin: "0px 0px -10% 0px" })
    .observe($("form"));
}

/* ===== Footer ===== */
$("foot-grid").innerHTML = `<div><strong>${esc(T.pie)}</strong><p>${esc(T.piedesc)}</p></div>
  <div><strong>${esc(U.pieSecciones)}</strong><ul><li><a href="#inicio">${esc(U.pieInicio)}</a></li><li><a href="#filters">${esc(U.nProyectos)}</a></li><li><a href="#proceso">${esc(U.procesoTitulo)}</a></li><li><a href="#faq">${esc(U.pieFaq)}</a></li></ul></div>
  <div><strong>${esc(U.pieServicios)}</strong><ul>${T.servicios.map(s => `<li>${esc(s.titulo)}</li>`).join("")}</ul></div>
  <div><strong>${esc(U.pieContacto)}</strong><ul><li><a href="mailto:${esc(correoDe("a"))}">${esc(correoDe("a"))}</a></li>${P.a.contacto.concat(P.b.contacto).filter(c => c.etiqueta === "GitHub").map(c => `<li><a href="${esc(c.href)}" target="_blank" rel="noopener">GitHub · ${esc(c.valor.split("/").pop())}</a></li>`).join("")}</ul></div>
  <p class="priv"><strong>${esc(U.privAviso)}</strong> ${esc(T.privacidad)}</p>`;
$("foot").textContent = "© " + new Date().getFullYear() + " " + T.pie + ". " + U.derechos;
