import React from "react";
import "./SectionSidebar.css";

function SectionSidebar() {
  return (
    <div className="section-sidebar">
      <div className="stealthy-scroll-container">
        <section className="popular">
          <ul className="nav">
            <li className="selected">
              <a href="/hot" className="label">
                <i className="icon hot"></i> Hot{" "}
              </a>
              <a className="button" href="/">
                <i className="icon more"></i>
              </a>
            </li>
            <li className="">
              <a href="/trending" className="label">
                <i className="icon trending"></i> Trending{" "}
              </a>
            </li>
            <li className="">
              <a href="/fresh" className="label">
                <i className="icon fresh"></i> Fresh{" "}
              </a>
            </li>
            <li>
              <a href="/" className="label">
                <i className="icon board"></i> Boards 🆕{" "}
              </a>
            </li>
            <li>
              <a href="/apps" target="_blank" className="label">
                <i className="icon phone"></i> Get 9GAG app{" "}
              </a>
            </li>
          </ul>
        </section>
        <section className="">
          <header>
            <h3>Popular</h3>
          </header>
          <ul className="nav">
            <li className="">
              <a href="/india" className="label">
                <i className="thumbnail">
                  <picture>
                    <source
                      srcSet="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557283912.8748_aJuQuv_100x100wp.webp"
                      type="image/webp"
                    ></source>
                    <img
                      src="https://miscmedia-9gag-fun.9cache.com/images/thumbnail-facebook/1557283912.8748_aJuQuv_100x100.jpg"
                      loading="lazy"
                      alt="lazy"
                    ></img>
                  </picture>
                </i>
                India 🇮🇳
              </a>
              <a className="button" href="/">
                <i className="icon more"></i>
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default SectionSidebar;
