import React from 'react'
import Head from 'next/head'

import Navbar from '../components/navbar'
import FeatureCard from '../components/feature-card'
import GridCard from '../components/grid-card'
import Footer from '../components/footer'
import Copyright from '../components/copyright'

const Home = () => {
  return (
    <>
      <div className="container">
        <Head>
          <title> Tech Solutions Canada</title>
          <meta
            name="description"
            content="Providing Best in Class managed IT services and investing in our own infrastructure to support our client needs. SEO services, Digital marketing services"
          />
          <meta property="og:title" content=" Tech Solutions Canada" />
          <meta
            property="og:description"
            content="Providing Best in Class managed IT services and investing in our own infrastructure to support our client needs. website development , SEO services, digital marketing services."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/91a29855-2c4e-4c71-bbaf-8972058ca366/7081df2a-6884-43e5-a06f-7d0c4a25d685?org_if_sml=1"
          />
        </Head>
        <Navbar></Navbar>
        <main className="main">
          <div className="section-container hero">
            <div className="max-width max-content-container">
              <div className="content-container">
                <h1 className="text heading1">
                  <span>
                    The
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="text02">All-In-One</span>
                  <span> digital marketing Platform for Small Busine</span>
                  <span className="text04"></span>
                  <span>ss</span>
                  <span className="text06">es</span>
                </h1>
                <div className="input-container">
                  <div className="container1 input">
                    <svg viewBox="0 0 804.5714285714286 1024" className="icon">
                      <path d="M804.571 708.571c0 20.571-9.143 60.571-17.714 79.429-12 28-44 46.286-69.714 60.571-33.714 18.286-68 29.143-106.286 29.143-53.143 0-101.143-21.714-149.714-39.429-34.857-12.571-68.571-28-100-47.429-97.143-60-214.286-177.143-274.286-274.286-19.429-31.429-34.857-65.143-47.429-100-17.714-48.571-39.429-96.571-39.429-149.714 0-38.286 10.857-72.571 29.143-106.286 14.286-25.714 32.571-57.714 60.571-69.714 18.857-8.571 58.857-17.714 79.429-17.714 4 0 8 0 12 1.714 12 4 24.571 32 30.286 43.429 18.286 32.571 36 65.714 54.857 97.714 9.143 14.857 26.286 33.143 26.286 50.857 0 34.857-103.429 85.714-103.429 116.571 0 15.429 14.286 35.429 22.286 49.143 57.714 104 129.714 176 233.714 233.714 13.714 8 33.714 22.286 49.143 22.286 30.857 0 81.714-103.429 116.571-103.429 17.714 0 36 17.143 50.857 26.286 32 18.857 65.143 36.571 97.714 54.857 11.429 5.714 39.429 18.286 43.429 30.286 1.714 4 1.714 8 1.714 12z"></path>
                    </svg>
                    <input
                      type="text"
                      placeholder="Your phone number..."
                      className="textinput input"
                    />
                  </div>
                  <button className="button button-primary">
                    Get in Touch
                  </button>
                </div>
                <div className="features-container">
                  <div className="feature">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="icon02"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="text07">5 Years of Experience</span>
                  </div>
                  <div className="feature1">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="icon04"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="text08">2K Happy Customers</span>
                  </div>
                  <div className="feature2">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="icon06"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="text09">
                      <span>
                        100%
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <span>Clients Satisfaction</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="image-container">
                <img
                  alt="image"
                  src="/playground_assets/hero%20photo-600h.png"
                  className="image"
                />
              </div>
            </div>
          </div>
          <div className="section-one section-container">
            <div className="max-width1 max-content-container">
              <h2 className="text12 heading2">
                <span></span>
                <span>
                  Everything you need to help
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="text15">Grow your business</span>
                <span> from one platform &amp; one team.</span>
              </h2>
              <span className="text17">
                <span className="text18">Why Choose Us ?</span>
              </span>
              <div className="cards-container">
                <FeatureCard
                  text="We can work with almost any size budget and will help formulate a plan that makes the best use of the budget you have"
                  heading="Weâre Affordable"
                  image_src="/playground_assets/moeny-200h.png"
                  rootClassName="rootClassName"
                ></FeatureCard>
                <FeatureCard
                  text="We are a long-standing Premier Google Partner &amp; therefore highly recommended by Google. "
                  text1="See how &gt;"
                  heading="Recommended by Google"
                  image_src="/playground_assets/google__g__logo.svg-200h.png"
                  rootClassName="rootClassName1"
                ></FeatureCard>
                <FeatureCard
                  text="Weâre an official Facebook Marketing Partner! Providing one of the best small business marketing solutions."
                  text1="Learn more &gt;"
                  heading="Loved by             \nFacebook"
                  image_src="/playground_assets/asset%201.svg"
                  rootClassName="rootClassName2"
                ></FeatureCard>
                <FeatureCard
                  text="Our mission is to help small businesses grow. Everything we do is with that mission in mind."
                  text1="Learn more &gt;"
                  heading="We Love Small Business"
                  image_src="/playground_assets/mail-200h.png"
                  rootClassName="rootClassName3"
                ></FeatureCard>
                <FeatureCard
                  text="weâre constantly reassessing our products, features, marketing channels &amp; more to help you grow your business."
                  text1="Learn more &gt;"
                  heading="Weâre Always Innovating"
                  image_src="/playground_assets/chart-increasing-emoji-by-twitter-200h.png"
                  rootClassName="rootClassName4"
                ></FeatureCard>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="max-width2 max-content-container">
              <div className="image-container1">
                <img
                  alt="image"
                  src="/playground_assets/hero%2021-1200w.png"
                  className="image1"
                />
              </div>
              <div className="content-container1">
                <h1 className="text19 heading2">
                  <span>
                    The best part is, we do
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="text21">Everything</span>
                  <span>
                    {' '}
                    for you
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </h1>
                <span className="text23">
                  <span>
                    Get the tools you need to help market and grow your business
                    along with a dedicated social media marketing team who does
                    everything for you.
                  </span>
                  <br></br>
                  <span></span>
                </span>
              </div>
            </div>
          </div>
          <div className="section-container">
            <div className="max-width3 max-content-container">
              <div className="heading-container">
                <h2 className="text27 heading2">
                  <span>
                    Dedicated Marketing Experts
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </h2>
                <span className="content-Light">
                  <span>
                    This allows you to focus on running your business while we
                    focus on driving you business.
                  </span>
                </span>
              </div>
              <div className="cards-container1">
                <GridCard
                  text="Social Media Manager"
                  text1="Get your own dedicated social media manager! Theyâll help you get more followers, post-share-worthy content, monitor comments &amp; more so your business has a strong presence on social media."
                  image_src="/playground_assets/vector%203-200h.png"
                ></GridCard>
                <GridCard
                  text="Creative Team"
                  text1="Leverage highly skilled designers, developers, video pros, and content writers on-demand to create what you need when you need it. Save money by avoiding an expensive, in-house team."
                  image_src="/playground_assets/vector%203%20%5B1%5D-200h.png"
                ></GridCard>
              </div>
            </div>
          </div>
          <div className="section-six section-container">
            <div className="max-width4 max-content-container">
              <div className="content-container2">
                <h1 className="text31 heading2">
                  <span className="text32">Contact</span>
                </h1>
                <span className="text33">Info@techsolutionscanada.com</span>
                <div className="features-container1">
                  <div className="feature3">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="icon08"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="text34">
                      Everything you need to compete and win online.
                    </span>
                  </div>
                  <div className="feature4">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="icon10"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="text35">
                      Highest standard digital marketing services
                    </span>
                  </div>
                  <div className="feature5">
                    <svg
                      viewBox="0 0 877.7142857142857 1024"
                      className="icon12"
                    >
                      <path d="M733.714 419.429c0-9.714-3.429-19.429-10.286-26.286l-52-51.429c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-233.143 232.571-129.143-129.143c-6.857-6.857-16-10.857-25.714-10.857s-18.857 4-25.714 10.857l-52 51.429c-6.857 6.857-10.286 16.571-10.286 26.286s3.429 18.857 10.286 25.714l206.857 206.857c6.857 6.857 16.571 10.857 25.714 10.857 9.714 0 19.429-4 26.286-10.857l310.286-310.286c6.857-6.857 10.286-16 10.286-25.714zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                    </svg>
                    <span className="text36">
                      Over 2000, highly recommended customer reviews.
                    </span>
                  </div>
                </div>
                <div className="container2">
                  <img
                    alt="image"
                    src="/playground_assets/fbp-badge-200h.png"
                    className="image2"
                  />
                  <img
                    alt="image"
                    src="/playground_assets/google-premier-partner-icon-200h.png"
                    className="image3"
                  />
                </div>
              </div>
              <div className="image-container2">
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1252.7372223562243!2d-113.977554!3d51.099706!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53716485888fdf27%3A0x5e3143d1fe838f4f!2s3961%2052%20Ave%20NE%20%231117%2C%20Calgary%2C%20AB%20T3J%200J7%2C%20Canada!5e0!3m2!1sen!2sus!4v1643974143431!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"'
                  className="iframe"
                ></iframe>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
        <Copyright></Copyright>
      </div>
      <style jsx>
        {`
          .container {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            justify-content: flex-start;
            background-color: var(--dl-color-backgrounds-gray);
          }
          .main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
          }
          .max-width {
            height: 488px;
            align-items: stretch;
          }
          .content-container {
            flex: 1;
            display: flex;
            min-width: 50%;
            align-items: flex-start;
            padding-right: var(--dl-space-space-twounits);
            flex-direction: column;
            justify-content: center;
          }
          .text {
            width: 90%;
            margin-bottom: 42px;
          }
          .text02 {
            color: var(--dl-color-backgrounds-primary);
          }
          .text04 {
            color: var(--dl-color-grays-dark100);
          }
          .text06 {
            color: var(--dl-color-grays-dark100);
          }
          .input-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: row;
          }
          .container1 {
            width: 100%;
            height: 56px;
            display: flex;
            max-width: 376px;
            align-items: center;
            line-height: 1.5;
            padding-top: var(--dl-space-space-unit);
            border-width: 0px;
            margin-right: var(--dl-space-space-halfunit);
            padding-left: var(--dl-space-space-oneandhalfunits);
            border-radius: 32px;
            padding-right: var(--dl-space-space-oneandhalfunits);
            padding-bottom: var(--dl-space-space-unit);
          }
          .icon {
            fill: var(--dl-color-grays-gray40);
            width: 20px;
            height: 20px;
          }
          .textinput {
            flex: 1;
            color: var(--dl-color-grays-gray40);
            border-width: 0px;
            padding-left: 12px;
            padding-right: 12px;
          }
          .button {
            display: flex;
            align-items: center;
            line-height: 1;
            padding-top: 20px;
            white-space: nowrap;
            padding-left: 32px;
            padding-right: 32px;
            padding-bottom: 20px;
            justify-content: center;
          }
          .features-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .feature {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .icon02 {
            fill: #62BF77;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .text07 {
            color: var(--dl-color-grays-gray60);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .feature1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .icon04 {
            fill: #62BF77;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .text08 {
            color: var(--dl-color-grays-gray60);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .feature2 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .icon06 {
            fill: #62BF77;
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .text09 {
            color: var(--dl-color-grays-gray60);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .image-container {
            flex: 1;
            width: 620px;
            height: 493px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .image {
            width: 600px;
            height: 506px;
            max-width: 589px;
            object-fit: cover;
            margin-left: var(--dl-space-space-unit);
          }
          .section-one {
            border-color: rgba(33, 33, 33, 0.1);
            border-width: 1px;
            border-top-width: 0px;
            border-left-width: 0px;
            border-right-width: 0px;
          }
          .max-width1 {
            flex-direction: column;
          }
          .text12 {
            text-align: center;
            margin-bottom: var(--dl-space-space-unit);
          }
          .text15 {
            color: var(--dl-color-backgrounds-primary);
          }
          .text17 {
            color: var(--dl-color-grays-gray60);
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .text18 {
            color: var(--dl-color-grays-gray100);
            font-style: normal;
            font-weight: 600;
          }
          .cards-container {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: row;
            justify-content: center;
          }
          .max-width2 {
            flex-direction: row;
            justify-content: flex-start;
          }
          .image-container1 {
            flex: 1;
            margin-right: var(--dl-space-space-oneandhalfunits);
          }
          .image1 {
            width: 100%;
            max-width: 640px;
            object-fit: cover;
            margin-left: -100px;
          }
          .content-container1 {
            flex: 1;
            display: flex;
            max-width: 446px;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .text19 {
            margin-bottom: 24px;
          }
          .text21 {
            color: var(--dl-color-backgrounds-primary);
          }
          .text23 {
            color: var(--dl-color-grays-gray100);
            font-size: 16px;
            font-style: normal;
            font-family: Lexend;
            font-weight: 300;
            line-height: 1.3;
            text-transform: none;
            text-decoration: none;
          }
          .max-width3 {
            flex-direction: column;
            justify-content: center;
          }
          .heading-container {
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .text27 {
            text-align: center;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .cards-container1 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr;
          }
          .section-six {
            height: 607px;
            padding-top: var(--dl-space-space-threeunits);
            padding-bottom: 0px;
            background-color: var(--dl-color-backgrounds-primary);
          }
          .max-width4 {
            height: 505px;
            align-items: stretch;
          }
          .content-container2 {
            flex: 1;
            display: flex;
            min-width: 60%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .text31 {
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .text32 {
            color: var(--dl-color-grays-white100);
          }
          .text33 {
            color: #ffffff;
            font-size: 24px;
            font-family: Lexend;
            line-height: 1.3;
            margin-bottom: 36px;
            text-transform: none;
            text-decoration: none;
          }
          .features-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .feature3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .icon08 {
            fill: var(--dl-color-grays-white100);
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .text34 {
            color: var(--dl-color-grays-white80);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .feature4 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            flex-direction: row;
          }
          .icon10 {
            fill: var(--dl-color-grays-white100);
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .text35 {
            color: var(--dl-color-grays-white80);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .feature5 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .icon12 {
            fill: var(--dl-color-grays-white100);
            width: 17px;
            height: 17px;
            min-width: 17px;
            margin-right: 12px;
          }
          .text36 {
            color: var(--dl-color-grays-white80);
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
          }
          .container2 {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: flex-start;
          }
          .image2 {
            width: 100px;
            object-fit: cover;
            margin-right: var(--dl-space-space-twounits);
          }
          .image3 {
            width: 134px;
            height: 49px;
            object-fit: cover;
            margin-right: var(--dl-space-space-twounits);
          }
          .image-container2 {
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            align-items: flex-start;
            border-radius: var(--dl-radius-radius-radius2);
            flex-direction: column;
          }
          .iframe {
            width: 445px;
            height: 540px;
            box-shadow: 5px 5px 25px 0px rgba(255, 255, 255, 0.16);
            border-radius: 16px;
          }
          @media (max-width: 991px) {
            .max-width {
              flex-direction: column;
            }
            .content-container {
              margin-bottom: 42px;
              padding-right: 0px;
            }
            .text {
              width: 100%;
            }
            .image {
              max-width: 100%;
              margin-left: 0px;
            }
            .image1 {
              max-width: 100%;
              margin-left: 0px;
            }
            .content-container1 {
              margin-bottom: 42px;
              padding-right: 0px;
            }
            .text19 {
              width: 100%;
            }
            .max-width4 {
              flex-direction: column;
            }
            .text31 {
              width: 100%;
            }
          }
          @media (max-width: 767px) {
            .hero {
              height: 1038px;
            }
            .text12 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .cards-container {
              flex-wrap: wrap;
              justify-content: space-between;
            }
            .max-width2 {
              flex-direction: column;
            }
            .image-container1 {
              width: 100%;
              margin-right: 0px;
            }
            .image1 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .content-container1 {
              max-width: 100%;
            }
            .text27 {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .cards-container1 {
              grid-template-columns: 1fr;
            }
          }
          @media (max-width: 479px) {
            .hero {
              height: 1269px;
            }
            .input-container {
              flex-direction: column;
            }
            .container1 {
              max-width: 100%;
              margin-bottom: var(--dl-space-space-unit);
            }
            .cards-container {
              justify-content: center;
            }
            .section-six {
              height: 1014px;
            }
            .content-container2 {
              margin-bottom: var(--dl-space-space-twounits);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
