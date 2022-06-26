import React from "react";

import { StarProdContainer } from "./star-products.styles";

const StarProducts = ({ starProducts }) => {
  return (
    <StarProdContainer>
      <div>
        <a href={starProducts[0].url}>
          <img src={starProducts[0].image} alt="1st" />
        </a>
      </div>
      <div>
        <a href={starProducts[1].url}>
          <img src={starProducts[1].image} alt="2nd" />
        </a>
        <a href={starProducts[2].url}>
          <img src={starProducts[2].image} alt="3rd" />
        </a>
        <a href={starProducts[3].url}>
          <img src={starProducts[3].image} alt="4th" />
        </a>
      </div>
    </StarProdContainer>
  );
};

export default StarProducts;
