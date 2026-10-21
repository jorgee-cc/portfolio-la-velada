import { useEffect, useState } from 'react'

const getSlidesToShow = (width: number) => {
  if (width >= 1536) return 6
  if (width >= 1200) return 5
  if (width >= 900) return 4
  if (width >= 600) return 3
  return 2
}

export default function useSlidesToShow() {
  const [slidesToShow, setSlidesToShow] = useState(6)

  useEffect(() => {
    const update = () => setSlidesToShow(getSlidesToShow(window.innerWidth))
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  return slidesToShow
}
