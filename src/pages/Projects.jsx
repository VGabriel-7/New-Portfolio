import React, { useContext } from 'react';
import MyContext from '../Contex/MyContext';
import '../css/Projects.css';

export default function Projects() {
  const { repos } = useContext(MyContext);

  const wheeling = (event) => {
    const scrol = 400;
    if (event.deltaY > 0) {
      event.target.scrollBy(scrol, 0);
    } else {
      event.target.scrollBy(-scrol, 0);
    }
  };

  return (
    <div className="containerProjects">
      <h1 className="project-title">Projects</h1>
      <section className="github-projects">
        <div className="projects" onWheel={ wheeling }>
          {repos.length > 0 ? repos.map((repo) => (
            <div
              className="project"
              key={ repo.name }
            >
              <a
                className="link-repo"
                href={ repo.html_url }
                target="_blank"
                rel="noopener noreferrer"
              >
                { repo.name }
              </a>
            </div>
          )) : <p>Loading...</p>}
        </div>
      </section>
    </div>
  );
}
