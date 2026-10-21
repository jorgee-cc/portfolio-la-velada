const REVEAL_OPTIONS: IntersectionObserverInit = {
  rootMargin: '0px 0px -10% 0px',
  threshold: 0.08,
}

/** Revela los elementos `[data-reveal]` la primera vez que entran en pantalla. */
function initReveal(): void {
  const elements = document.querySelectorAll<HTMLElement>('[data-reveal]')
  if (!elements.length) return

  if (typeof IntersectionObserver === 'undefined') {
    elements.forEach((element) => element.classList.add('is-visible'))
    return
  }

  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue
      entry.target.classList.add('is-visible')
      observer.unobserve(entry.target)
    }
  }, REVEAL_OPTIONS)

  elements.forEach((element) => observer.observe(element))
}

/** Rellena los `[data-year]` con el año actual. */
function initYear(): void {
  const year = String(new Date().getFullYear())
  document.querySelectorAll<HTMLElement>('[data-year]').forEach((element) => {
    element.textContent = year
  })
}

export function initSite(): void {
  initReveal()
  initYear()
}
