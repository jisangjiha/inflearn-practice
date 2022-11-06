import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Library from "./chapter03/Library";
import Clock from "./chapter04/Clock";
import CommentList from "./chapter05/CommentList";
import NotificationList from "./chapter06/NotificationList"; //재풀이 필요

//setInterval(() => {
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CommentList />
    <Clock />
    <Library />
  </React.StrictMode>
);
//}, 1000);
