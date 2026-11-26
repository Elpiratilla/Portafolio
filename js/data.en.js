/* English version. It only holds what changes: texts. Names, links, photos and contact data come from data.js.
   Arrays are matched by position, so keep the same order as in data.js. */
const DATA_EN = {
  titulo: "Our portfolio",
  intro: "Explore our projects, meet the team and see how we can help with your next idea.",

  personas: {
    a: {
      rol: "Frontend and backend development",
      sobre: "I like building web pages and systems that have a purpose and can help people. I have worked on projects like Go 503, where I helped build a way to track buses and know their arrival times, and Sin Límites, a project about digital inclusion. I enjoy learning and improving my skills, and right now I am exploring Node.js and databases. My goal is to keep gaining experience, work on new projects and grow step by step as a developer.",
      formacion: [{ titulo: "Degree: Software development", fecha: "2016 – present" }]
    },
    b: {
      rol: "Frontend and backend development",
      sobre: "I am interested in building web experiences that are useful and easy to use. I have worked on Blue's, a music therapy project, and Rest, a food store. I keep learning web development and strengthening my programming skills.",
      formacion: [{ titulo: "Degree: Software development", fecha: "2014 – present" }]
    }
  },

  proyectos: [
    { desc: "Bus tracking to know when buses arrive and which route they take." },
    { desc: "A project to promote digital inclusion.", premio: "1st place · CREA J · Colegio Don Bosco (first year of high school)" },
    { desc: "A music therapy project.", premio: "2nd place · CREA J · Colegio Don Bosco (first year of high school)" },
    { desc: "A food store project." },
    { titulo: "Digital menu with QR", desc: "Demo of a digital menu for restaurants: categories, search and a downloadable QR code." },
    { titulo: "Inventory", desc: "Demo of an inventory system: products, low-stock alerts and total value, with a Node.js API and a SQLite database." }
  ],

  hero: {
    titulo: "We turn your ideas into digital solutions.",
    texto: "We are a team of developers focused on building websites and custom systems that help businesses and entrepreneurs improve their processes and grow online.",
    linea: "Web development · Custom systems · Digital solutions"
  },

  servicios: [
    { titulo: "Website development", problema: "Your business is not online, or your current site does not inspire trust.",
      incluye: ["Information pages for businesses", "Restaurant websites", "Landing pages for products or services", "Professional portfolios"] },
    { titulo: "Management systems", problema: "You track inventory, customers or sales on paper or in loose spreadsheets.",
      incluye: ["Inventory control", "Product records", "Customer management", "Sales and reports"] },
    { titulo: "Digital menus", problema: "Your customers need to see your menu without you printing it every time it changes.",
      incluye: ["Interactive menus for restaurants", "Product categories", "Photos and prices", "Access through a QR code"] },
    { titulo: "Maintenance and support", problema: "Your site has errors or has become outdated.",
      incluye: ["Bug fixes", "Content updates", "Feature improvements", "Preventive maintenance"] }
  ],

  detalles: {
    "Go 503": { objetivo: "Help people know when their bus arrives.", problema: "There is no simple way to know bus schedules and routes.", solucion: "A web app that tracks buses and shows schedules and routes.", resultado: "Arrivals and routes available from a phone." },
    "Sin límites": { objetivo: "Promote digital inclusion.", problema: "Many people find barriers when using digital tools.", solucion: "A website focused on accessibility and inclusion.", resultado: "1st place at the CREA J contest at Colegio Don Bosco." },
    "Blue's": { objetivo: "Present a music therapy project.", problema: "Explaining music therapy in a clear and appealing way.", solucion: "A website with information and resources about the project.", resultado: "2nd place at the CREA J contest at Colegio Don Bosco." },
    "Rest": { objetivo: "Show and sell food online.", problema: "A food business needs to present its offer in an organized way.", solucion: "An online store with a food catalog.", resultado: "A working site published online." },
    "Digital menu with QR": { objetivo: "Show what a restaurant menu opened from a phone would look like.", problema: "Printing the menu every time dishes or prices change.", solucion: "A menu with categories and search, and a QR code that can be downloaded or printed.", resultado: "A working demo with sample data, nothing to install." },
    "Inventory": { objetivo: "Show an inventory system for a small business.", problema: "Tracking stock on paper or loose sheets and finding out late what ran out.", solucion: "A REST API in Node.js with SQLite, server-side validation and low-stock alerts.", resultado: "A working demo: with the server it saves to a database; without it, it runs in the browser." }
  },

  sectores: [
    { titulo: "Restaurants", desc: "Digital menus, websites and inventory systems." },
    { titulo: "Entrepreneurs", desc: "Pages to present your products and services." },
    { titulo: "Small businesses", desc: "Tools to organize their operations." },
    { titulo: "Independent professionals", desc: "Portfolios and personal pages." }
  ],

  porque: [
    { titulo: "Personal attention", desc: "Each project is built around the specific needs of the client." },
    { titulo: "Custom solutions", desc: "Not every business needs the same thing. We build tools adapted to each situation." },
    { titulo: "Constant communication", desc: "We keep the client informed throughout every stage of development." },
    { titulo: "Commitment to quality", desc: "We test our solutions to make sure they work properly before delivering them." }
  ],

  whatsapp: { mensaje: "Hello, I saw your portfolio and I am interested in a website for my business." },

  proceso: [
    { titulo: "We learn your needs", desc: "We listen to what your business needs to improve." },
    { titulo: "We analyze and propose", desc: "We evaluate the problem and suggest a solution." },
    { titulo: "We plan", desc: "We define features, timelines and budget." },
    { titulo: "We build", desc: "We develop and test the project." },
    { titulo: "We deliver", desc: "We present the result and explain how to use it." }
  ],
  procesoNota: "Timelines and deliverables are agreed on before we start.",

  paquetes: [
    { titulo: "Essential", para: "Entrepreneurs and small businesses", incluye: ["A simple page that looks good on phones", "Your business information and contact details"] },
    { titulo: "Professional", para: "Businesses that need a fuller website", incluye: ["Several sections or pages", "Connected contact form", "Digital menu or catalog"] },
    { titulo: "Custom", para: "Companies with specific needs", incluye: ["Custom system with a database", "Features agreed with you"] }
  ],

  cotizador: {
    base: [
      { titulo: "Simple page", desc: "A single page with information and contact." },
      { titulo: "Multi-section website", desc: "Home, services, gallery, contact and more." },
      { titulo: "Custom system", desc: "An application with a database and its own rules." }
    ],
    extras: [
      { titulo: "Connected contact form" },
      { titulo: "Digital menu with QR code" },
      { titulo: "Product catalog" },
      { titulo: "Login and users" },
      { titulo: "Second language" },
      { titulo: "Domain and hosting setup" }
    ]
  },

  faq: [
    { p: "How much does a website cost?", r: "It depends on the features, the difficulty and the time. Tell us what you need and we will send you a quote." },
    { p: "How long does a project take?", r: "A simple page takes less than a system with a database. Timelines are agreed on before we start." },
    { p: "Do you offer maintenance?", r: "Yes. We can agree on bug fixes and updates after delivery." },
    { p: "Can I ask for changes?", r: "Yes. We show you progress during development so we can adjust whatever is needed." },
    { p: "How does payment work?", r: "We agree on it with you when we define the budget, before we start." },
    { p: "What if I need new features?", r: "We evaluate them together and give you a quote for the extras." },
    { p: "Do you work with small businesses?", r: "Yes, it is exactly who we are starting with: entrepreneurs and small businesses." },
    { p: "Do I need to buy a domain and hosting?", r: "To have your page online you need both. We help you choose and set them up, and they stay in your name." },
    { p: "How can I ask for a quote?", r: "Fill in the contact form or write to us on WhatsApp." }
  ],

  contacto: { texto: "Tell us what you need and we will reply by email." },

  piedesc: "Web and systems developers in El Salvador.",
  privacidad: "We use the data you send us only to reply to your request. We do not share it with third parties.",

  ui: {
    skip: "Skip to content", back: "Back to portfolio", theme: "Change theme", otroIdioma: "Español", idiomaAria: "Cambiar el idioma a español",
    verDemo: "View demo", verCodigo: "View code", verDetalles: "View details", cerrar: "Close",
    hechoJuntos: "Made by both of us", hechoPor: "Made by ", captura: "Screenshot of ",
    demoDespierta: "The demo runs on a free server and may take about 30 seconds to wake up.",
    objetivo: "Goal", problema: "Problem", solucion: "Solution", resultado: "Result", tecnologias: "Technologies", metricas: "Metrics",
    perfil: "Profile", perfilDesc: "Profile, skills and projects.", habilidades: "Skills", formacion: "Education", contacto: "Contact",
    proyectosDe: "Projects by ", verPerfilDe: "See the profile of ", sinProyectos: "There are no projects to show yet.", sinCategoria: "There are no projects in this category yet.",
    filtrar: "Filter projects", todos: "All", juntos: "Together", verProyectos: "See our projects", pedirCotizacion: "Request a quote",
    navAria: "Sections", nProyectos: "Projects", nServicios: "Services", nSectores: "Sectors", nTec: "Technologies", nProceso: "Process", nPaquetes: "Packages", nCotizador: "Estimator", nContacto: "Contact",
    quienes: "Who we are", verPerfil: "View profile",
    srvTitulo: "What we can do for you", resuelve: "Solves:", incluye: "What it includes", pedirInfo: "Ask for information", verEjemplo: "See an example",
    sectoresTitulo: "Who do we work for?", sectoresNota: "We are not limited to these sectors: they are our first markets.",
    porqueTitulo: "Why choose us?",
    tecTitulo: "What we work with", tecIntro: "These are the technologies we have used in our projects and how many projects include them.", tecProyectos: "projects", tecProyecto: "project", repos: "public repositories on GitHub", verGithub: "View GitHub of ",
    procesoTitulo: "How we work",
    paquetesTitulo: "Packages and quotes", paquetesIntro: "Every project is quoted according to features, difficulty and time. These prices are a starting reference.", puedeIncluir: "May include", desde: "From", paquetesCta: "Request a custom quote",
    cotTitulo: "Get an estimate", cotIntro: "Choose what you need and you will see a price range instantly. It is a reference, not an offer: the final quote is agreed with you.",
    cotTipo: "What do you need?", cotExtras: "Extras", cotUrgente: "I need it urgently", cotResultado: "Estimate", cotNota: "Range in US dollars (USD). It does not include domain or hosting unless you select them.", cotEnviar: "Add this estimate to my request",
    cotMensaje: "Estimator result: {rango} USD.\nIncludes: {items}.",
    testimoniosTitulo: "What our clients say", faqTitulo: "Frequently asked questions",
    cTitulo: "Tell us your idea", cWhats: "write to us on WhatsApp", cCorreo: "email", cTambien: "You can also", cO: "or by",
    fNombre: "Your name", fNegocio: "Your business name", fCorreo: "Your email", fServicio: "Type of service you need", fMensaje: "Describe your project", fPresupuesto: "Approximate budget (optional)", fPlaceholder: "E.g. $300", fEnviar: "Send request", fOtro: "Other / not sure",
    fRevisa: "Check that your name, email and message are filled in.", fOk: "Message sent. We will reply soon.", fError: "The message could not be sent. Write to us directly at ", fMailto: "Your email app opened with the message ready to send.", fAsunto: "Contact from the portfolio",
    waAria: "Write on WhatsApp", pieSecciones: "Sections", pieInicio: "Back to top", pieFaq: "Frequently asked questions", pieServicios: "Services", pieContacto: "Contact", privAviso: "Privacy notice:", derechos: "All rights reserved."
  }
};
