import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import MDXRenderer from "gatsby-plugin-mdx/mdx-renderer"
import { MDXProvider } from "@mdx-js/react"

import SEO from "../components/seo"
import Code from "../components/post/code"
import Anchor from "../components/post/anchor"
import { H1, H2, H3 } from "../components/post/headings"
import { Ul, Li } from "../components/post/lists"
import { P } from "../components/post/paragraph"
import { PostImg, HeroImg } from "../components/post/image"

const blogComponents = {
  h2: H2,
  h3: H3,
  p: P,
  img: PostImg,
  ul: Ul,
  li: Li,
  a: Anchor,
  code: Code,
}

const BlogPostTemplate = ({ data, location }) => {
  const post = data.contentfulBlogPost
  const siteTitle = data.site.siteMetadata

  return (
    <Layout location={location}>
      <SEO title={`${post.title} | ${siteTitle}`} />
      <HeroImg title={post.title} heroImage={post.heroImage} />
      <p className="text-gray-500 pt-4 sm:text-xl">{post.publishDate}</p>
      <H1>{post.title}</H1>
      <MDXProvider components={blogComponents}>
        <MDXRenderer>{post.body.childMdx.body}</MDXRenderer>
      </MDXProvider>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishDate(formatString: "MMMM Do, YYYY")
      heroImage {
        fluid(maxWidth: 1180, background: "rgb:000000") {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      body {
        childMdx {
          body
        }
      }
    }
  }
`
