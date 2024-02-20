import React from 'react'

import PropTypes from 'prop-types'

import './why.css'

const Why = (props) => {
  return (
    <div className="why-why">
      <div className="why-main">
        <div className="why-content">
          <div className="why-title">
            <div className="why-depth9-frame0">
              <span className="why-text">
                <span>Why choose Campfy?</span>
              </span>
            </div>
          </div>
          <div className="why-description">
            <div className="why-depth9-frame01">
              <span className="why-text2">{props.text}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Why.defaultProps = {
  text: 'We’re a no-code development agency that builds custom web and mobile apps for startups and small businesses. Our team of experts uses the latest no-code tools to create high-quality products at lightning speed.',
}

Why.propTypes = {
  text: PropTypes.string,
}

export default Why
