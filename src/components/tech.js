import React from 'react'

import PropTypes from 'prop-types'

import './tech.css'

const Tech = (props) => {
  return (
    <div className="tech-tech">
      <div className="tech-depth5-frame0">
        <div className="tech-depth6-frame0">
          <div className="tech-depth7-frame0">
            <div className="tech-depth8-frame0">
              <div className="tech-depth9-frame0">
                <span className="tech-text">
                  <span>Our technology focus</span>
                </span>
              </div>
            </div>
            <div className="tech-depth8-frame1">
              <div className="tech-depth9-frame01">
                <span className="tech-text02">
                  <span>
                    The no-code landscape is vast and diverse, with a wide range
                    of tools and platforms available for different use cases. At
                    Campfy, we have deep expertise in a variety of no-code
                    technologies, allowing us to choose the best tools for each
                    project based on its unique requirements. Here are some of
                    the key no-code platforms we work with:
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="tech-depth6-frame1">
          <div className="tech-depth7-frame01">
            <div className="tech-depth8-frame11">
              <div className="tech-depth9-frame02">
                <div className="tech-depth10-frame0">
                  <span className="tech-text04">{props.text}</span>
                </div>
              </div>
              <div className="tech-depth9-frame1">
                <div className="tech-depth10-frame001">
                  <span className="tech-text05">
                    <span>
                      Webflow is a powerful website builder that allows for
                      complex designs and interactions.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-depth7-frame1">
            <div className="tech-depth8-frame12">
              <div className="tech-depth9-frame03">
                <div className="tech-depth10-frame002">
                  <span className="tech-text07">
                    <span>Bubble</span>
                  </span>
                </div>
              </div>
              <div className="tech-depth9-frame11">
                <div className="tech-depth10-frame003">
                  <span className="tech-text09">
                    <span>
                      Bubble is a robust no-code platform for building web
                      applications with logic and databases.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-depth7-frame2">
            <div className="tech-depth8-frame13">
              <div className="tech-depth9-frame04">
                <div className="tech-depth10-frame004">
                  <span className="tech-text11">
                    <span>Adalo</span>
                  </span>
                </div>
              </div>
              <div className="tech-depth9-frame12">
                <div className="tech-depth10-frame005">
                  <span className="tech-text13">
                    <span>
                      Adalo is a platform for building mobile and web apps, with
                      a focus on simplicity and speed.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-depth7-frame3">
            <div className="tech-depth8-frame14">
              <div className="tech-depth9-frame05">
                <div className="tech-depth10-frame006">
                  <span className="tech-text15">
                    <span>Glide</span>
                  </span>
                </div>
              </div>
              <div className="tech-depth9-frame13">
                <div className="tech-depth10-frame007">
                  <span className="tech-text17">
                    <span>
                      Glide is a tool for creating mobile apps from Google
                      Sheets, with a strong emphasis on ease of use.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="tech-depth7-frame5">
            <div className="tech-depth8-frame15">
              <div className="tech-depth9-frame06">
                <div className="tech-depth10-frame008">
                  <span className="tech-text19">
                    <span>Softr</span>
                  </span>
                </div>
              </div>
              <div className="tech-depth9-frame14">
                <div className="tech-depth10-frame009">
                  <span className="tech-text21">
                    <span>
                      Softr is a no-code platform for building web apps and
                      member sites, with a range of templates and features.
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

Tech.defaultProps = {
  text: 'Webflow',
}

Tech.propTypes = {
  text: PropTypes.string,
}

export default Tech
