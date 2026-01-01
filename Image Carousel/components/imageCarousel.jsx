import { useState } from "react";

const ImageCarousel = ({ images }) => {
  if (images.length < 1) {
    return <div>No image to display</div>;
  }

  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="frame">
      <button className="buttonP" onClick={goPrev}>
        ◀️
      </button>
      <img src={images[index]} alt="carousel slide" />
      <button className="buttonN" onClick={goNext}>
        ▶️
      </button>

      <div className="select">
        {[...Array(images.length).keys()].map((_, idx) => {
          return (
            <span
              key={idx}
              onClick={() => setIndex(idx)}
              style={{
                color: idx === index ? "white" : "#888",
                fontSize: idx === index ? "18px" : "14px",
              }}
            >
              ▫️
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCarousel;
