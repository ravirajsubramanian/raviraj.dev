import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

import './global.css'

Wordpress2016.overrideThemeStyles = () => {
  return {
    'a': {
      color: 'var(--textLink)',
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    'a.anchor svg[aria-hidden="true"]': {
      stroke: 'var(--textLink)',
    },
    hr: {
      background: 'var(--hr)',
    },
    'h1, h2, h3, h4, h5, h6': {
      color: 'var(--theme)',
    },
    body: {
      color: 'var(--textNormal)',
    },
    blockquote: {
      color: 'inherit',
      borderLeftColor: 'inherit',
      opacity: '0.7',
    },
  }
}

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
