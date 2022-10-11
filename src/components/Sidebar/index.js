import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope, faComputer } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" size='lg' />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" size='lg' />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" size='lg' />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="projects-link"
        to="/projects"
      >
        <FontAwesomeIcon icon={faComputer} color="#4d4d4e" size='lg' />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Brandon3522"
          className='github-link'
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4e" size='2xl'></FontAwesomeIcon>
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
