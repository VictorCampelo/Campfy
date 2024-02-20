import React from 'react'

import PropTypes from 'prop-types'

import './step-by-step.css'

const StepByStep = (props) => {
  return (
    <div className="step-by-step-step-by-step">
      <div className="step-by-step-depth4-frame3">
        <div className="step-by-step-depth5-frame0">
          <div className="step-by-step-depth6-frame0">
            <span className="step-by-step-text">{props.text}</span>
          </div>
          <div className="step-by-step-depth8-frame1">
            <div className="step-by-step-depth9-frame0">
              <span className="step-by-step-text01">{props.text1}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="step-by-step-depth4-frame4">
        <div className="step-by-step-depth5-frame01">
          <div className="step-by-step-depth6-frame01">
            <div className="step-by-step-depth7-frame0"></div>
          </div>
          <div className="step-by-step-depth6-frame1">
            <div className="step-by-step-depth7-frame01">
              <span className="step-by-step-text02">{props.text2}</span>
            </div>
            <div className="step-by-step-depth7-frame1">
              <span className="step-by-step-text03">{props.text3}</span>
            </div>
          </div>
        </div>
        <div className="step-by-step-depth5-frame02">
          <div className="step-by-step-depth6-frame02">
            <div className="step-by-step-depth7-frame02"></div>
          </div>
          <div className="step-by-step-depth6-frame11">
            <div className="step-by-step-depth7-frame03">
              <span className="step-by-step-text04">{props.text4}</span>
            </div>
            <div className="step-by-step-depth7-frame11">
              <span className="step-by-step-text05">{props.text5}</span>
            </div>
          </div>
        </div>
        <div className="step-by-step-depth5-frame03">
          <div className="step-by-step-depth6-frame03">
            <div className="step-by-step-depth7-frame04"></div>
          </div>
          <div className="step-by-step-depth6-frame12">
            <div className="step-by-step-depth7-frame05">
              <span className="step-by-step-text06">{props.text6}</span>
            </div>
            <div className="step-by-step-depth7-frame12">
              <span className="step-by-step-text07">{props.text7}</span>
            </div>
          </div>
        </div>
        <div className="step-by-step-depth5-frame04">
          <div className="step-by-step-depth6-frame04">
            <div className="step-by-step-depth7-frame06"></div>
          </div>
          <div className="step-by-step-depth6-frame13">
            <div className="step-by-step-depth7-frame07">
              <span className="step-by-step-text08">{props.text8}</span>
            </div>
            <div className="step-by-step-depth7-frame13">
              <span className="step-by-step-text09">{props.text9}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

StepByStep.defaultProps = {
  text6: 'Build',
  text5: 'Map out your project with a roadmap, task, and deadlines',
  text3: 'Braintorm and plan your project with a moodboard, notes, and more',
  text8: 'Launch',
  text4: 'Plan',
  text9: 'Get your project off the ground with template or form scratch',
  text1:
    "Our templates and guides can helo you get started, or build from scratch. Here's what you can expect from your project development process on Campfy.",
  text: 'A step-by-step guide to build your project',
  text2: 'Ideate',
  text7: 'Bring your project to live with no-code tools or custom code',
}

StepByStep.propTypes = {
  text6: PropTypes.string,
  text5: PropTypes.string,
  text3: PropTypes.string,
  text8: PropTypes.string,
  text4: PropTypes.string,
  text9: PropTypes.string,
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text7: PropTypes.string,
}

export default StepByStep
