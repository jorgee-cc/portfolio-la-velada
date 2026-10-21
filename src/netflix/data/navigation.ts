import { portfolioPath, site } from '../../data/site'

export interface NavigationItem {
  label: string
  href: string
  external?: boolean
}

export const headerNavItems: NavigationItem[] = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Portfolio', href: portfolioPath },
  { label: 'Proyectos', href: `${portfolioPath}#cartelera` },
  { label: 'Contacto', href: `${portfolioPath}#rueda` },
]

export const userMenuItems: NavigationItem[] = [
  { label: 'Portfolio', href: portfolioPath },
  { label: 'GitHub', href: site.github, external: true },
  { label: 'LinkedIn', href: site.linkedin, external: true },
  { label: 'Contacto', href: `mailto:${site.email}` },
]
