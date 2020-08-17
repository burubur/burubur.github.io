import React from "react"
import { Link } from "gatsby"
import Layout from "./../components/layout"

export default function Home() {
  return (
    <Layout>
      <Link
        to="https://github.com/users/burubur/projects/1"
        target="blank"
        className="label"
      >
        Project Status
      </Link>
    </Layout>
  )
}
