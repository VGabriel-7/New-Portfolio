import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import MyContext from './MyContext';

export default function MyProvider({ children }) {
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
    <MyContext.Provider
      value={ { repos } }
    >
      { children }
    </MyContext.Provider>
  );
}

MyProvider.propTypes = {
  children: propTypes.obj,
}.isRequired;
