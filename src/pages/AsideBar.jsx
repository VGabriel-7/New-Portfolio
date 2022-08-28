import React from 'react';
import { Link } from 'react-router-dom';
import homeIcon from '../images/web-house.svg';
import aboutIcon from '../images/info.svg';
import projectsIcon from '../images/project.svg';
import instagramIcon from '../images/instagram_f_icon-icons.com_65485.svg';
import linkedinIcon from '../images/linkedin-logo_icon-icons.com_57120.svg';

export default function AsideBar() {
  return (
    <aside className="asideBar">
      <nav className="sectionNav">
        <Link to="/">
          <img src={ homeIcon } alt="home icon" />
        </Link>
        <Link to="/about">
          <img src={ aboutIcon } alt="about icon" />
        </Link>
        <Link to="/projects">
          <img src={ projectsIcon } alt="projects icon" />
        </Link>
      </nav>
      <section className="sectionContact">
        <button type="button">
          <img src={ instagramIcon } alt="instagram icon" />
        </button>
        <button type="button">
          <img src={ linkedinIcon } alt="linkedin icon" />
        </button>
      </section>
    </aside>
  );
}
