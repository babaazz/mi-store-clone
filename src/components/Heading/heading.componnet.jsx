import React from "react";
import { HeadingContainer, Line } from "./heading.styles";

const Heading = ({ text }) => {
  return (
    <HeadingContainer>
      <Line />
      <p>{text.toUpperCase()}</p>
      <Line />
    </HeadingContainer>
  );
};

export default Heading;
