# Portafolio · Mateo Lara e Iker Mejia

Sitio estático (HTML, CSS y JavaScript sin dependencias) que presenta nuestros proyectos, servicios y datos de contacto. Está en español e inglés.

## Estructura

| Ruta | Para qué sirve |
| --- | --- |
| `index.html` | Inicio: presentación, proyectos destacados, quiénes somos y llamada a contactar. |
| `proyectos.html` | Todos los proyectos con filtros, y las tecnologías usadas. |
| `servicios.html` | Servicios, sectores y cómo trabajamos. |
| `precios.html` | Paquetes, cotizador interactivo y preguntas frecuentes. |
| `contacto.html` | Formulario y otras formas de contacto. |
| `persona1.html`, `persona2.html` | Perfil de cada integrante. |
| `js/data.js` | **Aquí se edita todo en español**: proyectos, servicios, paquetes, cotizador, FAQ, contacto. |
| `js/data.en.js` | La versión en inglés. Solo lleva textos y se combina por posición con `data.js`: mantén el mismo orden. |
| `js/common.js` | Idioma, encabezado, pie de página y ventana de detalles (todas las páginas). |
| `js/paginas.js` | Pinta el contenido de Inicio, Proyectos, Servicios, Precios y Contacto. Cada bloque solo se muestra si la página tiene su contenedor. |
| `js/persona.js` | Pinta las páginas de perfil. |
| `css/index.css` | Estilos, con modo claro y oscuro. |
| `demos/menu/` | Demo de menú digital con QR (estática). |
| `demos/inventario/` | Demo de inventario con Node.js + SQLite (ver su README). |
| `tools/` | Scripts de ayuda (abajo). |
| `404.html`, `robots.txt`, `sitemap.xml` | Páginas y archivos para buscadores. |

## Cómo agregar o mover contenido entre páginas

Cada página es un HTML corto con contenedores vacíos (por ejemplo `<section id="faq">`). `js/paginas.js` llena el contenedor si existe. Para mover las preguntas frecuentes a Contacto, basta cambiar de archivo la línea `<section class="faq" id="faq"></section>`.

Los enlaces del menú y del pie salen de la lista `PAGINAS` en `js/common.js`. Si agregas una página nueva, agrégala ahí, en `sitemap.xml` y ponle `data-pagina="nombre"` en el `<body>`.

El cotizador y el botón "Solicitar información" abren Contacto con el servicio y el mensaje ya llenos.

## Cómo agregar un proyecto

1. Copia un bloque dentro de `proyectos` en `js/data.js`. `quien` es `"a"` (Mateo), `"b"` (Iker) o `"j"` (los dos).
2. Agrega su traducción en `js/data.en.js`, **en la misma posición** de la lista `proyectos`.
3. Opcional: escribe su ficha en `detalles` (con el mismo `titulo`) y, si tienes datos reales, `metricas: ["..."]`.

## Al publicar el sitio

1. Reemplaza el dominio en las etiquetas de SEO:
   ```bash
   node tools/dominio.js https://tu-dominio.com/
   ```
   Si usas GitHub Pages sin dominio propio, la dirección es `https://TU-USUARIO.github.io/Portafolio/`.
2. Revisa la vista previa al compartir en <https://www.opengraph.xyz/>.
3. Envía `sitemap.xml` a Google Search Console.

## Capturas de pantalla de los proyectos

```bash
npm install --no-save playwright
npx playwright install chromium
node tools/capturas.js --aplicar
```

Guarda una imagen por demo en `img/capturas/` y llena el campo `img` de cada proyecto. Sin `--aplicar` solo muestra las líneas para pegar a mano.

## Cotizador y precios

Los rangos están en `cotizador` dentro de `js/data.js`. **Son valores de ejemplo: ajústalos a lo que realmente cobren.** El "Desde" de cada paquete sale de ese mismo cotizador.

## Desarrollo local

```bash
npx serve .          # o: python3 -m http.server 8000
```

Para ver la versión en inglés: `?lang=en`.

## Pendientes que dependen de ustedes

- Poner datos reales en `detalles` (hoy son borradores) y en `testimonios` cuando haya clientes.
- Revisar las fechas de formación en `personas`.
- Usar un correo distinto para cada persona, si lo desean.
