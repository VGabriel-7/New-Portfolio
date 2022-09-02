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

  return (
    <div className="containerProjects">
      <h1 className="project-title">Projects</h1>
      <section className="github-projects">
        {repos.length > 0 ? repos.map((repo) => (
          <div
            className="container-repo"
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
      </section>
    </div>
  );
}
