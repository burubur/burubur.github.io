import React from "react"
import Helmet from "react-helmet"
import Navbar from "./navbar"
import Footer from "./footer"

export default function Layout({ children }) {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="Burhan Mubarok Site" />
        <meta name="keywords" content="Javascript, React, Go, Golang, Software Engineer, Web Developer, Cloud Enthusiast, Human"></meta>
        <meta name="author" content="Burhan Mubarok"></meta>
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
