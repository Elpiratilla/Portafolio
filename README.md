# Portafolio · Mateo Lara e Iker Mejia

Sitio estático (HTML, CSS y JavaScript sin dependencias) que presenta nuestros proyectos, servicios y datos de contacto. Está en español e inglés.

## Estructura

| Ruta | Para qué sirve |
| --- | --- |
| `index.html`, `persona1.html`, `persona2.html` | Páginas. El contenido se pinta con JavaScript a partir de `js/data.js`. |
| `js/data.js` | **Aquí se edita todo en español**: proyectos, servicios, paquetes, cotizador, FAQ, contacto. |
| `js/data.en.js` | La versión en inglés. Solo lleva textos y se combina por posición con `data.js`: mantén el mismo orden. |
| `js/common.js`, `index.js`, `persona.js` | Lógica de las páginas. |
| `css/index.css` | Estilos, con modo claro y oscuro. |
| `demos/menu/` | Demo de menú digital con QR (estática). |
| `demos/inventario/` | Demo de inventario con Node.js + SQLite (ver su README). |
| `tools/` | Scripts de ayuda (abajo). |
| `404.html`, `robots.txt`, `sitemap.xml` | Páginas y archivos para buscadores. |

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
