import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useDetailModal } from '../providers/DetailModalProvider'
import { PANEL_BACKGROUND } from '../constants'
import MetaRow from './ui/MetaRow'
import DetailHero from './detail/DetailHero'
import PortfolioDetails from './detail/PortfolioDetails'
import EditionDetails from './detail/EditionDetails'
import { modalBodySx, modalPaperSx } from './detail/styles'

export default function DetailModal() {
  const { item, close } = useDetailModal()
  const isPortfolio = item?.kind === 'portfolio'
  const fullScreen = useMediaQuery('(max-width:599.95px)')

  return (
    <Dialog
      open={Boolean(item)}
      onClose={close}
      fullWidth
      fullScreen={fullScreen}
      maxWidth="md"
      scroll="paper"
      aria-label={item ? `Ficha de ${item.title}` : 'Ficha'}
      PaperProps={{
        sx: {
          ...modalPaperSx,
          borderRadius: fullScreen ? 0 : 1.5,
          maxHeight: fullScreen ? '100dvh' : undefined,
        },
      }}
    >
      {item && (
        <DialogContent sx={{ p: 0, bgcolor: PANEL_BACKGROUND }}>
          <DetailHero item={item} isPortfolio={isPortfolio} onClose={close} />

          <Box sx={modalBodySx}>
            <MetaRow match={item.match} year={item.year} age={item.age} duration={item.duration} />

            {isPortfolio ? <PortfolioDetails item={item} /> : <EditionDetails item={item} />}
          </Box>
        </DialogContent>
      )}
    </Dialog>
  )
}
