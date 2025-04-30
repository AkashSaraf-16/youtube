import React from "react";
import Button from "./Button";

const topics = [
  "All",
  "Tech",
  "Music",
  "Meditation",
  "Top",
  "Science",
  "Funny",
];

const ButtonList = () => {
  return (
    <div className="flex">
      {topics.map((topic) => (
        <Button name={topic} />
      ))}
    </div>
  );
};

export default ButtonList;
