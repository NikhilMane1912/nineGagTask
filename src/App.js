import React, { Component } from "react";
import ReactDOM from "react-dom";
import { render } from "react-dom";
import axios from "axios";
import TopNav from "./components/Navbar/TopNav";
import Container from "./components/Container/Container";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <TopNav />
      <Container />
    </div>
  );
}
