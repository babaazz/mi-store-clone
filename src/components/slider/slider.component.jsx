import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = ({ start }) => {
  return (
    <Carousel fade nextLabel="" prevLabel="" interval={3000}>
      {start.map((item) => (
        <Carousel.Item>
          <img src={item} className="d-block w-100" alt="cc" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
