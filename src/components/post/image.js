import React from "react"
import Img from "gatsby-image"

export const PostImg = props => (
  <Img {...props} className={`max-w-xl ${props.className}`} />
)

export const HeroImg = ({ title, heroImage }) => (
  <Img alt={title} fluid={heroImage.fluid} className="max-w-xl m-auto" />
)
