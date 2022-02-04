import React from 'react'
import Link from 'next/link'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`nav ${props.rootClassName} `}>
        <Link href="/">
          <a className="link navbar-link">{props.text}</a>
        </Link>
        <Link href="/">
          <a className="link1 navbar-link">{props.text1}</a>
        </Link>
        <span className="text navbar-link">{props.text2}</span>
        <span className="text1 navbar-link">{props.text3}</span>
        <span className="text2 navbar-link">{props.text4}</span>
      </nav>
      <style jsx>
        {`
          .nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .link {
            text-decoration: none;
          }
          .link1 {
            margin-left: var(--dl-space-space-twounits);
            text-decoration: none;
          }
          .text {
            margin-left: var(--dl-space-space-twounits);
          }
          .text1 {
            margin-left: var(--dl-space-space-twounits);
          }
          .text2 {
            margin-left: var(--dl-space-space-twounits);
          }

          @media (max-width: 767px) {
            .nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .link1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  text2: 'Repair Services',
  text3: 'Shop',
  rootClassName: '',
  text4: 'Refund & Policy',
  text: 'Home',
  text1: 'Digital Marketing',
}

NavigationLinks.propTypes = {
  text2: PropTypes.string,
  text3: PropTypes.string,
  rootClassName: PropTypes.string,
  text4: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
}

export default NavigationLinks
