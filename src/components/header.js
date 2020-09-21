import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header className="py-2 sm:py-4">
    <div className="flex flex-row justify-between items-center">
      <div>
        <h1 className="text-2xl text-primary-700 font-semibold">
          <Link
            to="/"
            className="hover:text-secondary-500 focus:outline-none focus:text-secondary-500 active:text-secondary-300 sm:text-3xl"
          >
            Daryl Carr
          </Link>
        </h1>
      </div>
      {/* <nav>
        <ul className="flex pt-2">
          <li>
            <Link
              to="/about"
              activeClassName="font-bold text-primary-600"
              className="mr-2 py-2 px-1 pl-0 text-primary-500 hover:border-b-2 hover:border-secondary-400 focus:outline-none focus:border-b-2 focus:border-secondary-400 active:text-secondary-400 sm:pl-1 sm:text-xl"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/blog"
              activeClassName="font-bold text-primary-500 hover:none"
              className="mr-2 py-2 px-1 text-primary-400 hover:border-b-2 hover:border-secondary-300 focus:outline-none focus:border-b-2 focus:border-secondary-300 active:text-secondary-400 sm:pr-0 sm:mr-0 sm:text-xl"
            >
              Blog
            </Link>
          </li>
        </ul>
      </nav> */}
      <div className="text-gray-500">
        <a
          href="https://twitter.com/darylcodes"
          className="hover:text-twitter focus:text-twitter focus:outline-none"
        >
          <span className="sr-only">Twitter</span>
          <svg aria-hidden="true" className="w-6 h-6" fill="currentColor">
            <path d="M24 4.557a9.83 9.83 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195 4.916 4.916 0 00-3.594-1.555c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 3.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 4.557z" />
          </svg>
        </a>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row mt-1 sm:mt-0">
      <p className="mt-2 flex items-center text-sm leading-5 text-gray-700 sm:mr-4">
        <svg
          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
        </svg>
        <span className="ml-1"> Serverless | React | Nodejs </span>
      </p>
      <p className="mt-2 flex items-center text-sm leading-5 text-gray-700">
        <svg
          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
            clipRule="evenodd"
          />
        </svg>
        <span className="ml-1">Manchester, UK</span>
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
