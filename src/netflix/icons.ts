import AddModule from '@mui/icons-material/Add'
import ArrowBackIosNewModule from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosModule from '@mui/icons-material/ArrowForwardIos'
import CloseModule from '@mui/icons-material/Close'
import GitHubModule from '@mui/icons-material/GitHub'
import InfoOutlinedModule from '@mui/icons-material/InfoOutlined'
import LinkedInModule from '@mui/icons-material/LinkedIn'
import MenuModule from '@mui/icons-material/Menu'
import OpenInNewModule from '@mui/icons-material/OpenInNew'
import PlayArrowModule from '@mui/icons-material/PlayArrow'
import ThumbUpOffAltModule from '@mui/icons-material/ThumbUpOffAlt'
import VolumeOffModule from '@mui/icons-material/VolumeOff'

/**
 * @mui/icons-material se publica en CommonJS. Según cómo lo prebundle Vite,
 * el import por defecto puede llegar como el componente o como un namespace
 * `{ default: componente }`. Normalizamos ambos casos en un único sitio.
 */
const interop = <T>(module: T): T => (module as unknown as { default?: T }).default ?? module

export const AddIcon = interop(AddModule)
export const ArrowBackIosNewIcon = interop(ArrowBackIosNewModule)
export const ArrowForwardIosIcon = interop(ArrowForwardIosModule)
export const CloseIcon = interop(CloseModule)
export const GitHubIcon = interop(GitHubModule)
export const InfoOutlinedIcon = interop(InfoOutlinedModule)
export const LinkedInIcon = interop(LinkedInModule)
export const MenuIcon = interop(MenuModule)
export const OpenInNewIcon = interop(OpenInNewModule)
export const PlayArrowIcon = interop(PlayArrowModule)
export const ThumbUpOffAltIcon = interop(ThumbUpOffAltModule)
export const VolumeOffIcon = interop(VolumeOffModule)
