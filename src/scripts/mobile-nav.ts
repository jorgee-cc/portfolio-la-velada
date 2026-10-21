/**
 * Menú móvil del portfolio: alterna la visibilidad y mantiene `aria-expanded`
 * sincronizado. Al elegir un enlace se cierra solo.
 */
export function initMobileNav(): void {
  const toggle = document.getElementById('nav-toggle')
  const nav = document.getElementById('mobile-nav')

  if (!toggle || !nav) return

  const setOpen = (open: boolean) => {
    nav.classList.toggle('hidden', !open)
    toggle.setAttribute('aria-expanded', String(open))
  }

  toggle.addEventListener('click', () => {
    setOpen(nav.classList.contains('hidden'))
  })

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false))
  })
}
