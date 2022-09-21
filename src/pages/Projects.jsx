import React, { useEffect, useState } from 'react';
import '../css/Projects.css';

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    document.title = 'Projects';
    const apiGitHub = async () => {
      const reposArray = await fetch('https://api.github.com/users/VGabriel-7/repos')
        .then((promise) => promise.json());
      setRepos(reposArray);
    };
    apiGitHub();
  }, []);

  const wheeling = (event) => {
    const scrol = 300;
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
