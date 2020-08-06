import React from "react"

export default function Home() {
  return (
    <div className="content">
      {/* <div className="navbar">
        <span className="brand">
          <a href="/">Burhan Mubarok</a>
        </span>
        <div className="navbar-menu">
          <span className="navbar-item">
            <a href="https://medium.com/@burubur">Blog</a>
          </span>
          <span className="navbar-item">
            <a href="https://www.youtube.com/c/BurhanMubarok">Video</a>
          </span>
        </div>
      </div> */}
      <div className="body">
        <a
          href="https://github.com/users/burubur/projects/1"
          target="blank"
          className="label"
        >
          Project Status
        </a>
      </div>
      <div className="footer">
        <span className="footer-item">
          <a target="blank" href="https://medium.com/@burubur">
            Medium
          </a>
        </span>
        <span className="footer-item">
          <a target="blank" href="https://twitter.com/burhanmubarok">
            Twitter
          </a>
        </span>
        <span className="footer-item">
          <a target="blank" href="https://github.com/burubur">
            Github
          </a>
        </span>
      </div>
    </div>
  )
}
