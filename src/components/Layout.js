import React from 'react'
import { Link } from 'gatsby'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import { rhythm, scale } from '../utils/typography'
import sun from '../../content/assets/sun.png';
import moon from '../../content/assets/moon.png';

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <span class="flex-container space-between">
          <h1
            style={{
              marginBottom: rhythm(1.5),
              marginTop: 0,
              color: 'var(--textTitle)'
            }}
            class='flex-item'
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h1>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <span class='flex-item'>
                <input
                  type="checkbox"
                  id="dark_mode_checkbox"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                  style={{ display: "none" }}
                />
                <label for="dark_mode_checkbox"><img src={theme === 'dark' ? moon : sun} style={{
                  display: 'block',
                  'margin-left': 'auto',
                  'margin-right': 'auto'
                }}></img></label>
              </span>
            )}
          </ThemeToggler>
        </span>
      )
    } else {
      header = (
        <span class="flex-container space-between">
          <h3
            style={{
              fontFamily: `Montserrat, sans-serif`,
              marginTop: 0,
              marginBottom: rhythm(-1),
              color: 'var(--theme)'
            }}
            class='flex-item'
          >
            <Link
              style={{
                boxShadow: `none`,
                textDecoration: `none`,
                color: `inherit`,
              }}
              to={`/`}
            >
              {title}
            </Link>
          </h3>
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <span class='flex-item'>
                <input
                  type="checkbox"
                  id="dark_mode_checkbox"
                  onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                  checked={theme === 'dark'}
                  style={{ display: "none" }}
                />
                <label for="dark_mode_checkbox"><img src={theme === 'dark' ? moon : sun} style={{
                  display: 'block',
                  'margin-left': 'auto',
                  'margin-right': 'auto'
                }}></img></label>
              </span>
            )}
          </ThemeToggler>
        </span>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          color: 'var(--textNormal)',
        }}
      >
        {header}
        {children}
        <footer>
          © 2019, Built with <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
