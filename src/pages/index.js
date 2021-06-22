import React from "react"
import Layout from "../components/Layout"
import "../styles/home.css"
import Reel from "../videos/BBI_15SecondReel.mp4"
import Container from "@material-ui/core/Container"
import { Grid } from "@material-ui/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import Car from "../images/Carriers2.png"
import Serv from "../images/ServicesImage.webp"
import Team from "../images/team.webp"
import bg from "../images/comb1.webp"
import { Helmet } from "react-helmet"
import Button from "@material-ui/core/Button"
import { grey } from "@material-ui/core/colors"
import { useEffect } from "react"

export default function Home() {
  const data = useStaticQuery(graphql`
    query homePage {
      food: file(relativePath: { eq: "wrp.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      nwc: file(relativePath: { eq: "nationwidechildrens.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      hum: file(relativePath: { eq: "humane.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      mash: file(relativePath: { eq: "Mash.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      school: file(relativePath: { eq: "school.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      ocean: file(relativePath: { eq: "oceanlogo.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      jude: file(relativePath: { eq: "jude.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)
  let AOS
  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos")
    AOS.init({
      once: true,
      duration: 2000,
    })
  }, [])

  useEffect(() => {
    if (AOS) {
      AOS.refresh()
    }
  })

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title>BBI Logistics Home Page</title>
        <meta
          name="description"
          content="This is the home page of BBI Logistics. We are on the forefront of freight and we will get  the job done fast and efficient. "
        />
      </Helmet>
      <div className="sideways pbutt3">
        <Button
          className=""
          style={{ color: grey[50] }}
          size="large"
          variant="text"
          href="https://form.jotform.com/211394934568062"
        >
          Get A Quote
        </Button>
      </div>
      <div className="pop ">
        <div className="videoPlay">
          <video
            class="overlay"
            autoPlay
            loop
            muted
            playsInline
            src={Reel}
            type="video/mp4"
          />
        </div>
        <div className="overlay">
          <h1 className="">BUILT ON BETTER INTEGRITY</h1>
        </div>
      </div>

      <Container fluid className="cushion" data-aos="fade-up">
        <h1 className="blue2 center">GROW WITH US</h1>
        <Grid container>
          <Grid className="" item xs={12} sm={4}>
            <h2 className="temph linesmall">CARRIERS</h2>
            <div class="wrapper">
              <div class="card" style={{ backgroundImage: `url(${Car})` }}>
                <div class="text-wrapper t2">
                  <div class="text">SUPPLY CHAIN LOGISTICS</div>
                  <div class="text-small">
                    Utilize our dedicated freight to help maximize your load
                    potential. We can provide you with reliable backhauls, long
                    miles, local runs, and expedited shipments. Our 24/7/365
                    support and technology allow for easy updates and
                    hassle-free billing.
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className="" item xs={12} sm={4}>
            <h2 className="linesmall temph">CUSTOMERS</h2>
            <div class="wrapper">
              <div class="card" style={{ backgroundImage: `url(${Serv})` }}>
                <div class="text-wrapper t1">
                  <div class="text">BOOK YOUR FREIGHT</div>
                  <div class="text-small ">
                    Leverage our vast carrier network to improve efficiency in
                    your supply chain. We tailor our solutions around your needs
                    to guarantee the most reliable transportation in the
                    industry. The ability to adapt and scale our team around
                    your needs allows us to grow together.
                  </div>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className="" item xs={12} sm={4}>
            <h2 className="linesmall nowrap temph">JOIN OUR TEAM</h2>
            <div class="wrapper">
              <div class="card" style={{ backgroundImage: `url(${Team})` }}>
                {/* <h3>JOIN OUR TEAM</h3> */}
                <div class="text-wrapper t3">
                  <div class="text">NOW HIRING!</div>
                  <div class="text-small">
                    BBI Logistics is a fast-growing freight brokerage startup
                    located in downtown Columbus. We are an exploding business
                    in a dynamic industry. Take advantage of the opportunity to
                    be part of something big.
                  </div>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth={false} className="CC cushion" data-aos="fade-right">
        <Container>
          <Grid className="cred" container>
            <Grid className="center" item xs={12} sm={5}>
              <h7>
                <span className="blue"> BUILT ON BETTER INTEGRITY</span>
                <span>
                  , a company that customers endorse, carriers prefer, and
                  employees are proud of. We go the{" "}
                  <span className="lblue">extra mile</span> to ensure
                  exceptional transportation solutions and scalability.
                </span>
              </h7>
              <Grid container>
                <Grid className="cred" item xs={12} sm={12}>
                  <div className="center lblue">
                    <h3>25,000+</h3>
                    <p>CARRIER NETWORK</p>
                  </div>
                </Grid>
                <Grid className="cred" item xs={12} sm={12}>
                  <div className="center lblue">
                    <h3 >800+</h3>
                    <p className="temph">CLIENTS SERVED</p>
                  </div>
                </Grid>

                <Grid item xs={12} sm={12}>
                  <div className="center lblue">
                    <h3> 100%+</h3>
                    <p className="temph">YOY GROWTH </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid className="center" item xs={12} sm={7}>
              <Img
                fluid={data.mash.childImageSharp.fluid}
                alt="combination of images "
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Container maxWidth={false} className="cushion " data-aos="fade-left">
        <Container
          style={{ backgroundImage: `url(${bg})` }}
          className="phil cushion"
        >
          <h1>PHILANTHROPIC</h1>
          <p>"We give back to the communities in which we work"</p>

          <h3 className="cushion">Proud supporters of:</h3>

          <Grid className="cred" container spacing={6}>
            <Grid item xs={8} sm={3}>
              <div>
                <Img
                  fluid={data.hum.childImageSharp.fluid}
                  alt="humane society logo columbus"
                />
              </div>
            </Grid>
           
            <Grid item xs={8} sm={3}>
              <div>
                <Img
                  fluid={data.school.childImageSharp.fluid}
                  alt="nationwide childrens columbus logo"
                />
              </div>
            </Grid>
            <Grid item xs={8} sm={3}>
              <div>
                <Img
                  fluid={data.jude.childImageSharp.fluid}
                  alt="worthington resource pantry logo"
                />
              </div>
            </Grid>
            <Grid item xs={8} sm={3}>
              <div>
                <Img
                  fluid={data.ocean.childImageSharp.fluid}
                  alt="worthington resource pantry logo"
                />
              </div>
            </Grid>
           
            
            
          </Grid>
        </Container>
      </Container>
    </Layout>
  )
}
