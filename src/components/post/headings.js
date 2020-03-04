import React from "react"

export const H1 = ({ children }) => (
  <h2 className="text-primary-700 font-semibold pb-3 text-2xl sm:text-4xl">
    {children}
  </h2>
)

export const H2 = ({ children }) => (
  <h2 className="text-primary-600 pt-2 font-medium sm:text-2xl ">{children}</h2>
)

export const H3 = ({ children }) => (
  <h3 className="text-primary-600 sm:pt-2 font-medium sm:text-xl">
    {children}
  </h3>
)
