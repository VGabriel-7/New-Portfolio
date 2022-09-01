import React, { useEffect } from 'react';

export default function Projects() {
  useEffect(() => {
    document.title = 'Projects';
  }, []);

  return <h1>Projects</h1>;
}
