/* ===== AQUÍ SE EDITA TODO: nombres, proyectos, servicios y contacto ===== */
const DATA = {
  titulo: "Nuestro portafolio",
  intro: "Explora nuestros proyectos, conoce al equipo y descubre cómo podemos ayudarte con tu próxima idea.",

  personas: {
    a: {
      nombre: "Mateo Lara",
      pagina: "persona1.html",
      rol: "Desarrollo frontend y backend",
      foto: "img/mateo.webp", 
      sobre: "Me gusta crear páginas y sistemas web que tengan un propósito y puedan ayudar a las personas. He tenido la oportunidad de trabajar en proyectos como Go 503, donde ayudé a desarrollar una forma de rastrear buses y conocer sus horarios de llegada, y Sin Límites, un proyecto relacionado con la inclusión digital. Me gusta seguir aprendiendo y mejorar mis habilidades, actualmente estoy explorando Node.js y bases de datos. Mi objetivo es seguir ganando experiencia, trabajar en nuevos proyectos y crecer poco a poco como desarrollador.",
      habilidades: ["HTML", "CSS", "JavaScript", "Node.js", "SQL", "PHP"],
      formacion: [
        { titulo: "Carrera: Desarrollo de software", lugar: "Colegio Don Bosco", fecha: "2016 – actualidad" }
      ],
      contacto: [
        { etiqueta: "Correo", valor: "folgiodigital2@gmail.com", href: "mailto:folgiodigital2@gmail.com" },
        { etiqueta: "GitHub", valor: "github.com/Elpiratilla", href: "https://github.com/Elpiratilla" }
      ]
    },
    b: {
      nombre: "Iker Mejia",
      pagina: "persona2.html",
      rol: "Desarrollo frontend y backend",
      foto: "img/iker.webp",
      sobre: "Me interesa crear experiencias web útiles y fáciles de usar. He trabajado en Blue's, un proyecto de musicoterapia, y Rest, una tienda de comida. Sigo aprendiendo desarrollo web y fortaleciendo mis habilidades de programación.",
      habilidades: ["HTML", "CSS", "JavaScript", "SQL", "PHP"],
      formacion: [
        { titulo: "Carrera: Desarrollo de software", lugar: "Colegio Don Bosco", fecha: "2014 – actualidad" }
      ],
      contacto: [
        { etiqueta: "Correo", valor: "folgiodigital2@gmail.com", href: "mailto:folgiodigital2@gmail.com" },
        { etiqueta: "GitHub", valor: "github.com/alem3jia774-byte", href: "https://github.com/alem3jia774-byte" }
      ]
    }
  },
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
      demo: "https://creaj.onrender.com/html/start.html", codigo: "https://github.com/alem3jia774-byte/BLUES"
    },
    {
      titulo: "Rest", quien: "b", img: "",
      desc: "Proyecto de tienda de comida.",
      premio: "",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "https://rest-eqwm.onrender.com/index.html", codigo: "https://github.com/alem3jia774-byte/Rest.git"
    }
    ],

  servicios: [
    { titulo: "Páginas web para negocios", desc: "Sitio de una o varias páginas que se ve bien en celular y presenta tu negocio, tus productos y cómo contactarte." },
    { titulo: "Sistemas a la medida", desc: "Registro de clientes, inventario, reservas o control de tiempo, con base de datos y panel para administrarlo." },
    { titulo: "Mejora de un sitio existente", desc: "Ordenamos el diseño, lo hacemos responsive y corregimos lo que no funciona en tu página actual." }
  ],

  /* WhatsApp: escribe el número con código de país y sin signos, ejemplo "50370000000".
     Si queda vacío, el botón no se muestra. */
  whatsapp: {
    numero: "50372635254",
    mensaje: "Hola, vi su portafolio y me interesa una página web para mi negocio."
  },

  /* BORRADOR: ajusta los pasos a cómo trabajan en realidad */
  proceso: [
    { titulo: "Platicamos", desc: "Nos cuentas qué necesitas, para quién es y qué quieres lograr." },
    { titulo: "Te mostramos una propuesta", desc: "Te enseñamos cómo se vería y qué incluiría antes de construirlo." },
    { titulo: "Lo construimos", desc: "Hacemos la página o el sistema y te vamos mostrando los avances." },
    { titulo: "Lo entregamos", desc: "Lo publicamos, revisamos que todo funcione y te explicamos cómo usarlo." }
  ],

  /* BORRADOR: cambia las respuestas por lo que de verdad ofrecen (tiempos, precios, mantenimiento) */
  faq: [
    { p: "¿Cuánto tarda hacer una página?", r: "Depende de lo que necesites. Una página sencilla toma menos tiempo que un sistema con base de datos. Cuando platiquemos te damos un estimado." },
    { p: "¿Cuánto cuesta?", r: "El precio depende del tamaño del proyecto. Cuéntanos qué necesitas y te enviamos una cotización." },
    { p: "¿Necesito comprar dominio y hosting?", r: "Para tener tu página en internet sí necesitas ambos. Te ayudamos a elegirlos y a dejarlos configurados, y quedan a tu nombre." },
    { p: "¿Se va a ver bien en el celular?", r: "Sí. Las páginas que hacemos se adaptan a celular, tablet y computador." },
    { p: "¿Se pueden hacer cambios después de la entrega?", r: "Sí. Podemos acordar ajustes o actualizaciones después de entregarla." }
  ],

  contacto: {
    texto: "Cuéntanos qué necesitas y te respondemos por correo.",
    formspree: "https://formspree.io/f/xwlonoye"
  },

  pie: "Mateo Lara e Iker Mejia"
};