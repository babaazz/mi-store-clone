import { useRef, useState, useEffect } from "react";

import "./carousel.styles.css";

import CarouselItem from "./carousel-item/carousel-item.component";
import CarouselControls from "./carousel-control/carousel-control.component";
import CarouselIndicators from "./carousel-indicators/carousel-indicator.component";

const Carousel = ({ slides, interval, width, leftArrow, rightArrow }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slideInterval = useRef();

  const startSlide = () => {
    stopSlide();
    slideInterval.current = setInterval(() => {
      setCurrentSlide((currentSlide) =>
        currentSlide < slides.length - 1 ? currentSlide + 1 : 0
      );
    }, interval);
  };

  const stopSlide = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
    }
  };
  const displayItems = slides.map((slide, idx) => (
    <CarouselItem
      slide={slide}
      key={idx}
      startSlide={startSlide}
      stopSlide={stopSlide}
      fade={idx === currentSlide ? "fade" : ""}
      interval={interval}
    />
  ));

  const prev = () => {
    startSlide();
    const index = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    setCurrentSlide(index);
  };

  const next = () => {
    startSlide();
    const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    setCurrentSlide(index);
  };

  const switchIdx = (idx) => {
    startSlide();
    setCurrentSlide(idx);
  };

  useEffect(() => {
    startSlide();
    return () => stopSlide();
  }, []);

  return (
    <div className="carousel" style={{ maxWidth: `${width}px` }}>
      <div
        className="carousel-inner"
        // style={{
        //   transform: `translateX(${-currentSlide * 100}%)`,
        // }}
      >
        {displayItems}
      </div>
      <CarouselIndicators
        slides={slides}
        currentSlide={currentSlide}
        switchIdx={switchIdx}
      />

      <CarouselControls
        prev={prev}
        next={next}
        stopSlide={stopSlide}
        startSlide={startSlide}
        leftArrow={leftArrow}
        rightArrow={rightArrow}
      />
    </div>
  );
};

export default Carousel;
