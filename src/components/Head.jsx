import React from "react";
import { useDispatch } from "react-redux";
import { toggleSideMenu } from "../store/slices/appSlice";

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleSideMenu());
  };
  return (
    <div className="grid grid-flow-col p-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-8 mx-2 cursor-pointer"
          onClick={toggleMenuHandler}
          alt="menu"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <a href="/">
          <img
            className="h-8"
            alt="yt-icon"
            src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
          />
        </a>
      </div>
      <div className="col-span-10 px-10 flex">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full h-8"
          type="text"
        />
        <button className="border border-gray-400 rounded-r-full h-8 px-2 flex items-center justify-center bg-gray-100">
          <img
            className="h-4"
            alt="search-icon"
            src="https://img.icons8.com/ios7/600/search.png"
          />
        </button>
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="profile"
          src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
        />
      </div>
    </div>
  );
};

export default Head;
