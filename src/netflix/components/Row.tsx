import { useMemo, useRef, useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Slider from 'react-slick'
import type { Settings } from 'react-slick'
import type SliderInstance from 'react-slick'
import Card from './Card'
import RowArrow from './row/RowArrow'
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

  const settings = useMemo<Settings>(
    () => ({
      dots: false,
      arrows: false,
      infinite: false,
      speed: 500,
      slidesToShow,
      slidesToScroll: slidesToShow,
      beforeChange: (_current: number, next: number) => setIndex(next),
    }),
    [slidesToShow],
  )

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
          <RowArrow
            direction="previous"
            rowTitle={row.title}
            onClick={() => sliderRef.current?.slickPrev()}
          />
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
          <RowArrow
            direction="next"
            rowTitle={row.title}
            onClick={() => sliderRef.current?.slickNext()}
          />
        )}
      </Box>
    </Box>
  )
}
