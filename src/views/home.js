import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
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
        <Header></Header>
        <div className="home-body">
          <div className="home-content">
            <Hero></Hero>
            <div className="home-container1">
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
