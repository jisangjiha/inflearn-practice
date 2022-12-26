import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import Library from "./chapter03/Library";
import Clock from "./chapter04/Clock";
import CommentList from "./chapter05/CommentList";
import NotificationList from "./chapter06/NotificationList"; //재풀이 필요
import Accommodate from "./chapter07/Accommodate";
import ConfirmButton from "./chapter08/ConfirmButton";
import AttendanceBook from "./chapter10/AttendanceBook";
import DarkOrLight from "./chapter14/DarkOrLight"; //재풀이 필요
import Blocks from "./chapter15/Blocks";

//setInterval(() => {
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Blocks />
    <DarkOrLight />
    <AttendanceBook />
    <ConfirmButton />
    <Accommodate />
    <NotificationList />
    <CommentList />
    <Clock />
    <Library />
  </React.StrictMode>
);
//}, 1000);
