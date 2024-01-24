import React, { useState } from 'react';
import './card.css';
import ClickableLogo from '../ClickableLogo/ClickableLogo';

function Card({ image, title, short_description, techUsed, tech_images, logos, children }) {
  const [showTextScreen, setShowTextScreen] = useState(false);

  const handleButtonClick = () => {
    setShowTextScreen(true);
  };

  const handleCloseTextScreen = () => {
    setShowTextScreen(false);
  };

  return (
    <>
      <div className="card" onClick={handleButtonClick}>
        <img src={image} alt="Card Image" className="card-image" />
        <div className="card-content">
          <h2 className="card-title">{title}</h2>
          <p className="card-description">{short_description}</p>
          <button className="card-button">More Info!</button>
        </div>
      </div>

      {showTextScreen && (
        <div className="text-screen" onClick={handleCloseTextScreen}>
          <div className="text-screen-content">
            <h2 className="text-screen-title">{title}</h2>

            {logos && (
              <div className="logos">
                {logos.map((logo, index) => (
                  <ClickableLogo key={index} picture={logo.pic} link={logo.link} />
                ))}
              </div>
            )}

            {tech_images && (
              <div className="tech-used">
                {tech_images.map((img, index) => (
                  <img key={index} src={img} alt={`Tech Image ${index + 1}`} />
                ))}
              </div>
            )}

            {techUsed && <p className="tech-used-text">{techUsed}</p>}

            <hr />

            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
