export type Tone = 'red' | 'gold' | 'blue'

export const rounds: {
  n: string
  name: string
  demand: string
  play: string
  tone: Tone
}[] = [
  {
    n: '01',
    name: 'El peso del tráfico',
    demand: 'Millones de personas pulsando a la vez. El pico no avisa.',
    play: 'Diseño para la carga, no para la demo: caché agresiva, CDN, colas y pruebas de estrés antes del directo.',
    tone: 'red',
  },
  {
    n: '02',
    name: 'El combate en tiempo real',
    demand: 'Votos, chat y datos que tienen que llegar al instante.',
    play: 'WebSockets y arquitectura orientada a eventos. Latencia de milisegundos, no de pestañas cargando.',
    tone: 'gold',
  },
  {
    n: '03',
    name: 'La defensa',
    demand: 'DDoS, bots de entradas y datos de millones de fans en juego.',
    play: 'Endurecimiento real: WAF, rate limiting, OWASP Top 10 y defensa en profundidad — no solo un certificado.',
    tone: 'blue',
  },
  {
    n: '04',
    name: 'El aguante',
    demand: 'Si un servicio se cae en horario de máxima audiencia, se acabó.',
    play: 'Tolerancia a fallos: colas, reintentos, patrón Outbox y recuperación automática. Caerse no es una opción.',
    tone: 'red',
  },
  {
    n: '05',
    name: 'La esquina',
    demand: 'No puedes pelear a ciegas: hay que ver el golpe venir.',
    play: 'Observabilidad total — métricas, logs y alertas en vivo. Si algo respira mal, lo sabemos antes que nadie.',
    tone: 'gold',
  },
  {
    n: '06',
    name: 'El KO final',
    demand: 'El evento termina. Las ganas no.',
    play: 'Entrega, mantenimiento y evolución. Me quedo en tu esquina más allá del directo.',
    tone: 'blue',
  },
]

/** Comparativa del cartel del hero: mi baza frente a la competencia. */
export const tape = [
  { label: 'Experiencia real', me: 'Cliente real en producción', rival: 'Ejercicios de bootcamp' },
  { label: 'Alcance', me: 'Front · Back · Infra · Seguridad', rival: 'Solo la parte bonita' },
  { label: 'Bajo presión', me: 'Árbitro federado', rival: 'Nunca ha roto producción' },
  { label: 'Tráfico', me: 'Diseñado para el pico', rival: 'Cae con 100 usuarios' },
  { label: 'Motivo', me: 'Ganar por KO', rival: 'Participar' },
]

export const record = [
  { value: 4, suffix: 'º', label: 'Curso', sub: 'Ing. Informática · UC3M' },
  { value: 12, suffix: '+', label: 'Proyectos', sub: 'entregados y desplegados' },
  { value: 1, suffix: '', label: 'Cliente real', sub: 'en producción ahora mismo' },
  { value: 3, suffix: '+', label: 'Años', sub: 'trabajando mientras estudio' },
]

export const commitments = [
  { k: 'Uptime objetivo', v: '99,99%' },
  { k: 'Latencia p95', v: '< 100 ms' },
  { k: 'Pérdida de datos', v: '0' },
  { k: 'Respuesta en crisis', v: '< 15 min' },
  { k: 'Pruebas de carga', v: 'Antes del directo' },
  { k: 'Disponibilidad en pico', v: '24/7' },
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

export const press = [
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
    outlet: 'FanZone',
    q: '¿Qué te diferencia técnicamente?',
    a: 'Cubro el stack completo: frontend, backend, infraestructura y seguridad. Puedo construir la experiencia y, a la vez, blindar el servidor que la aguanta. Menos manos, menos ruido, menos puntos de fallo.',
  },
  {
    outlet: 'Streaming Today',
    q: '¿Qué pasa si algo se cae en pleno directo?',
    a: 'Diseño para que no se caiga: colas, reintentos, patrón Outbox y observabilidad en vivo. Y si aun así cae, hay un plan de recuperación y alguien que responde en minutos. Ese alguien soy yo.',
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
  'FanZone',
  'Streaming Today',
  'TechPress',
]
