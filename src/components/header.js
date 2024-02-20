import React from 'react'

import PropTypes from 'prop-types'

import './header.css'

const Header = (props) => {
  return (
    <div className="header-header">
      <div className="header-container">
        <div className="header-depth4-frame0">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="header-image"
          />
        </div>
        <div className="header-depth3-frame0">
          <div className="header-depth3-frame1">
            <div className="header-depth4-frame01">
              <div className="header-depth5-frame0">
                <div className="header-depth6-frame0">
                  <span className="header-text">{props.text}</span>
                </div>
              </div>
              <div className="header-depth5-frame1">
                <div className="header-depth6-frame01">
                  <span className="header-text1">{props.text1}</span>
                </div>
              </div>
              <div className="header-depth5-frame2">
                <div className="header-depth6-frame02">
                  <span className="header-text2">{props.text2}</span>
                </div>
              </div>
              <div className="header-depth5-frame3">
                <div className="header-depth6-frame03">
                  <span className="header-text3">{props.text3}</span>
                </div>
              </div>
            </div>
            <div className="header-depth4-frame1">
              <div className="header-depth5-frame01">
                <div className="header-depth6-frame04">
                  <div className="header-depth7-frame0">
                    <span className="header-text4">
                      <span>Contact us</span>
                    </span>
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

Header.defaultProps = {
  imageSrc: '/external/campfy-name-200h.png',
  text3: 'Insights',
  imageAlt: 'image',
  text1: 'Cases',
  text: 'About',
  text2: 'Work',
}

Header.propTypes = {
  imageSrc: PropTypes.string,
  text3: PropTypes.string,
  imageAlt: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
}

export default Header
