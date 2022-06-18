import React from "react";
import { HeadingContainer, Line } from "./heading.styles";

const Heading = ({ text }) => {
  return (
    <HeadingContainer>
      <Line />
      <p>{text}</p>
      <Line />
    </HeadingContainer>
  );
};

export default Heading;
