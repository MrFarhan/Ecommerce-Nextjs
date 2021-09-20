import React,{useState} from "react";
import styles from "./StarRating.module.scss";

const StarRating = ({itemRating}) => {
  const [rating, setRating] = useState(itemRating || 3);
  const [hover, setHover] = useState(0);
  return (
    <div className="star-rating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <span
            key={index}
            className={index <= (hover || rating) ? styles.on : styles.off}
            onClick={() => setRating(index)}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(rating)}
          >
            <span className="star">&#9733;</span>
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
