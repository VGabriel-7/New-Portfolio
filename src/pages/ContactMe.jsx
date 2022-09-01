import React, { useEffect } from 'react';

export default function ContactMe() {
  useEffect(() => {
    document.title = 'Contact-me';
  }, []);

  return <h1>Contacte-me</h1>;
}
