import React from "react";

import { CardContainer } from "./hot-item-card.styles";

const HotItemCard = ({ name, price, image }) => {
  return (
    <CardContainer>
      <img src={image} alt="card" />
      <p>{name}</p>
      <span>{price}</span>
    </CardContainer>
  );
};

export default HotItemCard;
