import React from "react"
import Layout from "./../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function About() {
  return (
    <Layout>
      <div className="body">
        <StaticImage
          src="../images/photo.JPG"
          alt="photo"
          className="photo-profile animate-fade-in"
        />
        <span>Ordinary Earthling</span>
        <span className="spacer" />
        <ul className="animate-fade-in">
          <li>
            Helping <a href="https://www.agoda.com/">Agoda Engineering</a>
          </li>
          <li>Exploiting Silicon Based Workforce</li>
          <li>Designing Qorin as an Agentic Second Brained Assistant</li>
        </ul>
      </div>
    </Layout>
  )
}
