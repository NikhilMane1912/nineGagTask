import React from "react";
import "./TopNav.css";
import NavWrap from "./NavWrap";
import FunctionWrap from "./FunctionWrap";

function TopNav() {
  return (
    <div
      id="top-nav"
      className="mx-auto flex flex-wrap flex-col md:flex-row items-center 9g-padding"
    >
      <NavWrap />
      <FunctionWrap />
    </div>
  );
}

export default TopNav;
