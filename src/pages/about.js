import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { H1 } from "../components/post/headings"
import { P } from "../components/post/paragraph"

const NotFoundPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="mt-2 sm:mt-4">
      <H1>About</H1>
      <P>There's not much to say...</P>
    </div>
  </Layout>
)

export default NotFoundPage
