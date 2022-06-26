import React from "react";
import { PRContainer } from "./product-reviews.styles";
import ProductReviewCard from "../product-review-card/product-review-card.component";
const ProductReviews = ({ productReviews }) => {
  return (
    <PRContainer>
      {productReviews.map((item, index) => (
        <ProductReviewCard
          key={index}
          image={item.image}
          review={item.review}
          name={item.name}
          price={item.price}
        />
      ))}
    </PRContainer>
  );
};

export default ProductReviews;
