// App.js
import React, { useState } from 'react';
import Card from './Card';
import img1 from '../cards/bg1.jpg';
import img2 from '../cards/bg1.jpg';
import img3 from '../cards/bg1.jpg';
import img4 from '../cards/bg1.jpg';

const Cardss = () => {
  const [selectedCard, setSelectedCard] = useState('c1');
  
  const cards = [
    { id: 'c1', title: 'Winter', description: 'Winter has so much to offer - creative activities', imageUrl: img1 },
    { id: 'c2', title: 'Digital Technology', description: 'Gets better every day - stay tuned', imageUrl: img2 },
    { id: 'c3', title: 'Globalization', description: 'Help people all over the world', imageUrl: img3 },
    { id: 'c4', title: 'New technologies', description: 'Space engineering becomes more and more advanced', imageUrl: img4 }
  ];

  return (
    <div className="wrapper flex items-center justify-center min-h-screen bg-gray-100">
    <div className="container flex flex-nowrap">
      {cards.map(card => (
        <Card
          key={card.id}
          id={card.id}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          checked={selectedCard === card.id}
          onChange={setSelectedCard}
        />
      ))}
    </div>
  </div>
  );
};

export default Cardss;
