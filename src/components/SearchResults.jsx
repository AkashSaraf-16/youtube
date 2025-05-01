import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YT_SEARCH_VIDEOS } from "../utils/constants";
import VideoCard from "./VideoCard";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const searchText = searchParams.get("text");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideosByText();
  }, [searchText]);

  const getVideosByText = async () => {
    const data = await fetch(YT_SEARCH_VIDEOS + searchText);
    const { items } = await data.json();
    console.log(items);
    setVideos(items);
  };
  if (videos.length == 0) return <h2>Loading...</h2>;
  return (
    <div className="flex flex-wrap">
      {videos.map((video) => (
        <Link key={video.id.videoId} to={`/watch?v=${video.id.videoId}`}>
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchResults;
