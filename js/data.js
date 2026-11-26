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
      demo: "https://go503.onrender.com", codigo: "https://github.com/Elpiratilla/bus-tracker",
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

  /* Sección de inicio (hero) */
  hero: {
    titulo: "Convertimos tus ideas en soluciones digitales.",
    texto: "Somos un equipo de desarrolladores enfocados en crear páginas web y sistemas personalizados que ayudan a negocios y emprendedores a mejorar sus procesos y crecer en el mundo digital.",
    linea: "Desarrollo web · Sistemas personalizados · Soluciones digitales"
  },

  /* Catálogo de servicios. IMPORTANTE: publiquen solo lo que realmente puedan desarrollar. */
  servicios: [
    { titulo: "Desarrollo de páginas web", problema: "Tu negocio no aparece en internet o tu sitio actual no transmite confianza.",
      incluye: ["Páginas informativas para negocios", "Sitios web para restaurantes", "Landing pages para productos o servicios", "Portafolios profesionales"] },
    { titulo: "Sistemas administrativos", problema: "Llevas inventario, clientes o ventas en papel o en hojas sueltas.",
      incluye: ["Control de inventario", "Registro de productos", "Gestión de clientes", "Ventas y reportes"] },
    { titulo: "Menús digitales", problema: "Tus clientes necesitan ver tu carta sin imprimirla cada vez que cambia.",
      incluye: ["Menús interactivos para restaurantes", "Categorías de productos", "Fotografías y precios", "Acceso mediante código QR"] },
    { titulo: "Mantenimiento y soporte", problema: "Tu página tiene errores o se quedó desactualizada.",
      incluye: ["Corrección de errores", "Actualización de contenido", "Mejoras de funcionalidades", "Mantenimiento preventivo"] }
  ],

  /* BORRADOR: textos de detalle de cada proyecto (objetivo, problema, solución, resultado). Ajústenlos a la realidad. */
  detalles: {
    "Go 503": { objetivo: "Ayudar a las personas a saber cuándo llega su bus.", problema: "No hay una forma sencilla de conocer horarios y recorridos de los autobuses.", solucion: "Aplicación web que rastrea buses y muestra horarios y rutas.", resultado: "Consulta de llegadas y recorridos desde el celular." },
    "Sin límites": { objetivo: "Promover la inclusión digital.", problema: "Muchas personas encuentran barreras para usar herramientas digitales.", solucion: "Sitio web enfocado en accesibilidad e inclusión.", resultado: "1.er lugar en el concurso CREA J del Colegio Don Bosco." },
    "Blue's": { objetivo: "Presentar un proyecto de musicoterapia.", problema: "Dar a conocer la musicoterapia de forma clara y atractiva.", solucion: "Sitio web con información y recursos del proyecto.", resultado: "2.º lugar en el concurso CREA J del Colegio Don Bosco." },
    "Rest": { objetivo: "Mostrar y vender comida en línea.", problema: "Un negocio de comida necesita presentar su oferta de forma ordenada.", solucion: "Tienda web con catálogo de comida.", resultado: "Sitio funcional publicado en línea." }
  },

  sectores: [
    { titulo: "Restaurantes", desc: "Menús digitales, páginas web y sistemas de inventario." },
    { titulo: "Emprendedores", desc: "Páginas para presentar tus productos y servicios." },
    { titulo: "Pequeños negocios", desc: "Herramientas para organizar sus operaciones." },
    { titulo: "Profesionales independientes", desc: "Portafolios y páginas personales." }
  ],

  porque: [
    { titulo: "Atención personalizada", desc: "Cada proyecto se desarrolla teniendo en cuenta las necesidades específicas del cliente." },
    { titulo: "Soluciones a medida", desc: "No todos los negocios necesitan lo mismo. Desarrollamos herramientas adaptadas a cada situación." },
    { titulo: "Comunicación constante", desc: "Mantenemos al cliente informado durante las diferentes etapas del desarrollo." },
    { titulo: "Compromiso con la calidad", desc: "Probamos nuestras soluciones para procurar que funcionen correctamente antes de entregarlas." }
  ],

  /* WhatsApp: escribe el número con código de país y sin signos, ejemplo "50370000000".
     Si queda vacío, el botón no se muestra. */
  whatsapp: {
    numero: "50372635254",
    mensaje: "Hola, vi su portafolio y me interesa una página web para mi negocio."
  },

  proceso: [
    { titulo: "Conocemos tu necesidad", desc: "Escuchamos qué necesita mejorar tu negocio." },
    { titulo: "Analizamos y proponemos", desc: "Evaluamos el problema y planteamos una solución." },
    { titulo: "Planificamos", desc: "Definimos funcionalidades, tiempos y presupuesto." },
    { titulo: "Desarrollamos", desc: "Construimos y probamos el proyecto." },
    { titulo: "Entregamos", desc: "Presentamos el resultado y explicamos cómo utilizarlo." }
  ],
  procesoNota: "Los tiempos y entregables se acuerdan antes de comenzar.",

  /* Paquetes: sin precios fijos, se cotiza según funcionalidades, dificultad y tiempo */
  paquetes: [
    { titulo: "Esencial", para: "Emprendedores y pequeños negocios", incluye: ["Página sencilla que se ve bien en celular", "Información de tu negocio y contacto"] },
    { titulo: "Profesional", para: "Negocios que necesitan una web más completa", incluye: ["Varias secciones o páginas", "Formulario de contacto conectado", "Menú digital o catálogo"] },
    { titulo: "Personalizado", para: "Empresas con necesidades específicas", incluye: ["Sistema a la medida con base de datos", "Funcionalidades acordadas contigo"] }
  ],

  /* Testimonios: déjenlos vacíos hasta tener clientes reales. Con datos, la sección aparece sola.
     Formato: { nombre, negocio, servicio, texto } */
  testimonios: [],

  faq: [
    { p: "¿Cuánto cuesta desarrollar una página web?", r: "Depende de las funcionalidades, la dificultad y el tiempo. Cuéntanos qué necesitas y te enviamos una cotización." },
    { p: "¿Cuánto tiempo tarda un proyecto?", r: "Una página sencilla toma menos que un sistema con base de datos. Los tiempos se acuerdan antes de comenzar." },
    { p: "¿Ofrecen mantenimiento?", r: "Sí. Podemos acordar corrección de errores y actualizaciones después de la entrega." },
    { p: "¿Puedo solicitar modificaciones?", r: "Sí. Te mostramos avances durante el desarrollo para ajustar lo que haga falta." },
    { p: "¿Cómo se realiza el pago?", r: "Lo acordamos contigo al definir el presupuesto, antes de empezar." },
    { p: "¿Qué sucede si necesito nuevas funcionalidades?", r: "Las evaluamos juntos y te damos una cotización de lo adicional." },
    { p: "¿Trabajan con negocios pequeños?", r: "Sí, es justo para quienes empezamos: emprendedores y pequeños negocios." },
    { p: "¿Necesito comprar dominio y hosting?", r: "Para tener tu página en internet sí necesitas ambos. Te ayudamos a elegirlos y configurarlos, y quedan a tu nombre." },
    { p: "¿Cómo puedo solicitar una cotización?", r: "Llena el formulario de contacto o escríbenos por WhatsApp." }
  ],

  contacto: {
    texto: "Cuéntanos qué necesitas y te respondemos por correo.",
    formspree: "https://formspree.io/f/meagrqrg"
  },

  pie: "Mateo Lara e Iker Mejia",
  piedesc: "Desarrolladores web y de sistemas en El Salvador.",
  privacidad: "Usamos los datos que nos envías solo para responder a tu solicitud. No los compartimos con terceros."
};
