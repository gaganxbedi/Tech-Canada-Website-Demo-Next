import React from 'react'

import PropTypes from 'prop-types'

const FeatureCard = (props) => {
  return (
    <>
      <div className={`card ${props.rootClassName} `}>
        <img alt={props.image_alt} src={props.image_src} className="image" />
        <h4 className="text">{props.heading}</h4>
        <span className="text1 content-Light">{props.text}</span>
      </div>
      <style jsx>
        {`
          .card {
            flex: 0 0 auto;
            width: 229px;
            height: 310px;
            display: flex;
            padding: var(--dl-space-space-oneandhalfunits);
            max-width: 285px;
            transition: 0.3s;
            align-items: center;
            padding-top: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-halfunit);
            padding-right: var(--dl-space-space-halfunit);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-halfunit);
            justify-content: flex-start;
          }
          .card:hover {
            border-radius: 14px;
            justify-content: flex-start;
            background-color: #ffffff;
          }
          .image {
            width: 75px;
            height: 75px;
            object-fit: cover;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .text {
            color: var(--dl-color-grays-black100);
            font-size: 22px;
            font-style: normal;
            text-align: center;
            font-family: Lexend;
            font-weight: 500;
            line-height: 1.2;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: none;
            text-decoration: none;
          }
          .text1 {
            color: var(--dl-color-grays-gray100);
            text-align: center;
            margin-bottom: 0px;
          }
          .rootClassName {
            align-self: center;
          }
          .rootClassName1 {
            align-self: center;
          }
          .rootClassName2 {
            align-self: center;
          }
          .rootClassName3 {
            align-self: center;
          }
          .rootClassName4 {
            align-self: center;
          }
          @media (max-width: 767px) {
            .card {
              width: 50%;
            }
          }
          @media (max-width: 479px) {
            .card {
              width: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

FeatureCard.defaultProps = {
  rootClassName: '',
  text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  heading: 'Search for ideas',
  image_alt: 'image',
  image_src: 'https://play.teleporthq.io/static/svg/default-img.svg',
}

FeatureCard.propTypes = {
  rootClassName: PropTypes.string,
  text: PropTypes.string,
  heading: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
}

export default FeatureCard
