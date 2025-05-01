import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { YT_COMMENTS_API } from "../utils/constants";

const commentsData = [
  {
    name: "akash",
    text: "hello",
    replies: [
      {
        name: "akash",
        text: "hello",
        replies: [{ name: "akash", text: "hello", replies: [] }],
      },
    ],
  },
  { name: "akash", text: "hello", replies: [] },
  { name: "akash", text: "hello", replies: [] },
  { name: "akash", text: "hello", replies: [] },
];

const Comment = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-md my-1">
      <img
        className="w-8 h-8"
        alt="commenter"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-2 ">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
