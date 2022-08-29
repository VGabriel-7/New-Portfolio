import React from 'react';
import { Link } from 'react-router-dom';
import instagramIcon from '../images/instagram_f_icon-icons.com_65485.svg';
import linkedinIcon from '../images/linkedin-logo_icon-icons.com_57120.svg';
import gitHubIcon from '../images/github-logo_icon-icons.com_73546.svg';
import whatsappIcon from '../images/whatsapp-logo_icon-icons.com_57054.svg';
import '../css/StyleAsideBar.css';

export default function AsideBar() {
  return (
    <aside
      className="asideBar"
    >
      <nav
        className="sectionNav"
      >
        <Link to="/home" className="Link">
          <span class="material-icons material-icons-outlined">
            home
          </span>
        </Link>
        <Link to="/about" className="Link">
          <span class="material-icons material-icons-outlined">
            info
          </span>
        </Link>
        <Link to="/projects" className="Link">
          <span class="material-icons material-icons-outlined">
            construction
          </span>
        </Link>
        <Link to="/projects" className="Link">
          <span class="material-icons material-icons-outlined">
            email
          </span>
        </Link>
      </nav>
      <section
        className="sectionContact"
      >
        <a
          href="https://github.com/VGabriel-7"
          target="_blank"
          rel="noreferrer"
          className="Link"
        >
          <img
            src={ gitHubIcon }
            alt="linkedin icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-055a65220/"
          target="_blank"
          rel="noreferrer"
          className="Link"
        >
          <img
            src={ linkedinIcon }
            alt="linkedin icon"
          />
        </a>
        <a
          href="https://github.com/VGabriel-7"
          target="_blank"
          rel="noreferrer"
          className="Link"
        >
          <img
            src={ whatsappIcon }
            alt="whatsapp icon"
          />
        </a>
        <a
          href="https://www.instagram.com/gabriel_alm7/"
          target="_blank"
          rel="noreferrer"
          className="Link"
        >
          <img
            src={ instagramIcon }
            alt="instagram icon"
          />
        </a>
      </section>
    </aside>
  );
}
