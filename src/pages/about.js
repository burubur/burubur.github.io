import React from "react"
import Layout from "./../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function About() {
  return (
    <Layout>
      <div className="body">
        <StaticImage
          src="../images/photo.jpg"
          alt="photo"
          className="photo-profile animate-fade-in"
        />
        <span className="spacer" />
        <div className="center animate-fade-in">
          Ordinary Indonesian,
          <br />
          Helping <a href="https://www.gojek.com/">Gojek</a> Engineering.
        </div>
      </div>
    </Layout>
  )
}
