import './index.scss'
import LogoH from '../../assets/images/H-hweyz.png'
import LogoSubtitle from '../../assets/images/Text-hweyz.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faSkype,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react'
import Hamburger from 'hamburger-react'
import { useMediaQuery } from 'react-responsive'

const Sidebar = () => {
  const [isOpen, setOpen] = useState(false)
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 800px)' })
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoH} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="Hazem" />
      </Link>
      {isTabletOrMobile ? (
        <div>
          <nav className="hamburger">
            <Hamburger color="#264653" toggled={isOpen} toggle={setOpen} />
          </nav>
        </div>
      ) : (
        <></>
      )}

      {isOpen ? (
        <div className="miniNavBar">
          <nav>
            <NavLink activeclassname="active" exact="true" to="/">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
              className="about-link"
              activeclassname="active"
              to="/about"
            >
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
              className="contact-link"
              activeclassname="active"
              to="/contact"
            >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
            <a
              href="https://www.linkedin.com/in/hazem-fahad-414b4486/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-link"
            >
              <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
            </a>
            <a
              href="https://github.com/squarezy"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
            </a>
          </nav>
        </div>
      ) : (
        <></>
      )}
      {isTabletOrMobile ? (
        <></>
      ) : (
        <div>
          <nav>
            <NavLink exact="true" activeclassname="active" to="/">
              <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeclassname="active"
              className="about-link"
              to="/about"
            >
              <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink
              activeclassname="active"
              className="contact-link"
              to="/contact"
            >
              <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
          </nav>
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/slobodan-gaji%C4%87-006bb8b8/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/bobangajicsm"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
              </a>
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default Sidebar
