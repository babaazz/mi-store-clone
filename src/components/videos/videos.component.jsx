import React from "react";
import { VideosContainer } from "./videos.styles";
import VideoCard from "./video-card/video-card.component";

const Videos = ({ videos }) => {
  return (
    <VideosContainer>
      {videos.map((item, index) => (
        <VideoCard key={index} image={item.image} name={item.name} />
      ))}
    </VideosContainer>
  );
};

export default Videos;
