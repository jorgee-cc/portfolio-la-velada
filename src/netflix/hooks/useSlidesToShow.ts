import { useEffect, useState } from 'react'

const BREAKPOINTS = [
  { minWidth: 1536, slides: 6 },
  { minWidth: 1200, slides: 5 },
  { minWidth: 900, slides: 4 },
  { minWidth: 600, slides: 3 },
  { minWidth: 0, slides: 2 },
]

const getSlidesToShow = (width: number) =>
  BREAKPOINTS.find(({ minWidth }) => width >= minWidth)?.slides ?? 2

export default function useSlidesToShow() {
  const [slidesToShow, setSlidesToShow] = useState(() => getSlidesToShow(1536))

  useEffect(() => {
    const update = () => setSlidesToShow(getSlidesToShow(window.innerWidth))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return slidesToShow
}
