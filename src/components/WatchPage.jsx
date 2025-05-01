import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { collapseSideBar } from "../store/slices/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(collapseSideBar());
  }, []);

  return (
    <div className="flex flex-col w-full">
      <div className="py-2 pl-2 m-2 flex">
        <div>
          <iframe
            width="1200"
            height="600"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <LiveChat />
      </div>
      <CommentsContainer />
    </div>
  );
};

export default WatchPage;
