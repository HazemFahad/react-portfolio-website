import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import { useMediaQuery } from 'react-responsive'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      {isTabletOrMobile ? (
        <></>
      ) : (
        <div className="container about-page">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              Steve Jobs said when building something “For you to sleep well at
              night, the aesthetic, the quality, has to be carried all the way
              through” – I was inspired by this philosophy, and I do everything
              in life to the very best of my ability.
            </p>
            <p align="LEFT">
              I have watched home-computing and mobile phones grow from its
              infancy and have always been hugely interested in it. One of my
              earliest memories is digging through the files of my father’s
              (very expensive) work PC and deleting random files until I caused
              an irreversible system error.
            </p>
            <p>
              Since then, some of my prouder moments include being part of a
              team which gave Anti-Bullying lectures at primary schools, leading
              a 5-a-side football team to win a local competition and making
              lots of new friends wherever I have worked.
            </p>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
        </div>
      )}
      {isTabletOrMobile ? (
        <div className="container  about-page">
          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              Steve Jobs said when building something “For you to sleep well at
              night, the aesthetic, the quality, has to be carried all the way
              through” – I was inspired by this philosophy, and I do everything
              in life to the very best of my ability.
            </p>
            <p align="LEFT">
              I have watched home-computing and mobile phones grow from its
              infancy and have always been hugely interested in it. One of my
              earliest memories is digging through the files of my father’s
              (very expensive) work PC and deleting random files until I caused
              an irreversible system error.
            </p>
            <p>
              Since then, some of my prouder moments include being part of a
              team which gave Anti-Bullying lectures at primary schools, leading
              a 5-a-side football team to win a local competition and making
              lots of new friends wherever I have worked.
            </p>
            <br />
          </div>
        </div>
      ) : (
        <></>
      )}
      <Loader type="square-spin" />
    </>
  )
}

export default About
