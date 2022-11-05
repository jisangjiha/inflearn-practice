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
        <span className="nameText">{props.name}</span>
        <span className="commentText">{props.comment}</span>
      </div>
    </div>
  );
}

export default Comment;
