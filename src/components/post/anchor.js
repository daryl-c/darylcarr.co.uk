import React from "react"
import { Link } from "gatsby"

export default ({ href, children }) => {
  const isExternal = href.startsWith("http")
  const classNames =
    "inline px-1 text-secondary-500 tracking-wide hover:text-accent-500 focus:outline-none focus:text-accent-500"
  return isExternal ? (
    <a href={href} className={classNames}>
      {children}
    </a>
  ) : (
    <Link to={href} className={classNames}>
      {children}
    </Link>
  )
}
