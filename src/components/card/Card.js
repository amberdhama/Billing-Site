import React from 'react';
import './card.css';

const Card = (probs) => {
  return (
    <div className="card">
      <img src= {probs.img} alt="Card image" className="card-image" />
      
      <div className="card-content">
        <h3>{probs.content}</h3>
      </div>
      
    </div>
  );
};

export default Card;
