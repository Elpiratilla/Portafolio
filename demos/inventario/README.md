# Demo de inventario (Node.js + SQLite)

Sistema pequeño de inventario: productos, stock, stock mínimo con alerta y valor total.

```bash
npm install
npm start        # http://localhost:3000
```

- `server.js`: servidor con `node:http` y `better-sqlite3`. API REST en `/api/productos` (GET, POST, PUT, DELETE) y `/api/resumen`.
- `public/index.html`: la interfaz. Si no encuentra el servidor, funciona en **modo demostración** guardando los datos en el navegador (así también se ve en GitHub Pages).
- La base `inventario.db` se crea sola la primera vez, con productos de ejemplo. No se sube a Git.

Para publicarlo con base de datos real necesita un hosting que ejecute Node (por ejemplo Render). Comando de inicio: `npm start`.
