import React, { useEffect, useState } from "react";
import { YT_VIDEOS_API } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YT_VIDEOS_API);
    const jsonData = await data.json();
    setVideos(jsonData.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.length &&
        videos.map((video) => <VideoCard key={video.id} info={video} />)}
    </div>
  );
};

export default VideoContainer;
