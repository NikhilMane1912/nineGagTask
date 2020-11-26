import React from "react";
import Emoji from "a11y-react-emoji";
import "./NavWrap.css";

function NavWrap() {
  return (
    <div className="nav-wrap">
      <a className="logo" href="/">
        9GAG
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center nav-menu">
        <div className="secondary">
          <a
            href="https://bit.ly/ShuffleNav"
            target="_blank"
            className="flicker"
            rel="noopener noreferrer"
          >
            Shuffle
          </a>
          <a
            href="https://bit.ly/2WbA6LN"
            target="_blank"
            className="flicker"
            rel="noopener noreferrer"
          >
            <Emoji symbol="📱" label="Get App" />
            Get App
          </a>
          <a
            href="https://bit.ly/2GEH9WG"
            target="_blank"
            className="flicker"
            rel="noopener noreferrer"
          >
            Shop
          </a>
          <a
            href="https://bit.ly/2QAAdQb"
            target="_blank"
            className="flicker"
            rel="noopener noreferrer"
          >
            <Emoji symbol="🔞" label="18+" />
          </a>
          <a
            href="https://bit.ly/3e0HsLD"
            target="_blank"
            className="flicker"
            rel="noopener noreferrer"
          >
            US Election
          </a>
          <a
            href="https://bit.ly/36V3e1S"
            target="_blank"
            className="flicker"
            rel="noopener noreferrer"
          >
            Among Us
          </a>
          <a
            href="https://bit.ly/2M2bDF3"
            className="flicker"
            rel="noopener noreferrer"
          >
            Motorbike
          </a>
          <a
            href="https://bit.ly/2DZwxko"
            target="_blank"
            className="flicker"
            rel="noopener noreferrer"
          >
            Cosplay
          </a>
          <a
            href="https://bit.ly/3fl22FU"
            className="flicker"
            rel="noopener noreferrer"
          >
            My Workplace
          </a>
          <a
            href="https://bit.ly/3baWagg"
            target="_blank"
            className="flicker"
            rel="noopener noreferrer"
          >
            Cat
          </a>
          <a
            href="https://bit.ly/3evMAH4"
            target="_blank"
            className="flicker"
            rel="noopener noreferrer"
          >
            <Emoji symbol="❤️" label="love" />
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavWrap;
