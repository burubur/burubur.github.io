import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className="container">
      <Navbar />
      <div className="body">{children}</div>
      <Footer />
    </div>
  )
}
