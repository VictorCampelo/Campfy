import React from 'react'

import PropTypes from 'prop-types'

import './hero.css'

const Hero = (props) => {
  return (
    <div className="hero-hero">
      <div className="hero-depth6-frame0">
        <div className="hero-depth7-frame0">
          <div className="hero-message">
            <div className="hero-depth9-frame0">
              <div className="hero-depth10-frame0">
                <div className="hero-depth11-frame0">
                  <span className="hero-text">
                    <span className="hero-text1">
                      Let&apos;s build something great together
                    </span>
                    <br></br>
                  </span>
                </div>
                <div className="hero-container">
                  <span className="hero-text3">{props.text}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="hero-container1">
            <div className="hero-depth10-frame01">
              <div className="hero-depth11-frame01">
                <img
                  alt={props.depth12Frame0Alt}
                  src={props.depth12Frame0Src}
                  className="hero-depth12-frame0"
                />
              </div>
              <div className="hero-depth11-frame1">
                <div className="hero-depth12-frame01">
                  <span className="hero-text4">
                    <span>Your email</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="hero-depth9-frame01">
              <div className="hero-depth10-frame1">
                <div className="hero-depth11-frame02">
                  <div className="hero-depth12-frame02">
                    <div className="hero-depth13-frame0">
                      <span className="hero-text6">
                        <span>Get in touch</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Hero.defaultProps = {
  depth12Frame0Alt: 'Depth12Frame03345',
  text: 'We build the web and mobile apps you need, without writing a single line of code. No matter the industry or scale, we make sure your product is built with the highest standard.',
  depth12Frame0Src: '/external/depth12frame03345-vibs.svg',
}

Hero.propTypes = {
  depth12Frame0Alt: PropTypes.string,
  text: PropTypes.string,
  depth12Frame0Src: PropTypes.string,
}

export default Hero
