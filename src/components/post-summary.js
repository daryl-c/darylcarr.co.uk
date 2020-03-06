import React from "react"
import { Link } from "gatsby"

const BlogSummary = ({ id, title, slug, heroImage, description }) => (
  <article key={id} className="flex items-start mt-2 py-2 border-gray-300">
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
    </div>
  </article>
)

export default BlogSummary
