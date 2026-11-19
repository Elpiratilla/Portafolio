/* ===== AQUÍ SE EDITA TODO: nombres, proyectos y contacto ===== */
const DATA = {
  titulo: "Nuestro portafolio",
  intro: "Proyectos de desarrollo web que hemos construido, juntos y por separado. Cada color indica quién lo hizo.",
  personas: {
    a: {
      nombre: "Mateo Lara",
      pagina: "/persona1.html",
      rol: "Front end y Back end",
      foto: "", // ejemplo: "img/mateo.jpg" (si queda vacío se muestran las iniciales)
      sobre: "Escribe aquí 2 o 3 líneas sobre ti: qué te gusta construir, qué estás aprendiendo y qué buscas.",
      habilidades: ["HTML", "CSS", "JavaScript", "Node.js", "SQL", "PHP"],
      formacion: [
        { titulo: "Carrera: Desarrollo de software", lugar: "Colegio Don Bosco", fecha: "2016 – actualidad" }
      ],
      contacto: [
        { etiqueta: "Correo", valor: "mateolara2915@gmail.com", href: "mailto:mateolara2915@gmail.com" },
        { etiqueta: "GitHub", valor: "github.com/Elpiratilla", href: "https://github.com/Elpiratilla" }
      ]
    },
    b: {
      nombre: "Iker Mejia",
      pagina: "/persona2.html",
      rol: "Front end y Back end",
      foto: "", // ejemplo: "img/iker.jpg"
      sobre: "Escribe aquí 2 o 3 líneas sobre ti: qué te gusta construir, qué estás aprendiendo y qué buscas.",
      habilidades: ["HTML", "CSS", "JavaScript", "SQL", "PHP"],
      formacion: [
        { titulo: "Carrera: Desarrollo de software", lugar: "Colegio Don Bosco", fecha: "2014 – actualidad" }
      ],
      contacto: [
        { etiqueta: "Correo", valor: "alem3jia774@gmail.com", href: "mailto:alem3jia774@gmail.com" },
        { etiqueta: "GitHub", valor: "github.com/alem3jia774-byte", href: "https://github.com/alem3jia774-byte" }
      ]
    }
    },
  /* quien: "a" (persona 1), "b" (persona 2) o "j" (juntos) */
    proyectos: [
    { titulo: "Go 503", quien: "a", desc: "Proyecto de rastreo de autobuses para saber a qué hora llegan y por donde pasan.", tags: ["HTML", "CSS", "JavaScript", "Node.js", "SQL"], demo: "https://go503.onrender.com", codigo: "https://github.com/Elpiratilla/bus-tracker" },
    { titulo: "Sin límites", quien: "a", desc: "Proyecto para promover la inclusión digital Ganador del primer lugar en crea j Colegio Don Bosco bachiller primer año.", tags: ["HTML", "CSS", "JavaScript", "PHP"], demo: "https://sinlimites.lat/Inicio", codigo: "https://github.com/Elpiratilla/paginacrea1" },
    { titulo: "Blue's", quien: "b", desc: "Proyecto de musicoterapia Ganador de segundo lugar en crea j Colegio Don Bosco bachiller primer año.", tags: ["HTML", "CSS", "JavaScript"], demo: "", codigo: "https://github.com/alem3jia774-byte/BLUES" }
    ],
    contacto: "Escríbenos a correo@ejemplo.com"
};
