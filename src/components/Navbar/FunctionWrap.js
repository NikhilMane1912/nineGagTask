import React from "react";
import "./FunctionWrap.css";

function FunctionWrap() {
  return (
    <div className="function-wrap">
      <div className="general-function">
        <a className="darkmode-toggle" href="/login">
          Dark mode
        </a>
        <a className="search" href="/login">
          Search
        </a>
      </div>
      <div className="visitor-function">
        <button
          className="board-system__too-nav-button closed"
          data-v-49695a85=""
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            role="presentation"
            icon-name="Boards"
            data-v-49695a85=""
          >
            <g fill="currentColor">
              <path
                d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 20L4 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM7 9H5V7H7V9ZM11 9H9V7H11V9ZM15 9H13V7H15V9Z"
                data-v-49695a85=""
              ></path>
            </g>
          </svg>
        </button>
        <a className="btn-mute" href="/login">
          Log in
        </a>
        <a className="btn-primary" href="/signup">
          Sign up
        </a>
      </div>
      <div className="user-function" style={{display: 'none'}}>
        <div className="notification">
          <a className="bell" href="/notifications">
            a
          </a>
        </div>
        <div className="avatar">
          <a className="avatar-container" href="/u/null">
            <img alt="Avatar"></img>
          </a>
        </div>
        <div className="upload">
          <a className="btn-primary" href="/submit">
            Upload
          </a>
        </div>
      </div>
    </div>
  );
}

export default FunctionWrap;
