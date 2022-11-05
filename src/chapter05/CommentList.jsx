import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "홍길동",
    comment: "동에 번쩍 서에 번쩍",
  },
  {
    name: "장금",
    comment: "홍시 맛",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />;
      })}
    </div>
  );
}

export default CommentList;
