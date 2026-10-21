import Typography, { type TypographyProps } from '@mui/material/Typography'

interface MaxLineTypographyProps extends TypographyProps {
  maxLine: number
}

export default function MaxLineTypography({ maxLine, sx, ...props }: MaxLineTypographyProps) {
  return (
    <Typography
      {...props}
      sx={{
        display: '-webkit-box',
        WebkitLineClamp: maxLine,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        ...sx,
      }}
    />
  )
}
