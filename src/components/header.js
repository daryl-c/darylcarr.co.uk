import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="py-2 sm:py-4">
    <div className="flex flex-row justify-between items-baseline">
      <div>
        <h1 className="text-2xl text-primary-700 font-bold">
          <Link
            to="/"
            className="hover:text-secondary-500 focus:outline-none focus:text-secondary-500 active:text-secondary-300 sm:text-3xl"
          >
            Daryl Carr
          </Link>
        </h1>
      </div>
      <nav>
        <ul className="flex pt-2">
          <li>
            <Link
              to="/about"
              activeClassName="font-bold text-primary-500"
              className="text-lg mr-2 py-2 px-1 pl-0 text-primary-400 hover:border-b-2 hover:border-secondary-300 focus:outline-none focus:border-b-2 focus:border-secondary-300 active:text-secondary-400 sm:pl-1 sm:text-xl"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              activeClassName="font-bold text-primary-500 hover:none"
              className="text-lg mr-2 py-2 px-1 text-primary-400 hover:border-b-2 hover:border-secondary-300 focus:outline-none focus:border-b-2 focus:border-secondary-300 active:text-secondary-400 sm:pr-0 sm:mr-0 sm:text-xl"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </div>
    <div class="flex flex-col sm:flex-row mt-1 sm:mt-0">
      <p class="mt-2 flex items-center text-sm leading-5 text-gray-500 sm:mr-4">
        <svg
          class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
        <span className="ml-1"> Serverless | React | Nodejs</span>
      </p>
      <p class="mt-2 flex items-center text-sm leading-5 text-gray-500">
        <svg
          class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clip-rule="evenodd"
          />
        </svg>
        <span className="ml-1">Manchester</span>
      </p>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
