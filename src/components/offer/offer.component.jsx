import React from "react";
import { OfferContainer } from "./offer.styles";

const Offer = ({ imgSrc, url, index }) => {
  return (
    <OfferContainer>
      <a href={url}>
        <img src={imgSrc} alt={`Offer no. ${index}`} />
      </a>
    </OfferContainer>
  );
};

export default Offer;
