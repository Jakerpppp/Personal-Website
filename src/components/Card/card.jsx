import React, { useState } from 'react';
import './card.css';

function Card({ image, title, description }) {
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
          <p className="card-description">{description}</p>
          <button className="card-button">More Info!</button>
        </div>
      </div>

      {showTextScreen && (
        <div className="text-screen" onClick={handleCloseTextScreen}>
          {/* Your text screen content goes here */}
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      )}
    </>
  );
}

export default Card;
