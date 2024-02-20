import React from 'react'

import PropTypes from 'prop-types'

import './contact.css'

const Contact = (props) => {
  return (
    <div className="contact-contact">
      <div className="contact-depth5-frame1">
        <div className="contact-depth6-frame0">
          <img
            alt={props.depth7Frame0Alt}
            src={props.depth7Frame0Src}
            className="contact-depth7-frame0"
          />
        </div>
        <div className="contact-depth6-frame1">
          <img
            alt={props.depth7Frame0Alt1}
            src={props.depth7Frame0Src1}
            className="contact-depth7-frame01"
          />
        </div>
        <div className="contact-depth6-frame2">
          <img
            alt={props.depth7Frame0Alt2}
            src={props.depth7Frame0Src2}
            className="contact-depth7-frame02"
          />
        </div>
      </div>
      <div className="contact-depth5-frame2">
        <div className="contact-depth6-frame01">
          <span className="contact-text">{props.text}</span>
        </div>
      </div>
    </div>
  )
}

Contact.defaultProps = {
  depth7Frame0Src1: '/external/depth7frame03346-mi2n.svg',
  depth7Frame0Alt2: 'Depth7Frame03346',
  depth7Frame0Alt1: 'Depth7Frame03346',
  depth7Frame0Src: '/external/depth7frame03346-je9d.svg',
  depth7Frame0Alt: 'Depth7Frame03346',
  text: '© 2023 Campfy',
  depth7Frame0Src2: '/external/depth7frame03346-vpgl.svg',
}

Contact.propTypes = {
  depth7Frame0Src1: PropTypes.string,
  depth7Frame0Alt2: PropTypes.string,
  depth7Frame0Alt1: PropTypes.string,
  depth7Frame0Src: PropTypes.string,
  depth7Frame0Alt: PropTypes.string,
  text: PropTypes.string,
  depth7Frame0Src2: PropTypes.string,
}

export default Contact
