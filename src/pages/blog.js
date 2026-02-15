import React from "react"
import { graphql, Link } from "gatsby"
import Navbar from "./../components/navbar"
import Footer from "./../components/footer"

export default function Blog({ data }) {
  const posts = data.allMarkdownRemark.nodes
  return (
    <div className="container">
      <Navbar />
      <div className="body">
        <div className="posts">
          {posts.map(post => (
            <div key={post.frontmatter.title} className="post">
              <Link to={post.frontmatter.slug}>
                <span className="post-title">{post.frontmatter.title}</span>
                <br />
                <span className="post-date">{post.frontmatter.date}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          slug
          title
        }
      }
    }
  }
`
