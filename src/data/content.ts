export type Tone = 'red' | 'gold' | 'blue'

/** Comparativa del cartel del hero: mi baza frente a la competencia. */
export const tape = [
  { label: 'Experiencia real', me: 'Cliente real en producción', rival: 'Ejercicios de bootcamp' },
  { label: 'Alcance', me: 'Front · Back · Infra · Seguridad', rival: 'Solo la parte bonita' },
  { label: 'Responsabilidad', me: '3+ años trabajo y estudio', rival: 'Solo estudiar' },
  { label: 'Tráfico', me: 'Diseñado para el pico', rival: 'Cae con 100 usuarios' },
  { label: 'Motivo', me: 'Ganar por KO', rival: 'Participar' },
]

export const corner = [
  {
    role: 'Frontend',
    icon: 'M4 4h16v12H4zM8 20h8M12 16v4',
    team: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Framer Motion', 'Web Audio API'],
  },
  {
    role: 'Backend',
    icon: 'M4 5h16v4H4zM4 11h16v4H4zM4 17h16v4H4z',
    team: ['Python', 'Flask', 'SQL', 'PostgreSQL', 'C', 'C++'],
  },
  {
    role: 'IA & Optimización',
    icon: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3M12 9a3 3 0 100 6 3 3 0 000-6z',
    team: ['CSP', 'Búsqueda A*', 'Heurísticas', 'GLPK', 'GNU MathProg', 'Programación MIP'],
  },
  {
    role: 'Seguridad & Hardening',
    icon: 'M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z',
    team: ['OWASP Top 10', 'Snort IDS/IPS', 'Fail2Ban', 'UFW', 'SSH hardening', 'Traefik (TLS)'],
  },
  {
    role: 'Automatización & Infra',
    icon: 'M12 8a4 4 0 100 8 4 4 0 000-8zM12 2v3M12 19v3M2 12h3M19 12h3',
    team: ['Docker', 'n8n', 'Colas de mensajes', 'Coolify', 'Traefik'],
  },
  {
    role: 'DevOps & Cloud',
    icon: 'M6 18a4 4 0 010-8 5 5 0 019.6-1.3A3.5 3.5 0 0118 18z',
    team: ['Git', 'GitHub', 'Vercel', 'CI/CD', 'Linux'],
  },
]

export const fights: {
  title: string
  subtitle: string
  period: string
  tone: Tone
  desc: string
  points: string[]
}[] = [
  {
    title: 'Desarrollo Full-Stack',
    subtitle: 'De cliente real a producción',
    period: 'Talleres Oja · 2025 — Actualidad',
    tone: 'red',
    desc: 'Mi primer encargo remunerado: llevar un negocio real de papel a una plataforma digital, de principio a fin.',
    points: [
      'Arquitectura MVC completa (Flask + PostgreSQL) con autenticación por roles.',
      'Motor de notificaciones asíncronas con patrón Outbox y Dead Letter Queue.',
      'Hardening y despliegue del VPS: Docker, Traefik, UFW, Fail2Ban, Snort IDS/IPS.',
    ],
  },
  {
    title: 'Árbitro federado',
    subtitle: 'Decisiones bajo presión',
    period: 'Federación de Madrid · 2023 — 2026',
    tone: 'gold',
    desc: 'Cuando el partido está caliente tienes milisegundos para actuar. Igual que cuando producción falla.',
    points: [
      'Decisiones imparciales en tiempo real, sin margen de revisión.',
      'Mediación y resolución de conflictos durante la competición.',
      'Inspiró mi TFG: asignación automática de árbitros por algoritmos de búsqueda.',
    ],
  },
  {
    title: 'Ventas',
    subtitle: 'Comunicación y persuasión',
    period: 'Puma · Samsung · 2025 — 2026',
    tone: 'blue',
    desc: 'Saber vender una idea es tan importante como programarla. Trato directo con usuarios reales.',
    points: [
      'Asesoramiento personalizado traduciendo lo técnico en beneficios cotidianos.',
      'Atención y venta a clientes internacionales en inglés.',
      'Gestión en entornos de alta rotación y picos de tráfico.',
    ],
  },
  {
    title: 'Atención al cliente',
    subtitle: 'UX en el mundo real',
    period: 'Aldeas Infantiles · Unicampus · 2023 — 2025',
    tone: 'gold',
    desc: 'Tratar con el usuario final enseña más de usabilidad que cualquier libro de diseño.',
    points: [
      'Captación y fidelización mediante comunicación adaptada a cada persona.',
      'Coordinación de grupos y actividades en tiempo real.',
      'Reacción rápida ante riesgos o incidencias.',
    ],
  },
]

/**
 * Rueda de prensa. Primero lo personal (quién se sube al ring), después lo
 * técnico (cómo lo resolvería). Lo técnico ya se demuestra en la cartelera,
 * así que aquí pesa más el criterio y la actitud que el stack.
 */
