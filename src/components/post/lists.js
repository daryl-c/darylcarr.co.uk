import React from "react"

export const Ul = ({ children }) => (
  <ul className="pl-5 pr-5 list-disc">{children}</ul>
)

export const Li = ({ children }) => (
  <li className="text-primary-500 sm:text-lg my-4">{children}</li>
)
