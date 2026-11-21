/* ===== AQUÍ SE EDITA TODO: nombres, proyectos, servicios y contacto ===== */
const DATA = {
  titulo: "Nuestro portafolio",
  intro: "Proyectos de desarrollo web que hemos construido, juntos y por separado. Cada color indica quién lo hizo.",

  personas: {
    a: {
      nombre: "Mateo Lara",
      pagina: "persona1.html",
      rol: "Front end y Back end",
      foto: "", // ejemplo: "img/mateo.jpg" (si queda vacío se muestran las iniciales)
      // BORRADOR: cámbialo por tus propias palabras
      sobre: "Me gusta construir páginas y sistemas web que resuelvan algo real. En Go 503 rastreo buses para saber a qué hora llegan, y con Sin límites trabajé en inclusión digital. Sigo aprendiendo Node.js y bases de datos, y busco proyectos donde pueda seguir creciendo.",
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
      pagina: "persona2.html",
      rol: "Front end y Back end",
      foto: "", // ejemplo: "img/iker.jpg"
      sobre: "Hola, soy Iker. Me gusta aprender cosas nuevas y me interesan la programación y el desarrollo web. Estoy aprendiendo a crear aplicaciones web y móviles, y busco oportunidades para mejorar mis habilidades y trabajar en proyectos interesantes.",
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

  /* quien: "a" = Mateo, "b" = Iker, "j" = los dos
     img: ruta de una captura, ejemplo "img/go503.png" (16:9). Si queda vacío no se muestra.
     premio: se muestra como etiqueta destacada (déjalo vacío si no aplica) */
  proyectos: [
    {
      titulo: "Go 503", quien: "a", img: "",
      desc: "Rastreo de autobuses para saber a qué hora llegan y por dónde pasan.",
      premio: "",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "SQL"],
      demo: "https://go503.onrender.com", codigo: "https://github.com/Elpiratilla/bus-tracker"
    },
    {
      titulo: "Sin límites", quien: "a", img: "",
      desc: "Proyecto para promover la inclusión digital.",
      premio: "1.er lugar · CREA J · Colegio Don Bosco (primer año de bachillerato)",
      tags: ["HTML", "CSS", "JavaScript", "PHP"],
      demo: "https://sinlimites.lat/Inicio", codigo: "https://github.com/Elpiratilla/paginacrea1"
    },
    {
      titulo: "Blue's", quien: "b", img: "",
      desc: "Proyecto de musicoterapia.",
      premio: "2.º lugar · CREA J · Colegio Don Bosco (primer año de bachillerato)",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://blues-kniw.onrender.com/start.html", codigo: "https://github.com/alem3jia774-byte/BLUES"
    }
  ],

  servicios: [
    { titulo: "Páginas web para negocios", desc: "Sitio de una o varias páginas que se ve bien en celular y presenta tu negocio, tus productos y cómo contactarte." },
    { titulo: "Sistemas a la medida", desc: "Registro de clientes, inventario, reservas o control de tiempo, con base de datos y panel para administrarlo." },
    { titulo: "Mejora de un sitio existente", desc: "Ordenamos el diseño, lo hacemos responsive y corregimos lo que no funciona en tu página actual." }
  ],

  contacto: {
    texto: "Cuéntanos qué necesitas y te respondemos por correo.",
    formspree: "https://formspree.io/f/xwlonoye"
  },

  pie: "Mateo Lara e Iker Mejia"
};