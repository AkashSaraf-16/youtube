import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
      <Button name="All" />
      <Button name="Tech" />
      <Button name="Music" />
      <Button name="Meditation" />
      <Button name="Top" />
      <Button name="Science" />
      <Button name="Funny" />
    </div>
  );
};

export default ButtonList;
