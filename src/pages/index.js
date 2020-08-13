import React from "react"
import Navbar from "./../components/navbar"
import Footer from "./../components/footer"

export default function Home() {
  return (
    <div className="container">
      <Navbar />
      <div className="body">
        <a
          href="https://github.com/users/burubur/projects/1"
          target="blank"
          className="label"
        >
          Project Status
        </a>
      </div>
      <Footer />
    </div>
  )
}
