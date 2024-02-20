import React from 'react'

import { Helmet } from 'react-helmet'

import Hero from '../components/hero'
import Why from '../components/why'
import StudyCase from '../components/study-case'
import Tech from '../components/tech'
import StepByStep from '../components/step-by-step'
import LikeToWork from '../components/like-to-work'
import Ready from '../components/ready'
import Contact from '../components/contact'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Campfy</title>
        <meta property="og:title" content="Campfy" />
      </Helmet>
      <div className="home-core">
        <div className="home-header">
          <div className="home-container1">
            <div className="home-depth4-frame0">
              <img
                alt="image"
                src="/external/campfy-name-200h.png"
                className="home-image"
              />
            </div>
            <div className="home-depth3-frame0">
              <div className="home-depth3-frame1">
                <div className="home-depth4-frame01">
                  <div className="home-depth5-frame0">
                    <div className="home-depth6-frame0">
                      <span className="home-text">About</span>
                    </div>
                  </div>
                  <div className="home-depth5-frame1">
                    <div className="home-depth6-frame01">
                      <span className="home-text1">Cases</span>
                    </div>
                  </div>
                  <div className="home-depth5-frame2">
                    <div className="home-depth6-frame02">
                      <span className="home-text2">Work</span>
                    </div>
                  </div>
                  <div className="home-depth5-frame3">
                    <div className="home-depth6-frame03">
                      <span className="home-text3">Insights</span>
                    </div>
                  </div>
                </div>
                <div className="home-depth4-frame1">
                  <div className="home-depth5-frame01">
                    <div className="home-depth6-frame04">
                      <div className="home-depth7-frame0">
                        <span className="home-text4">
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
        <div className="home-body">
          <div className="home-content">
            <Hero></Hero>
            <div className="home-container2">
              <Why></Why>
              <StudyCase></StudyCase>
              <Tech></Tech>
              <StepByStep></StepByStep>
              <LikeToWork></LikeToWork>
              <Ready></Ready>
              <Contact></Contact>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
