import React from "react"

export default function Home() {
  return (
    <div className="content">
      <div className="navbar">
        <span className="brand">Burhan Mubarok</span>
        <div className="navbar-menu">
          <span className="navbar-item">Blog</span>
          <span className="navbar-item">Video</span>
          <span className="navbar-item">Contact</span>
        </div>
      </div>
      <div className="content-body">
        <a
          href="https://github.com/users/burubur/projects/1"
          target="blank"
          className="label"
        >
          Project Status
        </a>
      </div>
    </div>
  )
}
