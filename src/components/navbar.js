import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <div className="nav">
      <div className="nav-brand">
        <Link to="/">Burhan Mubarok</Link>
      </div>
      <div className="nav-menu">
        <div className="nav-menu-item">
          <Link to="/blog/iqra">Blogs</Link>
        </div>
        <div className="nav-menu-item">
          <Link to="https://www.youtube.com/burhanmubarok" target="blank">Videos</Link>
        </div>
        <div className="nav-menu-item">
          <Link to="/about">About</Link>
        </div>
      </div>
    </div>
  )
}
