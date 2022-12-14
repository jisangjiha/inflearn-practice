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
import LandingPage from "./chapter09/LandingPage";
import AttendanceBook from "./chapter10/AttendanceBook";
import SignUp from "./chapter11/SignUp";
import Calculator from "./chapter12/Calculator";
import ProfileCard from "./chapter13/ProfileCard";
import DarkOrLight from "./chapter14/DarkOrLight"; //재풀이 필요
import Blocks from "./chapter15/Blocks";

//setInterval(() => {
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Blocks />
    <DarkOrLight />
    <ProfileCard />
    <Calculator />
    <SignUp />
    <AttendanceBook />
    <LandingPage />
    <ConfirmButton />
    <Accommodate />
    <NotificationList />
    <CommentList />
    <Clock />
    <Library />
  </React.StrictMode>
);
//}, 1000);
