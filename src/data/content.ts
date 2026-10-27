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

export const press: {
  outlet: string
  round?: string
  q: string
  a: string
}[] = [
  {
    outlet: 'La Tribuna Digital',
    q: '¿Has estado antes en un proceso como este?',
    a: 'Sí. El año pasado pasé el filtro de más de 30.000 candidaturas a programador de La Velada. Me llamaron. Y en el evento de Capgemini hablé con midudev, que me situó como mínimo en el top 70-80. No llego de cero: llego con el ring ya pisado.',
  },
  {
    outlet: 'Código Abierto',
    q: '¿Por qué deberíamos elegirte a ti y no a otro de los 30.000?',
    a: 'Porque no solo escribo código bonito: lo sostengo en producción. Tengo un cliente real funcionando, he endurecido un servidor contra ataques reales y he construido sistemas distribuidos y compiladores. Cuando el directo empieza, no hay segunda toma.',
  },
  {
    outlet: 'El Último Round',
    q: '¿Puedes con la presión de un evento en directo?',
    a: 'Soy árbitro federado. He tomado decisiones imparciales en milisegundos con todo el mundo mirándome y sin margen de revisión. Esa presión la llevo entrenada desde hace años.',
  },
  {
    outlet: 'Latencia Cero',
    round: '02',
    q: '¿Cómo haces que votos y chat lleguen al instante?',
    a: 'Con WebSockets y una arquitectura orientada a eventos. Votos, chat y datos viajan en milisegundos, no en pestañas cargando. En directo, cada segundo de retraso se nota en la grada.',
  },
  {
    outlet: 'Ciberdefensa Hoy',
    round: '03',
    q: '¿Y si atacan el evento con un DDoS el día del directo?',
    a: 'Endurecimiento real: WAF, rate limiting, OWASP Top 10 y defensa en profundidad. No me quedo en poner un certificado y rezar. Si hay datos de millones de fans en juego, la seguridad se diseña desde el primer commit.',
  },
  {
    outlet: 'Streaming Today',
    round: '04',
    q: '¿Cómo aguanta el sistema si un servicio se cae en máxima audiencia?',
    a: 'Diseño para que no se caiga: colas, reintentos, patrón Outbox y recuperación automática. Si aun así algo falla, hay un plan de contingencia y alguien que responde en minutos. Ese alguien soy yo.',
  },
  {
    outlet: 'La Esquina Técnica',
    round: '05',
    q: '¿Cómo sabrás que algo va mal antes de que lo note el público?',
    a: 'Observabilidad total: métricas, logs y alertas en vivo. No peleo a ciegas. Si algo respira mal, lo sabemos antes que nadie y lo arreglamos fuera de cámara.',
  },
  {
    outlet: 'FanZone',
    q: '¿Qué te diferencia técnicamente?',
    a: 'Cubro el stack completo: frontend, backend, infraestructura y seguridad. Puedo construir la experiencia y, a la vez, blindar el servidor que la aguanta. Menos manos, menos ruido, menos puntos de fallo.',
  },
  {
    outlet: 'TechPress',
    q: '¿Cuál es tu motivación real?',
    a: 'Que millones de personas miren a la vez algo que he construido y no se den cuenta de que estoy detrás. Eso ya es ganar. El cinturón es la consecuencia.',
  },
]

export const outlets = [
  'La Tribuna Digital',
  'Código Abierto',
  'El Último Round',
  'Latencia Cero',
  'Ciberdefensa Hoy',
  'Streaming Today',
  'La Esquina Técnica',
  'FanZone',
  'TechPress',
]
