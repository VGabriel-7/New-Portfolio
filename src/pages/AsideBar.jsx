import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../images/web-house.svg';
import aboutIcon from '../images/info.svg';
import projectsIcon from '../images/project.svg';
import instagramIcon from '../images/instagram_f_icon-icons.com_65485.svg';
import linkedinIcon from '../images/linkedin-logo_icon-icons.com_57120.svg';
import gitHubIcon from '../images/github-logo_icon-icons.com_73546.svg';

export default function AsideBar() {
  return (
    <aside
      className="asideBar"
      style={ {
        display: 'grid',
        flexDirection: 'column',
        justifyContent: 'center',
        border: '1px solid red',
        height: '100%',
        width: '60px',
      } }
    >
      <nav
        className="sectionNav"
        style={ {
          display: 'flex',
          flexDirection: 'column',
          alignSelf: 'center',
          gap: '15px',
          flexShrink: '0',
          border: '3px solid pink',
        } }
      >
        <Link to="/">
          <img
            src={ homeIcon }
            alt="home icon"
            style={ { width: '30px' } }
          />
        </Link>
        <Link to="/about">
          <img
            src={ aboutIcon }
            alt="about icon"
            style={ { width: '30px' } }
          />
        </Link>
        <Link to="/projects">
          <img
            src={ projectsIcon }
            alt="projects icon"
            style={ { width: '30px' } }
          />
        </Link>
      </nav>
      <section
        className="sectionContact"
        style={ {
          display: 'flex',
          flexDirection: 'column',
          gridRowStart: '20',
          border: '3px solid',
          gap: '10px',
        } }
      >
        <a
          href="https://www.instagram.com/gabriel_alm7/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={ instagramIcon }
            alt="instagram icon"
            style={ { width: '20px' } }
          />
        </a>
        <a
          href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-055a65230/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={ linkedinIcon }
            alt="linkedin icon"
            style={ { width: '20px' } }
          />
        </a>
        <a
          href="https://github.com/VGabriel-7"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={ gitHubIcon }
            alt="linkedin icon"
            style={ { width: '20px' } }
          />
        </a>
      </section>
    </aside>
  );
}
