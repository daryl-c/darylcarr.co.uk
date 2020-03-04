import React from "react"
import PropTypes from "prop-types"

import Header from "../components/header"

const Layout = ({ children }) => (
  <div className="min-h-screen">
    <div className="px-5 max-w-5xl m-auto sm:px-8 lg:px-8">
      <Header />
      <main className="">{children}</main>
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