export const press: {
  outlet: string
  category: 'personal' | 'tecnica'
  q: string
  /** Una respuesta corta o varios párrafos, en orden. */
  a: string | string[]
}[] = [
  {
    outlet: 'Código Abierto',
    category: 'personal',
    q: '¿Por qué deberíamos elegirte a ti y no a otro de los 30.000?',
    a: [
      'Creo que me diferencia la combinación de experiencia técnica, iniciativa y capacidad para afrontar situaciones difíciles.',
      'He llevado un proyecto propio a producción, responsabilizándome de todo el proceso. Además, mis experiencias laborales me han enseñado a entender al cliente, resolver conflictos y trabajar bajo presión, aportándome una perspectiva que va más allá del código.',
      'No puedo decir que sea mejor que los otros 30.000, pero sí que soy alguien que aprende por su cuenta, pelea por las oportunidades que le ilusionan y se implica al máximo para demostrar de lo que es capaz.',
    ],
  },
  {
    outlet: 'TechPress',
    category: 'personal',
    q: '¿Cuál es tu motivación real?',
    a: [
      'Mi motivación real es aprender de los mejores, especialmente de Midudev, a quien sigo desde hace mucho tiempo, y hacerlo formando parte de un proyecto tan único y real como este.',
      'Pero también hay algo que me atrae especialmente del frontend: la posibilidad de crear algo de lo que te sientas orgulloso, cuidar cada detalle y saber que tu trabajo puede llegar a millones de personas. Me motiva pensar que algo que yo haya construido pueda estar delante de tanta gente y que cualquiera pueda verlo, utilizarlo y disfrutarlo.',
    ],
  },
  {
    outlet: 'El Último Round',
    category: 'personal',
    q: '¿Puedes con la presión de un evento en directo?',
    a: 'Soy árbitro federado. He tomado decisiones imparciales en milisegundos con todo el mundo mirándome y sin margen de revisión. Esa presión la llevo entrenada desde hace años.',
  },
  {
    outlet: 'La Tribuna Digital',
    category: 'personal',
    q: '¿Qué aprendiste de quedarte a las puertas?',
    a: [
      'Aprendí que, a veces, quedarte a las puertas de algo puede ayudarte a descubrir mucho más de lo que esperabas.',
      'Este último año ha supuesto un antes y un después en mi carrera como informático. He descubierto que disfruto de verdad con lo que hago, pero, sobre todo, he descubierto la libertad que ofrece la informática para crear por tu cuenta, aprender continuamente y especializarte en aquello que realmente te apasiona.',
      'No hay motivación más fuerte para aprender que poder elegir qué quieres aprender y por qué. Este año he dejado de ver la informática únicamente como una carrera que estudiar y he empezado a verla como algo que quiero construir y desarrollar por iniciativa propia.',
      'Creo que ese cambio se refleja claramente en la evolución de mi portfolio y de mi perfil profesional. Por eso, más que quedarme con lo cerca que estuve, me quedo con todo lo que he descubierto desde entonces y con las ganas que tengo de seguir creciendo.',
    ],
  },
  {
    outlet: 'FanZone',
    category: 'personal',
    q: '¿Cómo es trabajar contigo en equipo?',
    a: 'Llevo toda la vida trabajando en equipo en ámbitos muy diferentes, y es algo que disfruto especialmente. Me gusta escuchar distintos puntos de vista, debatir y buscar soluciones en conjunto. Creo que los problemas se vuelven mucho más interesantes cuando se comparten ideas y se aprende de los demás. Para mí, trabajar en equipo es construir algo mejor de lo que podríamos conseguir individualmente.',
  },
  {
    outlet: 'Latencia Cero',
    category: 'tecnica',
    q: '¿Cómo haces que votos y chat lleguen al instante?',
    a: 'Con WebSockets y una arquitectura orientada a eventos. Votos, chat y datos viajan en milisegundos, no en pestañas cargando. En directo, cada segundo de retraso se nota en la grada.',
  },
  {
    outlet: 'Ciberdefensa Hoy',
    category: 'tecnica',
    q: '¿Y si atacan el evento con un DDoS el día del directo?',
    a: 'Endurecimiento real: WAF, rate limiting, OWASP Top 10 y defensa en profundidad. No me quedo en poner un certificado y rezar. Si hay datos de millones de fans en juego, la seguridad se diseña desde el primer commit.',
  },
  {
    outlet: 'Streaming Today',
    category: 'tecnica',
    q: '¿Y si algo se cae en mitad del directo?',
    a: 'Diseño para que no se caiga: colas, reintentos, patrón Outbox y recuperación automática. Y si aun así algo falla, no me entero por Twitter: métricas, logs y alertas en vivo me avisan antes que al público. Hay plan de contingencia y alguien que responde en minutos. Ese alguien soy yo.',
  },
]

export const pressBlocks: {
  category: 'personal' | 'tecnica'
  kicker: string
  title: string
  subtitle: string
}[] = [
  {
    category: 'personal',
    kicker: 'Primera ronda · Quién se sube al ring',
    title: 'El peleador',
    subtitle:
      'Lo que no se ve en un repositorio: de dónde vengo, por qué lo hago y cómo aguanto cuando la cosa se pone fea.',
  },
  {
    category: 'tecnica',
    kicker: 'Segunda ronda · Cómo se gana el combate',
    title: 'La técnica',
    subtitle:
      'Las tres decisiones que tomaría si La Velada fuera mañana. El resto del stack ya está sobre el ring, en la cartelera.',
  },
]

/** Medios acreditados, derivados de las preguntas para que no se desincronicen. */
export const outlets = [...new Set(press.map((item) => item.outlet))]
