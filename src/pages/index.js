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

    const sharedClassNames =
      "mx-2 px-2 py-2 text-sm uppercase focus:outline-none sm:text-lg "

    if (isUnavailable) {
      return (
        <span
          key={`${blogTag}`}
          className={`${sharedClassNames} text-gray-500`}
        >
          {blogTag}
        </span>
      )
    }

    const selectedClassNames = isSelected
      ? `${sharedClassNames} text-accent-500 hover:text-accent-700 focus:text-accent-700 `
      : ""
    const availableClassNames = isAvailable
      ? `${sharedClassNames} text-secondary-500 hover:text-secondary-700 focus:text-secondary-700 `
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
        className={`${linkClassNames} uppercase `}
      >
        {blogTag}
      </Link>
    )
  }

  return (
    <Layout>
      <SEO title="Home" />
      <div className="flex items-center flex-col my-2 sm:my-4">
        <span className="text-sm sm:text-md text-gray-700">Filter by:</span>
        <ul className="flex justify-center">
          {Array.from(tagList).map(tag => (
            <li key={tag}>{renderTag(tag)}</li>
          ))}
        </ul>
      </div>

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
