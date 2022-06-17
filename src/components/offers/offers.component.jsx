import React from "react";
import Offer from "../offer/offer.component";
import { OffersContainer } from "./offers.styles";

const Offers = ({ offers }) => {
  return (
    <OffersContainer>
      {offers.map((item, index) => (
        <Offer imgSrc={item.image} key={index} url={item.url} index={index} />
      ))}
    </OffersContainer>
  );
};

export default Offers;
