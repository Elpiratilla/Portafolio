/* Funciones compartidas por todas las páginas */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));

/* ===== Idioma: ?lang=en, lo guardado por la persona, o el idioma del navegador ===== */
const IDIOMAS = ["es", "en"];
function elegirIdioma() {
  const q = new URLSearchParams(location.search).get("lang");
  if (IDIOMAS.includes(q)) { try { localStorage.setItem("lang", q); } catch {} return q; }
  try { const g = localStorage.getItem("lang"); if (IDIOMAS.includes(g)) return g; } catch {}
  return String(navigator.language || "es").toLowerCase().startsWith("es") ? "es" : "en";
}
/* Une el texto en inglés sobre el español. Las listas se combinan por posición. */
function unir(base, extra) {
  if (Array.isArray(base) && Array.isArray(extra)) return base.map((x, i) => i < extra.length ? unir(x, extra[i]) : x).concat(extra.slice(base.length));
  if (base && extra && typeof base === "object" && typeof extra === "object" && !Array.isArray(base)) {
    const o = { ...base };
    for (const k of Object.keys(extra)) o[k] = k in base ? unir(base[k], extra[k]) : extra[k];
    return o;
  }
  return extra === undefined ? base : extra;
}
const LANG = elegirIdioma();
const T = LANG === "en" && typeof DATA_EN !== "undefined" ? unir(DATA, DATA_EN) : DATA;
const U = T.ui;
document.documentElement.lang = LANG;

const P = T.personas;
const primerNombre = n => n.split(" ")[0];
const iniciales = n => n.split(" ").map(x => x.charAt(0)).join("").slice(0, 2).toUpperCase();
const correoDe = k => (P[k].contacto.find(c => c.etiqueta === "Correo") || {}).valor || "";
const byLabel = k => k === "j" ? U.hechoJuntos : U.hechoPor + P[k].nombre;
const dinero = n => "$" + Number(n).toLocaleString(LANG === "en" ? "en-US" : "es-SV");

function proyectoHTML(p) {
  const dormida = p.demo && /onrender\.com/i.test(p.demo);
  return `
  <article class="row${p.img ? " has-shot" : ""}" data-who="${p.quien}">
    <div class="tile" aria-hidden="true">${esc(p.titulo.charAt(0))}</div>
    <div>
      ${p.img ? `<img class="shot" src="${esc(p.img)}" alt="${esc(U.captura + p.titulo)}" width="1280" height="720" loading="lazy">` : ""}
      <h2>${esc(p.titulo)}</h2>
      <p class="by">${esc(byLabel(p.quien))}</p>
      ${p.premio ? `<p class="award">${esc(p.premio)}</p>` : ""}
      <p class="desc">${esc(p.desc)}</p>
      <ul class="tags">${p.tags.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
      <div class="links">${p.demo ? `<a href="${esc(p.demo)}">${esc(U.verDemo)}</a>` : ""}${p.codigo ? `<a href="${esc(p.codigo)}">${esc(U.verCodigo)}</a>` : ""}${T.detalles && T.detalles[p.titulo] ? `<button type="button" class="det" data-det="${esc(p.titulo)}">${esc(U.verDetalles)}</button>` : ""}</div>
      ${dormida ? `<p class="nota-demo">${esc(U.demoDespierta)}</p>` : ""}
    </div>
  </article>`;
}

/* ===== Textos fijos de las páginas, en el idioma elegido ===== */
const poner = (sel, txt) => { const e = document.querySelector(sel); if (e) e.textContent = txt; };
poner(".skip", U.skip);
poner(".back", U.back);
const btnTema = $("theme");
btnTema.setAttribute("aria-label", U.theme);
btnTema.setAttribute("title", U.theme);

