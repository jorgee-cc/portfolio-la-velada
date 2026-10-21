import { feature } from '../../data/landing'
import type { CatalogItem, CatalogRow } from '../types'

const edition = (
  data: Omit<CatalogItem, 'kind' | 'age' | 'duration' | 'tags'> & {
    tags?: string[]
    duration?: string
    age?: string
  },
): CatalogItem => ({
  kind: 'edition',
  age: '16+',
  duration: '2 h 30 min',
  tags: ['Boxeo', 'Evento en directo', 'Récord'],
  ...data,
})

export const portfolioItem: CatalogItem = {
  id: 'portfolio',
  kind: 'portfolio',
  title: feature.title,
  year: feature.year,
  overview:
    'Más de 30.000 candidaturas. Un solo puesto: construir y sostener la infraestructura de un evento que reúne a millones de personas en directo. No vengo a participar. Vengo a ganar por KO técnico.',
  tagline: 'El portfolio de Jorge Condado',
  tags: [...feature.genres, `Candidatura ${feature.candidate}`],
  backdrop: '/images/Preview.webp',
  match: 100,
  age: '16+',
  duration: 'Candidatura completa',
  badge: `TOP ${feature.rank}`,
}

const velada1 = edition({
  id: 'velada-1',
  title: 'La Velada del Año',
  roman: 'I',
  year: '2021',
  date: '26 de mayo de 2021',
  venue: 'Sala Apolo',
  city: 'Barcelona',
  overview:
    'La primera Velada abrió la puerta: tres combates, un formato que nadie había probado y más de un millón y medio de personas mirando a la vez. El punto de partida de un fenómeno que ya es historia de Twitch.',
  backdrop: '/images/veladas/velada-1.svg',
  match: 96,
  badge: 'El origen',
})

const velada2 = edition({
  id: 'velada-2',
  title: 'La Velada del Año II',
  roman: 'II',
  year: '2022',
  date: '25 de junio de 2022',
  venue: 'Pabellón Olímpico de Badalona',
  city: 'Badalona',
  overview:
    'Badalona, 12.760 personas en la grada y el récord de espectadores simultáneos de Twitch: 3,3 millones. La Velada dejó de ser un experimento y se convirtió en el evento del año.',
  backdrop: '/images/veladas/velada-2.svg',
  match: 98,
  badge: 'Récord',
})

const velada3 = edition({
  id: 'velada-3',
  title: 'La Velada del Año III',
  roman: 'III',
  year: '2023',
  date: '1 de julio de 2023',
  venue: 'Estadio Metropolitano',
  city: 'Madrid',
  overview:
    'El Metropolitano, 70.000 personas y el primer gran salto a un estadio. Coscu, Fernanfloo, Quevedo y una noche que reventó todos los registros de la plataforma.',
  backdrop: '/images/veladas/velada-3.svg',
  match: 97,
  duration: '3 h 10 min',
  badge: 'Main event',
})

const velada4 = edition({
  id: 'velada-4',
  title: 'La Velada del Año IV',
  roman: 'IV',
  year: '2024',
  date: '13 de julio de 2024',
  venue: 'Estadio Santiago Bernabéu',
  city: 'Madrid',
  overview:
    'El Bernabéu se rindió al fenómeno: 78.297 personas, el primer combate dual y el primer Rey de la Pista. La edición que llevó La Velada al siguiente nivel.',
  backdrop: '/images/veladas/velada-4.svg',
  match: 99,
  duration: '3 h 25 min',
  badge: 'Top 10',
})

const velada5 = edition({
  id: 'velada-5',
  title: 'La Velada del Año V',
  roman: 'V',
  year: '2025',
  date: '26 de julio de 2025',
  venue: 'Estadio de La Cartuja',
  city: 'Sevilla',
  overview:
    'Sevilla acogió la quinta edición con La Cartuja como escenario. Otra noche de récord, otra demostración de que La Velada ya es mucho más que boxeo.',
  backdrop: '/images/veladas/velada-5.svg',
  match: 95,
  duration: '3 h 15 min',
  badge: 'Nuevo',
})

const velada6 = edition({
  id: 'velada-6',
  title: 'La Velada del Año VI',
  roman: 'VI',
  year: '2026',
  date: '13 de julio de 2026',
  venue: 'Estadio Santiago Bernabéu',
  city: 'Madrid',
  overview:
    'La sexta edición llega en 2026. Nuevos combates, nuevas historias y el mismo reto: sostener en directo a millones de personas sin que nada falle.',
  backdrop: '/images/veladas/velada-6.svg',
  match: 100,
  duration: 'Por confirmar',
  badge: 'Próximamente',
})

export const editions = [velada1, velada2, velada3, velada4, velada5, velada6]

export const catalogRows: CatalogRow[] = [
  {
    id: 'veladas-anteriores',
    title: 'Veladas anteriores',
    items: [velada1, velada2, velada3, velada4, velada5],
  },
  {
    id: 'main-events',
    title: 'Los main events',
    items: [velada3, velada4, velada5],
  },
  {
    id: 'clasicos',
    title: 'Clásicos del ring',
    items: [velada1, velada2],
  },
  {
    id: 'proximamente',
    title: 'Próximamente',
    items: [velada6],
  },
  {
    id: 'archivo',
    title: 'Archivo completo',
    items: editions,
  },
]
