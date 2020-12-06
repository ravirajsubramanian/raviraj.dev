import React from 'react'
import { Link, graphql } from 'gatsby'

import '../utils/global.css';
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import { formatReadingTime } from '../utils/helpers'
import { ThemeToggler } from 'gatsby-plugin-dark-mode'

import sun from '../../content/assets/sun.png';
import moon from '../../content/assets/moon.png';

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="All posts"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        {/* <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <span>
              <input
                type="checkbox"
                id="dark_mode_checkbox"
                onChange={e => toggleTheme(e.target.checked ? 'dark' : 'light')}
                checked={theme === 'dark'}
                style={{ display: "none" }}
              />
              <label for="dark_mode_checkbox"><img src={theme === 'dark' ? sun : moon} style={{ position: 'absolute', right: '0px' }}></img></label>
            </span>
          )}
        </ThemeToggler> */}

        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}{` • ${formatReadingTime(node.timeToRead)}`}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          )
        })}
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
