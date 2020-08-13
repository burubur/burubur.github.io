import React from "react"
import { graphql } from "gatsby"
import Navbar from "./../components/navbar"
import Footer from "./../components/footer"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="container">
      <Navbar />
      <div className="body">
        <div className="content">
          <div className="blog-title">{frontmatter.title}</div>
          <div className="blog-date">{frontmatter.date}</div>
          <span className="spacer" />
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
