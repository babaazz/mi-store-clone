import React from "react";
import { VideoCardContainer } from "./video-card.styles";

const VideoCard = ({ image, name }) => {
  return (
    <VideoCardContainer style={{ backgroundImage: `url(${image})` }}>
      <a href="#/">▸</a>
      <p>{name}</p>
    </VideoCardContainer>
  );
};

export default VideoCard;
