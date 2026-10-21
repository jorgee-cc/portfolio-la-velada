export const site = {
  name: 'Jorge Condado Carballo',
  candidate: '#00001',
  email: 'jorge.condado.carballo@gmail.com',
  phone: '+34 611 17 61 38',
  phoneHref: 'tel:+34611176138',
  github: 'https://github.com/jorgee-cc',
  linkedin: 'https://www.linkedin.com/in/jorge-condado-carballo-4065bb2b4/',
}

export const portfolioPath = '/portfolio'

/** Fecha objetivo de la cuenta atrás del hero (próximo gran cartel). */
export const eventDate = '2027-07-24T22:00:00+02:00'

// Texto de presentación compartido por la ficha cinematográfica y el hero del portfolio.
export const pitchHtml =
  'Más de <strong class="text-[var(--color-bone)]">30.000 candidaturas</strong>. Un solo puesto: construir y sostener la infraestructura de un evento que reúne a millones de personas en directo. No vengo a participar. Vengo a <strong class="text-[var(--color-belt-gold)]">ganar por KO técnico</strong>.'

export const navLinks = [
  { href: '#cartel', label: 'El Cartel' },
  { href: '#reto', label: 'El Reto' },
  { href: '#candidaturas', label: 'Candidaturas' },
  { href: '#cartelera', label: 'Cartelera' },
  { href: '#rueda', label: 'Rueda de Prensa' },
  { href: '#palmares', label: 'Palmarés' },
]

export const contacts = [
  {
    label: 'Email',
    value: site.email,
    href: `mailto:${site.email}`,
    icon: 'M3 6h18v12H3zM3 6l9 7 9-7',
  },
  {
    label: 'Teléfono',
    value: site.phone,
    href: site.phoneHref,
    icon: 'M4 4h5l2 5-3 2a12 12 0 005 5l2-3 5 2v5a16 16 0 01-16-16z',
  },
  {
    label: 'GitHub',
    value: 'github.com/jorgee-cc',
    href: site.github,
    icon: 'M12 2a10 10 0 00-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.6-1.4-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 015 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5A10 10 0 0012 2z',
  },
  {
    label: 'LinkedIn',
    value: 'in/jorge-condado-carballo',
    href: site.linkedin,
    icon: 'M6.5 8.5v9M6.5 5.5v.01M11 17.5v-5a2.5 2.5 0 015 0v5M11 8.5v9',
  },
]

export const heroTicker = [
  '0 DOWNTIME',
  'MILLONES DE ESPECTADORES',
  'TIEMPO REAL',
  'SEGURIDAD A PRUEBA DE DDoS',
  'PICOS DE TRÁFICO',
  'ENVÍO A PRODUCCIÓN',
  'CÓDIGO FORJADO BAJO PRESIÓN',
]

export const footerTicker = [
  '¿LISTO PARA EL MAIN EVENT?',
  'FIRMA EL CARTEL',
  'JORGE CONDADO · CANDIDATO #00001',
  'EL CINTURÓN ESPERA',
]
