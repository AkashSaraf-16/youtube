import React from "react";
import { useDispatch } from "react-redux";
import { collapseSideBar } from "../store/slices/appSlice";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img
        alt="video-thumbnail"
        className="rounded-lg"
        src={thumbnails.medium.url}
      />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>{" "}
        <li className="font-thin text-sm">
          {`${statistics.viewCount / 1000}K views`}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
