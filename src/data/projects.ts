export type Project = {
  title: string
  tag: string
  desc: string
  img: string
  tags: string[]
  link: string
  external: boolean
  cta?: string
  badge?: string
  channels?: string[]
}

export const mainEvent: Project = {
  title: 'Sistema de Gestión — Talleres Oja',
  tag: 'Encargo real · En producción',
  desc: 'Plataforma full-stack que llevó un negocio real de papel a digital. Arquitectura MVC con roles, notificaciones asíncronas resilientes y un servidor propio endurecido y auditado contra el OWASP Top 10.',
  img: '/images/TalleresOja.webp',
  tags: ['Flask', 'PostgreSQL', 'Docker', 'Traefik', 'n8n', 'OWASP Top 10'],
  link: '/templates/talleresoja-portfolio.html',
  external: false,
  cta: 'Ver la ficha del combate',
}

export const coMain: Project[] = [
  {
    title: 'DMS · Mensajería distribuida multihilo',
    tag: 'Semifinal · Concurrencia',
    desc: 'Servidor multihilo en C con clientes Python, entrega diferida, P2P y servicios SOAP y ONC-RPC. Concurrencia de verdad.',
    img: '/images/distributed-messaging-system-thumb.svg',
    tags: ['C', 'pthreads', 'TCP + P2P', 'SOAP', 'ONC-RPC'],
    link: 'https://github.com/jorgee-cc/DistributedMessagingSystem-Multi-threaded-TCP-RPC-SOAP-Architecture',
    external: true,
    cta: 'Ver en GitHub',
  },
  {
    title: 'Optimización de asignación arbitral (TFG)',
    tag: 'Semifinal · Algoritmos',
    desc: 'TFG en C++ que asigna árbitros maximizando la retribución por hora, contando desplazamientos, tiempos muertos y arbitraje efectivo.',
    img: '/images/referee-scheduler-thumb.svg',
    tags: ['C++17', 'Búsqueda', 'Optimización', 'En curso'],
    link: 'https://github.com/jorgee-cc/TFG-Referee-Scheduler',
    external: true,
    cta: 'Ver en GitHub',
  },
]

export const undercard: Project[] = [
  {
    title: 'Binairo CSP & motor A*',
    tag: 'IA',
    desc: 'Solver CSP para Binairo y un motor A* en C++17 sobre grafos reales con heurística Haversine admisible.',
    img: '/images/ai-csp-heuristic-search-thumb.svg',
    tags: ['Python', 'C++17', 'CSP + A*'],
    link: '/templates/AI-csp-HeuristicSearch.html',
    external: false,
  },
  {
    title: 'Optimización de flotas de autobuses',
    tag: 'Optimización',
    desc: 'Dos modelos de programación lineal entera en GNU MathProg, resueltos con GLPK desde Python.',
    img: '/images/linear-programming-bus-scheduling-thumb.svg',
    tags: ['Python', 'GLPK', 'MIP'],
    link: '/templates/Linear-Programming-Bus-Scheduling.html',
    external: false,
  },
  {
    title: 'SecureSend · PKI y cifrado híbrido',
    tag: 'Ciberseguridad',
    desc: 'Gestor CLI con PKI jerárquica X.509, AES-256-GCM, RSA-OAEP y firmas RSA-PSS.',
    img: '/images/pki-thumb.svg',
    tags: ['X.509', 'AES-GCM', 'RSA-OAEP'],
    link: '/templates/pki.html',
    external: false,
  },
  {
    title: 'Compilador C → Lisp → Forth',
    tag: 'Bajo nivel',
    desc: 'Compilador de dos fases en C con Lisp como representación intermedia y pipeline sin AST.',
    img: '/images/compiler-c-lisp-forth-thumb.svg',
    tags: ['C · Bison', 'Pipeline', 'No-AST'],
    link: 'https://github.com/jorgee-cc/Compiler-C-Lisp-Forth',
    external: true,
  },
  {
    title: 'Bank Deposit Predictor',
    tag: 'Machine Learning',
    desc: 'App Streamlit que predice la contratación de un depósito con SVM de kernel RBF y pipeline propio.',
    img: '/images/bank-deposit-predictor-thumb.svg',
    tags: ['scikit-learn', 'SVM-RBF', 'Streamlit'],
    link: 'https://github.com/jorgee-cc/Bank-Deposit-Subscription-Predictor',
    external: true,
  },
  {
    title: 'IronMan · Sistema ubicuo',
    tag: 'Sistemas',
    desc: 'Sistema para triatlón que coordina atleta, dron y apoyo con tiempo real, voz y visión artificial.',
    img: '/images/ironman-portfolio-thumb.svg',
    tags: ['Socket.IO', 'Voz + SOS', 'Computer Vision'],
    link: '/templates/ironman-portfolio.html',
    external: false,
  },
  {
    title: 'Spider-Man: Brand New Day',
    tag: 'Frontend',
    desc: 'Landing narrativa con animaciones ligadas al scroll y ambiente sonoro real vía Web Audio API.',
    img: '/images/Spiderman_BrandNewDay.webp',
    tags: ['Astro + React', 'Framer Motion', 'Web Audio'],
    link: 'https://spiderman-brand-new-day-gamma.vercel.app/',
    external: true,
  },
  {
    title: 'Prototipo La Velada VI',
    tag: 'Frontend · Este evento',
    desc: 'Frontend pensado para aguantar tráfico masivo y dar una experiencia de streaming fluida a 60 FPS.',
    img: '/images/Preview.webp',
    tags: ['React + Tailwind', '60 FPS', 'Rendimiento'],
    link: 'https://prototipo-velada-vi-jorge-condado-c.vercel.app/',
    external: true,
  },
  {
    title: 'Aplicaciones Web APIs',
    tag: 'Producto digital',
    desc: 'Interfaces que conectan el mundo físico con el digital usando APIs nativas del navegador y Node.js.',
    img: 'https://images.unsplash.com/photo-1765445665883-085301570c87?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    tags: ['Geolocalización', 'Sensores', 'Node.js'],
    link: 'https://github.com/jorgee-cc/Apps_JS',
    external: true,
  },
]

export const applications: Project[] = [
  {
    badge: 'Candidatura · Programador de La Velada',
    title: 'Prototipo La Velada VI',
    tag: '',
    desc: 'Frontend de alto rendimiento diseñado para aguantar el tráfico masivo de un evento en directo y ofrecer una experiencia de streaming fluida a 60 FPS. Mi carta de presentación como programador del cartel.',
    img: '/images/Preview.webp',
    tags: ['React', 'Tailwind CSS', 'Framer Motion', '60 FPS'],
    channels: ['InfoJobs', 'midudev'],
    link: 'https://prototipo-velada-vi-jorge-condado-c.vercel.app/',
    external: true,
  },
  {
    badge: 'Candidatura · Programador de la landing',
    title: 'Spider-Man: Brand New Day',
    tag: '',
    desc: 'Landing narrativa interactiva con animaciones ligadas al scroll y ambiente sonoro real vía Web Audio API. El proyecto con el que me postulé para construir una experiencia de marca cinematográfica.',
    img: '/images/Spiderman_BrandNewDay.webp',
    tags: ['Astro + React', 'Framer Motion', 'Web Audio API'],
    channels: ['midudev', 'InfoJobs'],
    link: 'https://spiderman-brand-new-day-gamma.vercel.app/',
    external: true,
  },
]

export const results = [
  { value: '30.000+', label: 'candidaturas filtradas' },
  { value: 'Top 70-80', label: 'según midudev' },
  { value: 'Llamada', label: 'recibida el año pasado' },
]
