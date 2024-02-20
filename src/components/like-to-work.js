import React from 'react'

import PropTypes from 'prop-types'

import './like-to-work.css'

const LikeToWork = (props) => {
  return (
    <div className="like-to-work-like-to-work">
      <div className="like-to-work-depth5-frame0">
        <div className="like-to-work-depth6-frame0">
          <div className="like-to-work-depth7-frame0">
            <div className="like-to-work-depth8-frame0">
              <div className="like-to-work-depth9-frame0">
                <span className="like-to-work-text">
                  <span>What it&apos;s like to work with Campfy</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="like-to-work-depth6-frame1">
          <div className="like-to-work-depth7-frame01">
            <div className="like-to-work-depth8-frame01">
              <img
                alt={props.depth9Frame0Alt}
                src={props.depth9Frame0Src}
                className="like-to-work-depth9-frame01"
              />
            </div>
            <div className="like-to-work-depth8-frame1">
              <div className="like-to-work-depth9-frame02">
                <div className="like-to-work-depth10-frame0">
                  <span className="like-to-work-text02">
                    <span>1. We&apos;re a partner, not a vendor</span>
                  </span>
                </div>
              </div>
              <div className="like-to-work-depth9-frame1">
                <div className="like-to-work-depth10-frame01">
                  <span className="like-to-work-text04">
                    <span>
                      We work with you to solve problems and build solutions,
                      not just to deliver code.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="like-to-work-depth7-frame1">
            <div className="like-to-work-depth8-frame02">
              <img
                alt={props.depth9Frame0Alt1}
                src={props.depth9Frame0Src1}
                className="like-to-work-depth9-frame03"
              />
            </div>
            <div className="like-to-work-depth8-frame11">
              <div className="like-to-work-depth9-frame04">
                <div className="like-to-work-depth10-frame02">
                  <span className="like-to-work-text06">
                    <span>2. Long-term relationships</span>
                  </span>
                </div>
              </div>
              <div className="like-to-work-depth9-frame11">
                <div className="like-to-work-depth10-frame03">
                  <span className="like-to-work-text08">
                    <span>
                      Our goal is to become your go-to team for all your product
                      needs.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="like-to-work-depth7-frame2">
            <div className="like-to-work-depth8-frame03">
              <img
                alt={props.depth9Frame0Alt2}
                src={props.depth9Frame0Src2}
                className="like-to-work-depth9-frame05"
              />
            </div>
            <div className="like-to-work-depth8-frame12">
              <div className="like-to-work-depth9-frame06">
                <div className="like-to-work-depth10-frame04">
                  <span className="like-to-work-text10">
                    <span>3. A team of experts</span>
                  </span>
                </div>
              </div>
              <div className="like-to-work-depth9-frame12">
                <div className="like-to-work-depth10-frame05">
                  <span className="like-to-work-text12">
                    <span>
                      You&apos;ll work with a team of experienced engineers,
                      designers, and product managers.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

LikeToWork.defaultProps = {
  depth9Frame0Src2: '/external/depth9frame03345-vag.svg',
  depth9Frame0Src1: '/external/depth9frame03345-fxsf.svg',
  depth9Frame0Alt: 'Depth9Frame03345',
  depth9Frame0Alt2: 'Depth9Frame03345',
  depth9Frame0Src: '/external/depth9frame03345-vt6p.svg',
  depth9Frame0Alt1: 'Depth9Frame03345',
}

LikeToWork.propTypes = {
  depth9Frame0Src2: PropTypes.string,
  depth9Frame0Src1: PropTypes.string,
  depth9Frame0Alt: PropTypes.string,
  depth9Frame0Alt2: PropTypes.string,
  depth9Frame0Src: PropTypes.string,
  depth9Frame0Alt1: PropTypes.string,
}

export default LikeToWork
