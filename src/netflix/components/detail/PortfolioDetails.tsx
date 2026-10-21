import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { OpenInNewIcon } from '../../icons'
import { featureChapters, featureDetails } from '../../../data/landing'
import { pitchHtml, portfolioPath } from '../../../data/site'
import type { CatalogItem } from '../../types'
import {
  chapterSx,
  chaptersRowSx,
  detailGridSx,
  detailLabelSx,
  detailRowSx,
  pitchSx,
  portfolioLinkSx,
  sectionLabelSx,
  tagsRowSx,
  tagSx,
} from './styles'

interface PortfolioDetailsProps {
  item: CatalogItem
}

export default function PortfolioDetails({ item }: PortfolioDetailsProps) {
  return (
    <>
      <Box sx={pitchSx} dangerouslySetInnerHTML={{ __html: pitchHtml }} />

      <Box sx={tagsRowSx}>
        {item.tags.map((tag) => (
          <Box key={tag} component="span" sx={tagSx}>
            {tag}
          </Box>
        ))}
      </Box>

      <Box sx={detailGridSx}>
        {featureDetails.map((detail) => (
          <Box key={detail.label} sx={detailRowSx}>
            <Typography component="span" sx={detailLabelSx}>
              {detail.label}
            </Typography>
            <Typography component="span" sx={{ fontSize: '0.88rem' }}>
              {detail.value}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box sx={{ mt: 3 }}>
        <Typography component="p" sx={sectionLabelSx}>
          Capítulos del portfolio
        </Typography>
        <Box sx={chaptersRowSx}>
          {featureChapters.map((chapter) => (
            <Box key={chapter.href} component="a" href={chapter.href} sx={chapterSx}>
              {chapter.label}
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ mt: 4 }}>
        <Box component="a" href={portfolioPath} sx={portfolioLinkSx}>
          Ver el portfolio completo
          <OpenInNewIcon sx={{ fontSize: 16 }} />
        </Box>
      </Box>
    </>
  )
}
