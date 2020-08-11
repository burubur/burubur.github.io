import React from "react"

export default function Home() {
  return (
    <div className="container">
      <div className="nav">
        <div className="nav-brand">
          <a href="/">Burhan Mubarok</a>
        </div>
        <div className="nav-menu">
          <div className="nav-menu-item">
            <a href="https://medium.com/@burubur">Blog</a>
          </div>
          <div className="nav-menu-item">
            <a href="https://www.youtube.com/burhanmubarok">Video</a>
          </div>
        </div>
      </div>
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
