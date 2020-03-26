import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout2"

const BlogIndex = ({ data, location }) => {
  //const siteTitle = data.site.siteMetadata.title
  const siteTitle = 'ほげほげ'
  const posts = data.allMarkdownRemark.edges

  return (
    <Layout location={location} title={siteTitle}>
      {posts.map(({ node }) => {
        const title = node.frontmatter.title || node.frontmatter.path
        return (
          <article key={node.frontmatter.path}>
            <header>
              <h3 >
                <Link style={{ boxShadow: `none` }} to={node.frontmatter.path}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
            </header>
            <section>
              <p
                dangerouslySetInnerHTML={{
                  __html: node.frontmatter.description 
                }}
              />
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  {
    site{
      siteMetadata{
        title
      }
    }
    allMarkdownRemark {
      edges{
        node {
          frontmatter{
            title
            path
          }
        }
      }
      }
    }

`
