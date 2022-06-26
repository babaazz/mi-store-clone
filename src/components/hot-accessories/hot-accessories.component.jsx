import React from "react";
import { HAContainer, Cover, ItemsContainer } from "./hot-accessories.styles";

import HotItemCard from "../hot-item-card/hot-item-card.component";

const HotAccessories = ({ category, cover }) => {
  return (
    <HAContainer>
      <Cover>
        <img src={cover} alt="cover" />
      </Cover>
      <ItemsContainer>
        {category.map((item, index) => (
          <HotItemCard
            key={index}
            name={item.name}
            price={item.price}
            image={item.image}
          />
        ))}
      </ItemsContainer>
    </HAContainer>
  );
};

export default HotAccessories;
