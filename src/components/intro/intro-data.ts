/**
 * Datos visuales de la intro.
 *
 * `furStrokes` describe el borde irregular de la pincelada: cada entrada es
 * `[izquierda %, ancho %, intensidad %]`. Se usa para generar una única
 * textura SVG en `Intro.astro` en lugar de pintar una etiqueta por pincelada.
 *
 * `beamColumns` son las cuatro columnas de luz que barren la escena:
 * `left`/`width` en %, `delay` en segundos y `tilt` en grados.
 */
export const furStrokes: Array<[number, number, number]> = [
  [0, 3.8, 15],
  [3.8, 2.8, 10],
  [6.6, 4.8, 37],
  [11.4, 4, 23],
  [15.4, 4, 15],
  [19.4, 2.5, 27],
  [21.9, 4, 20],
  [25.9, 2, 30],
  [27.9, 4, 35],
  [31.9, 3.5, 39],
  [35.4, 2, 34],
  [37.4, 2.6, 22],
  [40, 6, 47],
  [46, 2, 36],
  [48, 5.5, 29],
  [53.5, 3, 39],
  [56.5, 4.1, 45],
  [60.6, 2.4, 34],
  [63, 4, 47],
  [67, 1.5, 27],
  [68.5, 2.8, 37],
  [71.3, 2.3, 9],
  [73.6, 2.2, 28],
  [75.8, 1, 37],
  [76.8, 2.1, 28],
  [78.9, 4.1, 34],
  [83, 2.5, 21],
  [85.5, 4.5, 39],
  [90, 2.8, 30],
  [92.8, 3.5, 19],
  [96.3, 3.7, 37],
]

export const beamColumns: Array<{
  left: number
  width: number
  delay: number
  tilt: number
  alpha: number
}> = [
  { left: 5, width: 17, delay: 0.16, tilt: -5, alpha: 0.95 },
  { left: 29, width: 18, delay: 0.3, tilt: 4, alpha: 0.85 },
  { left: 53, width: 17, delay: 0.22, tilt: -3, alpha: 0.9 },
  { left: 77, width: 18, delay: 0.36, tilt: 5, alpha: 0.8 },
]
