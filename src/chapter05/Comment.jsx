import React from "react";
import "./Comment.css";

function Comment(props) {
  return (
    <div className="wrapper">
      <div className="imageContainer">
        <img
          src="http://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
          className="image"
        />
      </div>
      <div className="contentContainer">
        <span className="nameText">홍길동</span>
        <span className="commentText">제가 만든 첫 컴포넌트입니다.</span>
      </div>
    </div>
  );
}

export default Comment;
