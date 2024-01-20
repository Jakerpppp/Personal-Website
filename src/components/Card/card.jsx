import React, { useState } from 'react';
import './card.css';
import ClickableLogo from '../ClickableLogo/ClickableLogo';

function Card({image, title, short_description, techUsed, img1, img2, img3, img4, img5, logo1, logo2, long_description }) {
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
            
            {logo1 && (
              <ClickableLogo picture={button1Logo.picture} link={button1Logo.link} />
            )}

            {logo2 && (
              <ClickableLogo picture={button2Logo.picture} link={button2Logo.link} />
            )}

            <div className="tech-used">
              {img1 && <img src={img1} alt="Tech Image 1" />}
              {img2 && <img src={img2} alt="Tech Image 2" />}
              {img3 && <img src={img3} alt="Tech Image 3" />}
              {img4 && <img src={img4} alt="Tech Image 4" />}
              {img5 && <img src={img5} alt="Tech Image 5" />}
            </div>

            {techUsed && <p className="tech-used-text">{techUsed}</p>}

            <hr />

            <p className="long-description">
              {long_description}
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Card;
