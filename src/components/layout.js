import React from "react"
import Helmet from "react-helmet"
import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <title>burubur.com</title>
        <link rel="canonical" href="http://burubur.com" />
      </Helmet>
      <div className="container">
        <Navbar />
        <div className="body">{children}</div>
        <Footer />
      </div>
    </div>
  )
}
