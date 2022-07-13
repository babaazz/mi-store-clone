import "./carousel-item.styles.css";

const CarouselItem = ({ slide, stopSlide, startSlide, fade, interval }) => {
  return (
    <div className="carousel-item">
      <img
        className={fade}
        src={slide.image}
        alt={slide.image}
        onMouseEnter={stopSlide}
        onMouseOut={startSlide}
      />
      <div className={`caption ${fade}`}>
        <h2>{slide.caption.title}</h2>
        <p>{slide.caption.description}</p>
        <h3>{slide.caption.source}</h3>
      </div>
    </div>
  );
};

export default CarouselItem;