const btnLang = $("lang");
if (btnLang) {
  btnLang.textContent = U.otroIdioma;
  btnLang.setAttribute("aria-label", U.idiomaAria);
  btnLang.setAttribute("lang", LANG === "es" ? "en" : "es");
  btnLang.addEventListener("click", () => {
    try { localStorage.setItem("lang", LANG === "es" ? "en" : "es"); } catch {}
    const u = new URL(location.href); u.searchParams.delete("lang");
    location.href = u.toString();
  });
}

$("theme").addEventListener("click", () => {
  const r = document.documentElement;
  const dark = r.dataset.theme ? r.dataset.theme === "dark" : matchMedia("(prefers-color-scheme: dark)").matches;
  r.dataset.theme = dark ? "light" : "dark";
});

/* ===== WhatsApp: botón flotante (se oculta si no hay número en data.js) ===== */
const WA = T.whatsapp || {};
const waNum = String(WA.numero || "").replace(/\D/g, "");
const waLink = waNum ? "https://wa.me/" + waNum + "?text=" + encodeURIComponent(WA.mensaje || "") : "";
if (waLink) {
  document.body.insertAdjacentHTML("beforeend",
    `<a class="wa" href="${esc(waLink)}" target="_blank" rel="noopener" aria-label="${esc(U.waAria)}">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="currentColor"><path d="M4 3h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/></svg>
      <span>WhatsApp</span>
    </a>`);
}

/* ===== Ventana de detalles de proyecto ===== */
document.body.insertAdjacentHTML("beforeend", `<dialog id="dlg" aria-labelledby="dlg-t"><div id="dlg-c"></div><button type="button" id="dlg-x">${esc(U.cerrar)}</button></dialog>`);
const dlg = $("dlg");
document.addEventListener("click", e => {
  const b = e.target.closest(".det");
  if (b) {
    const t = b.dataset.det, d = T.detalles[t], p = T.proyectos.find(x => x.titulo === t);
    const filas = [[U.objetivo, "objetivo"], [U.problema, "problema"], [U.solucion, "solucion"], [U.resultado, "resultado"]]
      .map(([l, k]) => `<dt>${esc(l)}</dt><dd>${esc(d[k])}</dd>`).join("");
    const met = d.metricas && d.metricas.length ? `<dt>${esc(U.metricas)}</dt><dd><ul class="metricas">${d.metricas.map(m => `<li>${esc(m)}</li>`).join("")}</ul></dd>` : "";
    $("dlg-c").innerHTML = `<h2 id="dlg-t">${esc(t)}</h2><dl>${filas}${met}<dt>${esc(U.tecnologias)}</dt><dd>${esc(p.tags.join(", "))}</dd></dl>`;
    dlg.showModal();
  } else if (e.target === dlg || e.target.id === "dlg-x") dlg.close();
});


/* ===== Encabezado: menú, resaltado de sección y sombra al bajar ===== */
const enIndex = !!$("filters");
const baseHref = enIndex ? "" : "index.html";
/* [ancla, texto, elemento que se observa para saber en qué sección vamos] */
const NAV = [["filters", U.nProyectos, "list"], ["servicios", U.nServicios, "servicios"], ["tecnologias", U.nTec, "tecnologias"],
             ["proceso", U.nProceso, "proceso"], ["paquetes", U.nPaquetes, "paquetes"], ["cotizador", U.nCotizador, "cotizador"]];
const hdr = $("site-header"), nav = $("site-nav"), mbtn = $("menu-btn");
nav.setAttribute("aria-label", U.navAria);
nav.innerHTML = NAV.map(([id, t]) => `<a href="${baseHref}#${id}" data-sec="${id}">${esc(t)}</a>`).join("")
  + `<a class="nav-cta btn" href="${baseHref}#contacto">${esc(U.cotizar)}</a>`;
$("bar-cta").textContent = U.cotizar;
mbtn.setAttribute("aria-label", U.menu);

