import React from "react"
import { Link } from "gatsby"
import queryString from "query-string"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostSummary from "../components/post-summary"

const getUniqueTags = posts => {
  const uniqueTags = new Set()
  posts.forEach(({ tags }) => tags.forEach(uniqueTags.add, uniqueTags))
  return Array.from(uniqueTags)
}

const getNextUrl = ({ search }, newSearchParams) => {
  const parsedSearchParams = queryString.parse(search)
  const newQueryString = queryString.stringify(
    {
      ...parsedSearchParams,
      ...newSearchParams,
    },
    { arrayFormat: "comma" }
  )
  return `?${newQueryString}`
}

const getSelectedTagsFromUrl = location => {
  const searchParams = queryString.parse(location.search, {
    arrayFormat: "comma",
  })
  const paramTags = (typeof searchParams.tags === "string"
    ? [searchParams.tags || ""]
    : searchParams.tags || []
  ).filter(tag => tag)
  return Array.from(new Set(paramTags))
}

const filterSelectedTagPosts = (posts, selectedTags) => {
  return selectedTags.length === 0
    ? posts
    : posts.filter(post => post.tags.some(tag => selectedTags.includes(tag)))
}

const getAvailableTagsFromFilteredPosts = (selectedTags, filteredPosts) => {
  let availableTags = new Set()
  filteredPosts.forEach(post =>
    post.tags.forEach(
      tag => !selectedTags.includes(tag) && availableTags.add(tag)
    )
  )
  return availableTags
}

const IndexPage = ({ data, location }) => {
  const posts = data.allContentfulBlogPost.edges.map(({ node }) => node)
  const tagList = getUniqueTags(posts)
  const selectedTags = getSelectedTagsFromUrl(location)
  const filteredPosts = filterSelectedTagPosts(posts, selectedTags)
  const availableTags = getAvailableTagsFromFilteredPosts(
    selectedTags,
    filteredPosts
  )

  const renderTag = blogTag => {
    const isSelected = selectedTags.includes(blogTag)
    const isAvailable = availableTags.has(blogTag)
    const isUnavailable = !isSelected && !isAvailable

    if (isUnavailable) {
      return (
        <span
          key={`${blogTag}`}
          className={`text-gray-500 sm:text-lg uppercase mx-2 px-2 py-2 focus:outline-none`}
        >
          {blogTag}
        </span>
      )
    }

    const selectedClassNames = isSelected
      ? "font-medium text-secondary-700 hover:text-accent-600 focus:text-accent-600 sm:text-lg "
      : ""
    const availableClassNames = isAvailable
      ? "text-secondary-500 hover:text-accent-500 focus:text-accent-500 sm:text-lg "
      : ""

    const linkClassNames = [selectedClassNames, availableClassNames].join("")
    const linkDestination = selectedTags.includes(blogTag)
      ? getNextUrl(location, {
          tags: selectedTags.filter(sTag => sTag !== blogTag),
        })
      : getNextUrl(location, {
          tags: [...selectedTags, blogTag],
        })

    return (
      <Link
        key={blogTag}
        to={linkDestination}
        className={`${linkClassNames} text-sm uppercase mx-2 px-2 py-2 focus:outline-none`}
      >
        {blogTag}
      </Link>
    )
  }

  return (
    <Layout>
      <SEO title="Home" />
      <ul className="flex justify-center my-2 sm:my-4">
        {Array.from(tagList).map(tag => (
          <li key={tag}>{renderTag(tag)}</li>
        ))}
      </ul>

      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>
            <PostSummary {...post} />
          </li>
        ))}
      </ul>
    </Layout>
  )
}

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
