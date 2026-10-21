import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { OpenInNewIcon } from '../../icons'
import { portfolioPath } from '../../../data/site'
import type { CatalogItem } from '../../types'
import {
  editionGridSx,
  editionLabelSx,
  editionValueSx,
  overviewSx,
  portfolioLinkSx,
} from './styles'

interface EditionDetailsProps {
  item: CatalogItem
}

export default function EditionDetails({ item }: EditionDetailsProps) {
  const details = [
    { label: 'Fecha', value: item.date },
    { label: 'Recinto', value: item.venue },
    { label: 'Ciudad', value: item.city },
    { label: 'Categorías', value: item.tags.join(' · ') },
  ]

  return (
    <>
      <Typography sx={overviewSx}>{item.overview}</Typography>

      <Box sx={editionGridSx}>
        {details.map((detail) => (
          <Box key={detail.label}>
            <Typography component="p" sx={editionLabelSx}>
              {detail.label}
            </Typography>
            <Typography component="p" sx={editionValueSx}>
              {detail.value}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box component="a" href={portfolioPath} sx={{ ...portfolioLinkSx, mt: 4 }}>
        Ver el portfolio de Jorge
        <OpenInNewIcon sx={{ fontSize: 16 }} />
      </Box>
    </>
  )
}