const cerrarMenu = () => { hdr.classList.remove("open"); mbtn.setAttribute("aria-expanded", "false"); };
mbtn.addEventListener("click", () => {
  const abre = !hdr.classList.contains("open");
  hdr.classList.toggle("open", abre);
  mbtn.setAttribute("aria-expanded", String(abre));
});
nav.addEventListener("click", e => { if (e.target.closest("a")) cerrarMenu(); });
document.addEventListener("click", e => { if (!hdr.contains(e.target)) cerrarMenu(); });
document.addEventListener("keydown", e => { if (e.key === "Escape" && hdr.classList.contains("open")) { cerrarMenu(); mbtn.focus(); } });
const anchoGrande = matchMedia("(min-width: 961px)");
if (anchoGrande.addEventListener) anchoGrande.addEventListener("change", e => { if (e.matches) cerrarMenu(); });

const marcarScroll = () => hdr.classList.toggle("scrolled", window.scrollY > 8);
window.addEventListener("scroll", marcarScroll, { passive: true });
marcarScroll();

/* Resalta en el menú la sección que se está viendo (solo en la página de inicio) */
if (enIndex && "IntersectionObserver" in window) {
  const secciones = NAV.map(([id, , el]) => [document.getElementById(el), id]).filter(([el]) => el);
  const visibles = new Set();
  const io = new IntersectionObserver(entradas => {
    entradas.forEach(en => en.isIntersecting ? visibles.add(en.target) : visibles.delete(en.target));
    const activa = secciones.find(([el]) => visibles.has(el));
    nav.querySelectorAll("a[data-sec]").forEach(a => a.removeAttribute("aria-current"));
    if (activa) nav.querySelector(`a[data-sec="${activa[1]}"]`).setAttribute("aria-current", "true");
  }, { rootMargin: "-30% 0px -60% 0px" });
  secciones.forEach(([el]) => io.observe(el));
}

/* ===== Pie de página (el mismo en todas las páginas) ===== */
(function pintarPie() {
  const g = $("foot-grid"); if (!g) return;
  const gh = P.a.contacto.concat(P.b.contacto).filter(c => c.etiqueta === "GitHub");
  const enlace = (id, t) => `<li><a href="${baseHref}#${id}">${esc(t)}</a></li>`;
  g.innerHTML = `
    <div class="foot-brand">
      <a class="brand" href="${enIndex ? "#inicio" : "index.html"}"><span class="logo" aria-hidden="true"><i></i><i></i></span><span class="brand-t">${esc(T.pie)}</span></a>
      <p>${esc(T.piedesc)}</p>
    </div>
    <nav aria-label="${esc(U.pieSecciones)}"><p class="foot-t">${esc(U.pieSecciones)}</p><ul>
      ${enlace("filters", U.nProyectos)}${enlace("proceso", U.procesoTitulo)}${enlace("paquetes", U.nPaquetes)}${enlace("cotizador", U.nCotizador)}${enlace("faq", U.pieFaq)}
    </ul></nav>
    <div><p class="foot-t">${esc(U.pieServicios)}</p><ul>${T.servicios.map(s => enlace("servicios", s.titulo)).join("")}</ul></div>
    <div><p class="foot-t">${esc(U.pieContacto)}</p><ul>
      <li><a href="mailto:${esc(correoDe("a"))}">${esc(correoDe("a"))}</a></li>
      ${waLink ? `<li><a href="${esc(waLink)}" target="_blank" rel="noopener">WhatsApp</a></li>` : ""}
      ${gh.map(c => `<li><a href="${esc(c.href)}" target="_blank" rel="noopener">GitHub · ${esc(c.valor.split("/").pop())}</a></li>`).join("")}
    </ul></div>
    <p class="priv"><strong>${esc(U.privAviso)}</strong> ${esc(T.privacidad)}</p>`;
  $("foot").textContent = "© " + new Date().getFullYear() + " " + T.pie + ". " + U.derechos;
  $("to-top").textContent = "↑ " + U.pieInicio;
})();