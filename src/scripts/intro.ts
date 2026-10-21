import { portfolioPath } from '../data/site'

/**
 * Controla la reproducción de la intro: fin por animación, temporizador de
 * respaldo, skip, modo `?watch=1` y movimiento reducido.
 *
 * La intro se reproduce en cada carga de `/`; no hay persistencia de sesión.
 */
export function initIntro(): void {
  const intro = document.querySelector<HTMLElement>('[data-intro]')
  if (!intro) return

  const root = document.documentElement
  const landing = document.querySelector<HTMLElement>('[data-landing]')
  const watchMode = new URLSearchParams(window.location.search).get('watch') === '1'
  const enterPortfolio = () => window.location.replace(portfolioPath)

  if (root.classList.contains('intro-skip')) {
    intro.remove()
    if (watchMode) enterPortfolio()
    return
  }

  const stage = intro.querySelector<HTMLElement>('[data-intro-stage]')
  const skip = intro.querySelector<HTMLButtonElement>('[data-intro-skip]')
  let finished = false

  if (landing) landing.setAttribute('inert', '')

  const finish = (immediate = false) => {
    if (finished) return
    finished = true

    // Watch Now: la intro se reproduce y, al acabar, entra en el portfolio.
    if (watchMode) {
      if (immediate) {
        enterPortfolio()
        return
      }

      intro.classList.add('is-entering-portfolio')
      intro.setAttribute('aria-hidden', 'true')
      window.setTimeout(enterPortfolio, 480)
      return
    }

    if (landing) landing.removeAttribute('inert')
    root.classList.add('intro-done')
    intro.classList.add('is-leaving')
    intro.setAttribute('aria-hidden', 'true')

    if (immediate) {
      intro.remove()
      return
    }

    intro.addEventListener(
      'transitionend',
      (event) => {
        if (event.target === intro && (event as TransitionEvent).propertyName === 'opacity') {
          intro.remove()
        }
      },
      { once: true },
    )
    window.setTimeout(() => intro.remove(), 1000)
  }

  // El zoom original termina a los 4 s (0,5 s de espera + 3,5 s de animación).
  stage?.addEventListener('animationend', (event) => {
    if (event.target === stage) finish()
  })
  skip?.addEventListener('click', () => finish(watchMode))
  window.setTimeout(() => finish(), 4800)

  // Si el usuario activa "movimiento reducido" con la página abierta,
  // la intro desaparece sin dejar la landing bloqueada por `inert`.
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  if (reducedMotion.matches) finish(true)
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) finish(true)
  })
}
