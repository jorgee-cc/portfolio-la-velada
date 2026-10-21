const DEFAULT_TARGET = '2027-07-24T22:00:00+02:00'
const DAY = 86_400_000
const HOUR = 3_600_000
const MINUTE = 60_000
const SECOND = 1_000

const pad = (value: number) => String(value).padStart(2, '0')

/**
 * Arranca la cuenta atrás del hero. Es idempotente: si el elemento no existe
 * (por ejemplo, en otra página) no hace nada.
 */
export function startCountdown(root: HTMLElement | null): () => void {
  if (!root) return () => {}

  const target = new Date(root.dataset.target || DEFAULT_TARGET).getTime()
  const fields = {
    days: root.querySelector<HTMLElement>('[data-cd="days"]'),
    hours: root.querySelector<HTMLElement>('[data-cd="hours"]'),
    mins: root.querySelector<HTMLElement>('[data-cd="mins"]'),
    secs: root.querySelector<HTMLElement>('[data-cd="secs"]'),
  }

  const tick = () => {
    const remaining = Math.max(0, target - Date.now())

    if (fields.days) fields.days.textContent = String(Math.floor(remaining / DAY))
    if (fields.hours) fields.hours.textContent = pad(Math.floor((remaining % DAY) / HOUR))
    if (fields.mins) fields.mins.textContent = pad(Math.floor((remaining % HOUR) / MINUTE))
    if (fields.secs) fields.secs.textContent = pad(Math.floor((remaining % MINUTE) / SECOND))
  }

  tick()
  const interval = window.setInterval(tick, SECOND)

  return () => window.clearInterval(interval)
}
