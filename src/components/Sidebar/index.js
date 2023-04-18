import './index.scss'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faHome,
  faUser,
  faEnvelope,
  faComputer,
	faBars,
	faClose,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'

const Sidebar = () => {
	const [mobileNavBar, setMobileNavBar] = useState(false);

  return (
    <div className="nav-bar">
      <nav className={mobileNavBar ? 'show-mobile' : ''}>
        <NavLink exact="true" activeclassname="active" to="/" onClick={() => setMobileNavBar(false)}>
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" size="lg" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
					onClick={() => setMobileNavBar(false)}
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" size="lg" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
					onClick={() => setMobileNavBar(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" size="lg" />
        </NavLink>
        <NavLink
          exact="true"
          activeclassname="active"
          className="projects-link"
          to="/projects"
					onClick={() => setMobileNavBar(false)}
        >
          <FontAwesomeIcon icon={faComputer} color="#4d4d4e" size="lg" />
        </NavLink>
				<FontAwesomeIcon
					icon={faClose}
					className='hamburger-close'
					color='#00adb5'
					size='3x'
					onClick={() => setMobileNavBar(false)}
				/>
      </nav>
      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/brandon-sitz"
            className="linkedIn-link"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              color="#4d4d4e"
              size="2xl"
            ></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Brandon3522"
            className="github-link"
          >
            <FontAwesomeIcon
              icon={faGithub}
              color="#4d4d4e"
              size="2xl"
            ></FontAwesomeIcon>
          </a>
        </li>
      </ul>
			<FontAwesomeIcon
				icon={faBars}
				color='#00adb5'
				size='3x'
				onClick={() => setMobileNavBar(true)}
				className='hamburger-icon'		
			/>
    </div>
  )
}

export default Sidebar
