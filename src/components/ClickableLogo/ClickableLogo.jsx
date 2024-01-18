

import React from 'react';

function ClickableLogo({ picture, link }) {
  return (
    <a href={link}>
      <img src={picture} alt="Button Image" />
    </a>
  );
}

export default ClickableLogo;

