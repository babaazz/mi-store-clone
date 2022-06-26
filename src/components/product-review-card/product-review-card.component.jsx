import React from "react";
import { ReviewConatiner } from "./product-review-card.styles";
const ProductReviewCard = ({ name, image, price, review }) => {
  return (
    <ReviewConatiner>
      <img src={image} alt={name} />
      <h5>{review}</h5>
      <span>{name}</span>
      <b>{price}</b>
    </ReviewConatiner>
  );
};

export default ProductReviewCard;
