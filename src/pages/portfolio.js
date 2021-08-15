import React from "react"
import Layout from "./../components/layout"

export default function About() {
  const portfolios = [
    {
      title: "burubur.com",
      year: "2021",
      image: "aha",
      desc: "ihi",
      stacks: "uhu",
    },
    {
      title: "barayacare.com",
      year: "2020",
      image: "something",
      desc: "amazing description",
      stacks: "others",
    },
  ]

  return (
    <Layout>
      <div className="body">
        <div className="typewriter">
          <span className="center typewriter-text">In progress ...</span>
        </div>
        <span className="spacer" />
        <PortfolioItems data={portfolios} />
      </div>
    </Layout>
  )
}

function PortfolioItems(props) {
  return (
    <div className="portfolio">
      {props.data.map((p, i) => (
        <PortfolioItem
          key={i}
          year={p.year}
          title={p.title}
          image={p.image}
          desc={p.desc}
          stacks={p.stacks}
        />
      ))}
    </div>
  )
}

function PortfolioItem(props) {
  return (
    <div className="card">
      Year: {props.year}
      <br />
      Title: {props.title}
      <br />
      Image: {props.image}
      <br />
      Desc: {props.desc}
      <br />
      Stacks: {props.stacks}
    </div>
  )
}
