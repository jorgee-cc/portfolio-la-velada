import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
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

  return (
    <Dialog
      open={Boolean(item)}
      onClose={close}
      fullWidth
      maxWidth="md"
      scroll="paper"
      aria-label={item ? `Ficha de ${item.title}` : 'Ficha'}
      PaperProps={{ sx: modalPaperSx }}
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
