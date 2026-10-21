import { portfolioPath, site } from './site'

/**
 * Ficha de la única "película" de la landing: el portfolio de Jorge.
 * Todos los datos provienen del contenido ya existente en el repositorio.
 */
export const feature = {
  kicker: 'Jorge Condado presenta',
  title: 'La Velada del Código',
  year: '2027',
  candidate: site.candidate,
  genres: ['Full-Stack', 'Infraestructura', 'Seguridad'],
  rank: '70-80',
  recognition: 'Top 70-80',
  recognitionDetail: 'de más de 30.000 candidaturas · según midudev',
}

export const featureDetails = [
  { label: 'Título', value: feature.title },
  { label: 'Año', value: feature.year },
  { label: 'Protagonista', value: site.name },
  { label: 'Candidatura', value: feature.candidate },
  { label: 'Especialidad', value: feature.genres.join(' · ') },
  { label: 'Reconocimiento', value: `${feature.recognition} ${feature.recognitionDetail}` },
]

export const featureChapters = [
  { href: `${portfolioPath}#cartel`, label: 'El cartel' },
  { href: `${portfolioPath}#reto`, label: 'El reto' },
  { href: `${portfolioPath}#cartelera`, label: 'La cartelera' },
  { href: `${portfolioPath}#palmares`, label: 'El palmarés' },
]
