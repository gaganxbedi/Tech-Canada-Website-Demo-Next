import React from 'react'

const Copyright = () => {
  return (
    <>
      <div className="copyright">
        <div className="max-width max-content-container">
          <span className="text">
            <span className="text1"></span>
            <span className="text2">
              Â© 2022 All rights reserved
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <a
              href="https://techsolutionscanada.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="text3">@techsolutionscanada</span>
            </a>
            <a
              href="https://www.vercel.com"
              target="_blank"
              rel="noreferrer noopener"
            ></a>
            <a
              href="https://www.unsplash.com"
              target="_blank"
              rel="noreferrer noopener"
            ></a>
          </span>
        </div>
      </div>
      <style jsx>
        {`
          .copyright {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-twounits);
          }
          .max-width {
            align-items: stretch;
          }
          .text {
            color: var(--dl-color-grays-gray100);
            font-size: 14px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.5;
          }
          .text1 {
            font-style: normal;
            font-weight: 300;
            text-decoration: underline;
          }
          .text2 {
            font-style: normal;
            font-weight: 300;
          }
          .text3 {
            font-style: normal;
            font-weight: 300;
            text-decoration: underline;
          }
          @media (max-width: 991px) {
            .max-width {
              flex-direction: column;
            }
          }
        `}
      </style>
    </>
  )
}

export default Copyright
