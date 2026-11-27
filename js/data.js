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
    },
    {
      titulo: "Menú digital con QR", quien: "j", img: "",
      desc: "Demo de menú digital para restaurantes: categorías, búsqueda y código QR descargable.",
      premio: "",
      tags: ["HTML", "CSS", "JavaScript"],
      demo: "demos/menu/index.html", codigo: "https://github.com/Elpiratilla/Portafolio/tree/main/demos/menu"
    },
    {
      titulo: "Inventario", quien: "j", img: "",
      desc: "Demo de sistema de inventario: productos, stock mínimo con alerta y valor total, con API en Node.js y base de datos SQLite.",
      premio: "",
      tags: ["JavaScript", "Node.js", "SQL"],
      demo: "demos/inventario/public/index.html", codigo: "https://github.com/Elpiratilla/Portafolio/tree/main/demos/inventario"
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
      incluye: ["Control de inventario", "Registro de productos", "Gestión de clientes", "Ventas y reportes"], demo: "demos/inventario/public/index.html" },
    { titulo: "Menús digitales", problema: "Tus clientes necesitan ver tu carta sin imprimirla cada vez que cambia.",
      incluye: ["Menús interactivos para restaurantes", "Categorías de productos", "Fotografías y precios", "Acceso mediante código QR"], demo: "demos/menu/index.html" },
    { titulo: "Mantenimiento y soporte", problema: "Tu página tiene errores o se quedó desactualizada.",
      incluye: ["Corrección de errores", "Actualización de contenido", "Mejoras de funcionalidades", "Mantenimiento preventivo"] }
  ],

  /* BORRADOR: textos de detalle de cada proyecto (objetivo, problema, solución, resultado). Ajústenlos a la realidad.
     Opcional: agreguen metricas: ["120 usuarios en el primer mes", "Carga en menos de 2 s"] a cualquier proyecto. Solo datos reales. */
  detalles: {
    "Go 503": { objetivo: "Ayudar a las personas a saber cuándo llega su bus.", problema: "No hay una forma sencilla de conocer horarios y recorridos de los autobuses.", solucion: "Aplicación web que rastrea buses y muestra horarios y rutas.", resultado: "Consulta de llegadas y recorridos desde el celular." },
    "Sin límites": { objetivo: "Promover la inclusión digital.", problema: "Muchas personas encuentran barreras para usar herramientas digitales.", solucion: "Sitio web enfocado en accesibilidad e inclusión.", resultado: "1.er lugar en el concurso CREA J del Colegio Don Bosco." },
    "Blue's": { objetivo: "Presentar un proyecto de musicoterapia.", problema: "Dar a conocer la musicoterapia de forma clara y atractiva.", solucion: "Sitio web con información y recursos del proyecto.", resultado: "2.º lugar en el concurso CREA J del Colegio Don Bosco." },
    "Menú digital con QR": { objetivo: "Mostrar cómo sería el menú de un restaurante que se abre desde el celular.", problema: "Imprimir la carta cada vez que cambian los platos o los precios.", solucion: "Menú con categorías y búsqueda, y un código QR que se puede descargar o imprimir.", resultado: "Demo funcional con datos de ejemplo, sin instalar nada." },
    "Inventario": { objetivo: "Mostrar un sistema de inventario para un negocio pequeño.", problema: "Llevar el stock en papel o en hojas sueltas y enterarse tarde de lo que se acabó.", solucion: "API REST en Node.js con SQLite, validación en servidor y alertas de stock bajo.", resultado: "Demo funcional: con servidor guarda en base de datos; sin servidor funciona en el navegador." },
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
    { titulo: "Esencial", baseId: "landing", para: "Emprendedores y pequeños negocios", incluye: ["Página sencilla que se ve bien en celular", "Información de tu negocio y contacto"] },
    { titulo: "Profesional", baseId: "negocio", para: "Negocios que necesitan una web más completa", incluye: ["Varias secciones o páginas", "Formulario de contacto conectado", "Menú digital o catálogo"] },
    { titulo: "Personalizado", baseId: "sistema", para: "Empresas con necesidades específicas", incluye: ["Sistema a la medida con base de datos", "Funcionalidades acordadas contigo"] }
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

  /* Cotizador: rangos en dólares. IMPORTANTE: son valores de ejemplo, AJÚSTENLOS a lo que realmente cobrarían.
     precio: [mínimo, máximo]. "urgente" multiplica el total si el cliente necesita entrega rápida. */
  cotizador: {
    urgente: 1.25,
    base: [
      { id: "landing", titulo: "Página sencilla", desc: "Una sola página con información y contacto.", precio: [60, 120] },
      { id: "negocio", titulo: "Sitio de varias secciones", desc: "Inicio, servicios, galería, contacto y más.", precio: [150, 300] },
      { id: "sistema", titulo: "Sistema a la medida", desc: "Aplicación con base de datos y reglas propias.", precio: [400, 900] }
    ],
    extras: [
      { id: "formulario", titulo: "Formulario de contacto conectado", precio: [10, 25] },
      { id: "menu", titulo: "Menú digital con código QR", precio: [40, 90] },
      { id: "catalogo", titulo: "Catálogo de productos", precio: [50, 120] },
      { id: "usuarios", titulo: "Inicio de sesión y usuarios", precio: [80, 180] },
      { id: "idioma", titulo: "Segundo idioma", precio: [40, 90] },
      { id: "dominio", titulo: "Configurar dominio y hosting", precio: [15, 30] }
    ]
  },

  ui: {
    nInicio: "Inicio", verTodos: "Ver todos los proyectos", verServicios: "Ver todos los servicios", verPrecios: "Ver precios",
    homeProyT: "Proyectos destacados", homeSrvT: "Qué hacemos", homeCtaT: "¿Tienes una idea en mente?", homeCtaD: "Cuéntanos qué necesitas y te respondemos con una propuesta.",
    otrasFormas: "Otras formas de contactarnos",
    pProyectosT: "Proyectos", pProyectosD: "Lo que hemos construido: sitios web, sistemas y demos. Filtra por quién lo hizo.",
    pServiciosT: "Servicios", pServiciosD: "Qué podemos hacer por tu negocio, para quién trabajamos y cómo lo hacemos.",
    pPreciosT: "Precios", pPreciosD: "Paquetes de referencia y un estimado al instante. La cotización final se acuerda contigo.",
    pContactoT: "Contacto",
    cotizar: "Cotizar", menu: "Menú",
    skip: "Saltar al contenido", back: "Volver al portafolio", theme: "Cambiar tema", otroIdioma: "English", idiomaAria: "Cambiar el idioma a inglés",
    verDemo: "Ver demo", verCodigo: "Ver código", verDetalles: "Ver detalles", cerrar: "Cerrar",
    hechoJuntos: "Hecho por los dos", hechoPor: "Hecho por ", captura: "Captura de ",
    demoDespierta: "La demo está en un servidor gratuito y puede tardar unos 30 segundos en despertar.",
    objetivo: "Objetivo", problema: "Problema", solucion: "Solución", resultado: "Resultado", tecnologias: "Tecnologías", metricas: "Métricas",
    perfil: "Perfil", perfilDesc: "Perfil, habilidades y proyectos.", habilidades: "Habilidades", formacion: "Formación", contacto: "Contacto",
    proyectosDe: "Proyectos de ", verPerfilDe: "Ver el perfil de ", sinProyectos: "Todavía no hay proyectos para mostrar.", sinCategoria: "Todavía no hay proyectos en esta categoría.",
    filtrar: "Filtrar proyectos", todos: "Todos", juntos: "Juntos", verProyectos: "Ver nuestros proyectos", pedirCotizacion: "Solicitar una cotización",
    navAria: "Principal", nProyectos: "Proyectos", nServicios: "Servicios", nSectores: "Sectores", nTec: "Tecnologías", nProceso: "Proceso", nPaquetes: "Precios", nCotizador: "Cotizador", nContacto: "Contacto",
    quienes: "Quiénes somos", verPerfil: "Ver perfil",
    srvTitulo: "Qué podemos hacer por ti", resuelve: "Resuelve:", incluye: "Qué incluye", pedirInfo: "Solicitar información", verEjemplo: "Ver ejemplo",
    sectoresTitulo: "¿Para quién trabajamos?", sectoresNota: "No nos limitamos a estos sectores: son nuestros primeros mercados.",
    porqueTitulo: "¿Por qué elegirnos?",
    tecTitulo: "Con qué trabajamos", tecIntro: "Estas son las tecnologías que hemos usado en nuestros proyectos y cuántos proyectos las incluyen.", tecProyectos: "proyectos", tecProyecto: "proyecto", repos: "repositorios públicos en GitHub", verGithub: "Ver GitHub de ",
    procesoTitulo: "Cómo trabajamos",
    paquetesTitulo: "Paquetes y cotizaciones", paquetesIntro: "Cada proyecto se cotiza según las funcionalidades, la dificultad y el tiempo. Estos precios son una referencia para empezar.", puedeIncluir: "Puede incluir", desde: "Desde", paquetesCta: "Solicitar cotización personalizada",
    cotTitulo: "Calcula un estimado", cotIntro: "Elige lo que necesitas y verás un rango de precio al instante. Es una referencia, no una oferta: la cotización final se acuerda contigo.",
    cotTipo: "¿Qué necesitas?", cotExtras: "Extras", cotUrgente: "Lo necesito con urgencia", cotResultado: "Estimado", cotNota: "Rango en dólares estadounidenses (USD). No incluye dominio ni hosting si no los marcas.", cotEnviar: "Enviar este estimado en mi solicitud",
    cotMensaje: "Estimado del cotizador: {rango} USD.\nIncluye: {items}.",
    testimoniosTitulo: "Lo que dicen nuestros clientes", faqTitulo: "Preguntas frecuentes",
    cTitulo: "Cuéntanos tu idea", cWhats: "escribirnos por WhatsApp", cCorreo: "correo", cTambien: "También puedes", cO: "o al",
    fNombre: "Tu nombre", fNegocio: "Nombre de tu negocio", fCorreo: "Tu correo", fServicio: "Tipo de servicio que necesitas", fMensaje: "Describe tu proyecto", fPresupuesto: "Presupuesto aproximado (opcional)", fPlaceholder: "Ej. $300", fEnviar: "Enviar solicitud", fOtro: "Otro / no estoy seguro",
    fRevisa: "Revisa que el nombre, el correo y el mensaje estén completos.", fOk: "Mensaje enviado. Te responderemos pronto.", fError: "No se pudo enviar el mensaje. Escríbenos directo a ", fMailto: "Se abrió tu aplicación de correo con el mensaje listo para enviar.", fAsunto: "Contacto desde el portafolio",
    waAria: "Escribir por WhatsApp", pieSecciones: "Páginas", pieInicio: "Volver al inicio", pieFaq: "Preguntas frecuentes", pieServicios: "Servicios", pieContacto: "Contacto", privAviso: "Aviso de privacidad:", derechos: "Todos los derechos reservados."
  },

  pie: "Mateo Lara e Iker Mejia",
  piedesc: "Desarrolladores web y de sistemas en El Salvador.",
  privacidad: "Usamos los datos que nos envías solo para responder a tu solicitud. No los compartimos con terceros."
};
