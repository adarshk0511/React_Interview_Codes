import { useState } from "react";

const Rating = ({ totalStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div>
      {[...Array(totalStars)].map((star, index) => {
        const starRating = index + 1;

        return (
          <span
            key={index}
            onClick={() => setRating(starRating)}
            onMouseEnter={() => setHover(starRating)}
            onMouseLeave={() => setHover(0)}
            style={{
              cursor: "pointer",
              color: starRating <= (hover || rating) ? "gold" : "gray",
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
