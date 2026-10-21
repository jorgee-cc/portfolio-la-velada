import { useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from 'react-slick'
import type { Settings } from 'react-slick'
import type SliderInstance from 'react-slick'
import { ArrowBackIosNewIcon, ArrowForwardIosIcon } from '../icons'
import Card from './Card'
import useSlidesToShow from '../hooks/useSlidesToShow'
import type { CatalogRow } from '../types'

const SliderComponent = ((Slider as unknown as { default?: typeof Slider }).default ??
  Slider) as typeof Slider

export default function Row({ row }: { row: CatalogRow }) {
  const sliderRef = useRef<SliderInstance | null>(null)
  const slidesToShow = useSlidesToShow()
  const [index, setIndex] = useState(0)

  const showPrevious = index > 0
  const showNext = index < row.items.length - slidesToShow

  const settings: Settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: slidesToShow,
    beforeChange: (_current: number, next: number) => setIndex(next),
  }

  const arrowSx = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    zIndex: 5,
    display: { xs: 'none', sm: 'flex' },
    alignItems: 'center',
    justifyContent: 'center',
    width: { sm: 44, md: 60 },
    border: 0,
    p: 0,
    color: '#ffffff',
    cursor: 'pointer',
    opacity: 0,
    transition: 'opacity 0.2s ease, background-color 0.2s ease',
    '&:hover': { bgcolor: 'rgba(20, 20, 20, 0.55)' },
    '&:focus-visible': { opacity: 1, outline: '2px solid #ffffff', outlineOffset: -4 },
  } as const

  return (
    <Box component="section" className="netflix-row" sx={{ mb: { xs: 3.5, md: 4.5 } }}>
      <Typography
        component="h2"
        sx={{
          pl: { xs: 2, md: '60px' },
          mb: 1.1,
          fontSize: { xs: '1rem', md: '1.25rem' },
          fontWeight: 700,
          letterSpacing: '-0.01em',
          color: '#e5e5e5',
        }}
      >
        {row.title}
      </Typography>

      <Box sx={{ position: 'relative' }}>
        {showPrevious && (
          <Box
            component="button"
            type="button"
            aria-label={`Anterior en ${row.title}`}
            className="netflix-row__arrow"
            onClick={() => sliderRef.current?.slickPrev()}
            sx={{
              ...arrowSx,
              left: 0,
              backgroundImage: 'linear-gradient(to right, rgba(20, 20, 20, 0.9), transparent)',
            }}
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </Box>
        )}

        <Box sx={{ px: { xs: 2, md: '60px' } }}>
          <SliderComponent ref={sliderRef} {...settings}>
            {row.items.map((item) => (
              <Box key={item.id} sx={{ pr: { xs: 0.75, md: 1 } }}>
                <Card item={item} />
              </Box>
            ))}
          </SliderComponent>
        </Box>

        {showNext && (
          <Box
            component="button"
            type="button"
            aria-label={`Siguiente en ${row.title}`}
            className="netflix-row__arrow"
            onClick={() => sliderRef.current?.slickNext()}
            sx={{
              ...arrowSx,
              right: 0,
              backgroundImage: 'linear-gradient(to left, rgba(20, 20, 20, 0.9), transparent)',
            }}
          >
            <ArrowForwardIosIcon fontSize="small" />
          </Box>
        )}
      </Box>
    </Box>
  )
}
