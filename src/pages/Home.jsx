import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import '../css/StyleHome.css';

export default function Home() {
  useEffect(() => {
    document.title = 'Home';
  }, []);

  return (
    <div className="backgrouHome">
      <section className="componentHome">
        <div id="div">
          <h1>
            Hi,
            {' '}
            <br />
            {' '}
            I&apos;m Gabriel,
            {' '}
            <br />
            {' '}
            web fullstack developer.
          </h1>
          <h1 className="profession">
            React | Javascript | Jest | RTL | Docker | MySQL
          </h1>
        </div>
        <Link to="/contact-me" className="Link">
          <div className="contactMediv">
            <span>Contact-me</span>
            {' '}
            <ChatOutlinedIcon className="contactMe" />
          </div>
        </Link>
      </section>
    </div>
  );
}
