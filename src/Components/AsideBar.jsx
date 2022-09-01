import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { AiFillGithub, AiOutlineLinkedin } from 'react-icons/ai';
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import '../css/StyleAsideBar.css';

export default function AsideBar() {
  return (
    <aside
      className="asideBar"
    >
      <nav
        className="sectionNav"
      >
        <Link to="/">
          <HomeIcon className="Link" sx={ { fontSize: 30 } } />
        </Link>
        <Link to="/about">
          <InfoIcon className="Link" sx={ { fontSize: 30 } } />
        </Link>
        <Link to="/projects">
          <FolderOpenOutlinedIcon className="Link" sx={ { fontSize: 30 } } />
        </Link>
      </nav>
      <section
        className="sectionContact"
      >
        <a
          href="https://github.com/VGabriel-7"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="socialMedia github" />
        </a>
        <a
          href="https://www.linkedin.com/in/vin%C3%ADcius-gabriel-055a65220/"
          target="_blank"
          rel="noreferrer"
        >
          <AiOutlineLinkedin className="socialMedia linkedin" />
        </a>
        <a
          href="http://wa.me//5575997145920"
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon className="socialMedia whatsapp" />
        </a>
        <a
          href="https://www.instagram.com/gabriel_alm7/"
          target="_blank"
          rel="noreferrer"
        >
          <InstagramIcon className="socialMedia instagram" />
        </a>
      </section>
    </aside>
  );
}
