import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../store/slices/chatSlice";
import { generaterRandomNames } from "../utils/helper";

const LiveChat = () => {
  const messages = useSelector((state) => state.chatMessages.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({ name: generaterRandomNames(), message: "Hello there" })
      );
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="m-2 p-4 bg-slate-100 border border-black w-full h-[600px] overflow-y-scroll flex flex-col-reverse">
      {messages.map((msg, index) => (
        <ChatMessage name={msg.name} message={msg.message} key={index} />
      ))}
    </div>
  );
};

export default LiveChat;
