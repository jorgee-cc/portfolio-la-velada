import type { Tone } from '../data/content'

/** Clases de color por tono, compartidas por las secciones del portfolio. */
export const toneText: Record<Tone, string> = {
  red: 'text-[var(--color-ring-red)]',
  gold: 'text-[var(--color-belt-gold)]',
  blue: 'text-[var(--color-ring-blue)]',
}

export const toneBorder: Record<Tone, string> = {
  red: 'hover:border-[var(--color-ring-red)]/50',
  gold: 'hover:border-[var(--color-belt-gold)]/50',
  blue: 'hover:border-[var(--color-ring-blue)]/50',
}
