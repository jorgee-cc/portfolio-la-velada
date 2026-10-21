export interface PreviewPosition {
  width: number
  left: number
  top: number
}

const MIN_WIDTH = 276
const MAX_WIDTH = 430
const VIEWPORT_MARGIN = 12
const MAX_PREVIEW_HEIGHT = 360

/**
 * Calcula la posición de la vista rápida a partir del rect de la tarjeta,
 * manteniéndola dentro del viewport.
 */
export function getPreviewPosition(
  rect: DOMRect,
  viewportWidth: number,
  viewportHeight: number,
): PreviewPosition {
  const width = Math.min(Math.max(rect.width * 1.5, MIN_WIDTH), MAX_WIDTH)
  const left = Math.min(
    Math.max(rect.left - (width - rect.width) / 2, VIEWPORT_MARGIN),
    viewportWidth - width - VIEWPORT_MARGIN,
  )
  const top = Math.max(
    VIEWPORT_MARGIN,
    Math.min(rect.top - 26, viewportHeight - MAX_PREVIEW_HEIGHT),
  )

  return { width, left, top }
}
