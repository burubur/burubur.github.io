import React from "react"
import Layout from "./../components/layout"
import { StaticImage } from "gatsby-plugin-image"

export default function About() {
  const portfolios = [
    {
      id: "3",
      title: "Buy Public Train Ticket",
      year: "2022",
      image: <StaticImage src="../images/portfolios/krl.png" alt="img" className="photo-portfolio" />,
      desc: "ihi",
      stacks: "uhu",
    },
    {
      id: "2",
      title: "burubur.com",
      year: "2021",
      image: <StaticImage src="../images/portfolios/burubur-mobile.png" alt="img" className="photo-portfolio" />,
      desc: "ihi",
      stacks: "uhu",
    },
    {
      id: "1",
      title: "barayacare.com",
      year: "2020",
      image: <StaticImage src="../images/portfolios/baraya-mobile.png" alt="img" className="photo-portfolio" />,
      desc: "amazing description",
      stacks: "others",
    },
    {
      id: "-1",
      title: "Trip Advisory Service",
      year: "2021",
      image: <StaticImage src="../images/portfolios/krl.png" alt="img" className="photo-portfolio" />,
      desc: "Handle advisory instruction for driver to reduce rider anxiety",
      stacks: "uhu",
    },
    {
      id: "-2",
      title: "Cancellation Service",
      year: "2021",
      image: <StaticImage src="../images/portfolios/krl.png" alt="img" className="photo-portfolio" />,
      desc: "ihi",
      stacks: "uhu",
    },
    {
      id: "-3",
      title: "Edit Pickup Service",
      year: "2020",
      image: <StaticImage src="../images/portfolios/krl.png" alt="img" className="photo-portfolio" />,
      desc: "ihi",
      stacks: "uhu",
    },
    {
      id: "-3",
      title: "Pickup and Dropoff Aggregation Service",
      year: "2019",
      image: <StaticImage src="../images/portfolios/krl.png" alt="img" className="photo-portfolio" />,
      desc: "Handle pickup and dropoff selection",
      stacks: "Golang, GCP, VM Based, Microservice",
    },
    {
      id: "-4",
      title: "Customer Locations Service",
      year: "2019",
      image: <StaticImage src="../images/portfolios/krl.png" alt="img" className="photo-portfolio" />,
      desc: "Handle lifetime customer's historical places",
      stacks: "Rails, GCP, VM Based, Microservice",
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
  let {image} = props
  return (
    <div className="card">
      {/* {image} */}
      Year: {props.year}
      {/* <br /> */}
      {/* Title: {props.title} */}
      {/* <br /> */}
      {/* <GatsbyImage
        src={image}
        alt="img-portfolio"
        className="photo-portfolio"
      /> */}
    
      {/* {props.image} */}
      {/* <br /> */}
      {/* Desc: {props.desc} */}
      {/* <br /> */}
      {/* Stacks: {props.stacks} */}
    </div>
  )
}
