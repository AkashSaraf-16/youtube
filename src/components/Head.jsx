import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleSideMenu } from "../store/slices/appSlice";
import { YT_SEARCH_API } from "../utils/constants";
import { setSuggestion } from "../store/slices/searchSuggestionsSlice";
import { Link } from "react-router-dom";

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchSuggestions = useSelector((state) => state.searchSuggestions);
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleSideMenu());
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery && searchSuggestions[searchQuery]) {
        setSuggestions(searchSuggestions[searchQuery]);
      } else if (searchQuery.length) {
        getSearchSuggestion();
      }
    }, 200);

    // this cleanup function will be called react destoys this component before re-rendering it.
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  useEffect(() => {
    const handleScroll = () => {
      setShowSuggestions(false);
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getSearchSuggestion = async () => {
    const data = await fetch(YT_SEARCH_API + searchQuery);
    const jsonData = await data.json();
    setSuggestions(jsonData[1]);
    dispatch(setSuggestion({ key: searchQuery, value: jsonData[1] }));
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
      <div className="col-span-10 px-10">
        <div className="flex">
          <input
            className="w-1/2 border border-gray-400 p-2 rounded-l-full h-8"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onClick={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 rounded-r-full h-8 px-2 flex items-center justify-center bg-gray-100">
            <img
              className="h-4"
              alt="search-icon"
              src="https://img.icons8.com/ios7/600/search.png"
            />
          </button>
        </div>
        {suggestions.length && showSuggestions ? (
          <div className="fixed bg-white py-2 px-2 w-[36.5rem] z-10 shadow-md rounded-sm border border-gray-100">
            <ul>
              {/* NOTE: A <Link> (which renders to <a>) should not wrap a <li>. This breaks semantics and browser behavior, especially when React Router tries to handle navigation. */}
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion}
                  className="py-1 px-1 rounded-md hover:bg-gray-100"
                  onMouseDown={(e) => e.preventDefault()} // prevent blur on click
                >
                  <Link className="w-[100%]" to={`/search?text=${suggestion}`}>
                    {suggestion}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>

      <div className="col-span-1">
        <img
          className="h-8"
          alt="profile"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};

export default Head;
