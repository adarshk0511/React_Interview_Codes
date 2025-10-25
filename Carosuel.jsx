import React, { useState } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const goPrev = () =>{
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }
  
  const goNext = () =>{
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  return (
    <div>
      <button onClick={goPrev}>◀️</button>
      <img height="200px" width="200px" src={images[currentIndex]} />
      <button onClick={goNext}>▶️</button>
    </div>
  );
};

const App = () => {
  const images = [
  "https://images.unsplash.com/photo-1502877338535-766e1452684a",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d"
];

   return <Carousel images={images} />;
};

export default App;
