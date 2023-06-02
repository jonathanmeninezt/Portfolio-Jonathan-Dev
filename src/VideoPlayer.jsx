import React from "react";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import fundoVideo from "./assets/fundoVideo.mp4";

const VideoPlayer = () => {
  return (
    <div className="view">
      <Video autoplay loop controls={[false]}>
        <source src={fundoVideo} type="video/webm" />
      </Video>
    </div>
  );
};

export default VideoPlayer;
