import React from 'react';

const actualYear = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>Copyright © 2021-{actualYear}</p>
      <p>
        Challenge created by{' '}
        <a href="https://www.appbrewery.co/" target="_blank" rel="noreferrer">
          The App Brewery
        </a>
        .
      </p>
      <p>
        Coded by{' '}
        <a href="https://arpadgbondor.github.io/CV/" target="_blank" rel="noreferrer">
          Árpád Gábor Bondor
        </a>{' '}
        in 2021.
      </p>
    </footer>
  );
}

export default Footer;
