import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <div>
      {data.allContentfulBlogPost.edges.map(({ node }) => {
        const { id, title, slug, heroImage, description, tags } = node
        return (
          <article
            key={id}
            className="flex items-start mt-2 py-2 border-gray-300"
          >
            <img
              className="w-16 h-16 rounded mt-2 hidden sm:block"
              src={heroImage.fluid.src}
              alt=""
            />
            <div className="flex flex-col sm:ml-4">
              <Link
                to={slug}
                className="block text-primary-600 hover:text-accent-500 focus:outline-none focus:text-accent-500 active:text-accent-700"
              >
                <h3 className="text-xl sm:text-2xl">{title}</h3>
              </Link>
              <p
                className="text-gray-600 sm:text-lg"
                dangerouslySetInnerHTML={{
                  __html: description.childMarkdownRemark.html,
                }}
              ></p>
              <div>
                {tags.map(tag => (
                  <Link
                    key={`${id}-${tag}`}
                    to={`/tag/${tag}`}
                    className="text-sm uppercase mr-2 text-secondary-500 hover:text-secondary-700 hover:text-md focus:outline-none focus:text-secondary-700 focus:text-md"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          </article>
        )
      })}
    </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 64, maxHeight: 64, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
