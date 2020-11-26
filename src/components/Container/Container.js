import React from "react";
import "./Container.css";
import SectionSidebar from "./SectionSidebar/SectionSidebar";
import Page from "./Page/Page";

function Container() {
  return (
    <div id="container" className="container" style={{ paddingTop: "48px" }}>
      <SectionSidebar />
      <Page />
    </div>
  );
}

export default Container;
