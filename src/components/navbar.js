import React from "react"

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-brand">
        <a href="/">Burhan Mubarok</a>
      </div>
      <div className="nav-menu">
        <div className="nav-menu-item">
          <a href="/blog/iqra">Blogs</a>
        </div>
        <div className="nav-menu-item">
          <a href="https://www.youtube.com/burhanmubarok">Videos</a>
        </div>
      </div>
    </div>
  )
}
