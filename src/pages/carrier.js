import { Button, Card, Container, Grid, Paper } from "@material-ui/core"
import React from "react"
import Layout from "../components/Layout"
import "../styles/services.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import bg from "../images/comb1.png"
import { grey } from "@material-ui/core/colors"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Carrier() {
  const data = useStaticQuery(graphql`
    query carrierPage {
      head: file(relativePath: { eq: "Carriers1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      icon1: file(relativePath: { eq: "cicon1.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      icon2: file(relativePath: { eq: "cicon2.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      icon3: file(relativePath: { eq: "cicon3.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      icon4: file(relativePath: { eq: "cicon4.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      icon5: file(relativePath: { eq: "cicon5.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      icon6: file(relativePath: { eq: "cicon6.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      soon: file(relativePath: { eq: "BBIapp.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div className="headercontainer">
        <div className="header">
          <Img
            className="headimage"
            fluid={data.head.childImageSharp.fluid}
            alt="imgheader"
          />
        </div>
        <div className="headercontent">
          <h1>Start Hauling</h1>
          <Button href="https://form.jotform.com/211714461191146"
            className="nowrap faux2"
            style={{ color: grey[50] }}>CARRIER APPLICATION</Button>
          
        </div>
      </div>
      <div className="belowtext cushion">
        <div style={{ backgroundImage: `url(${bg})` }}>
          <h1>INTEGRITY</h1>
          <p>
            "We choose to do the right thing in a reliable way, even if it means
            more work"
          </p>
        </div>
      </div>
      <Container className="cushion">
        <Grid className="cred " container>
          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.icon1.childImageSharp.fluid} alt="humanity" />
              <p>ACCESS TO 10,000+ LOADS EACH WEEK</p>
            </div>
          </Grid>
          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.icon2.childImageSharp.fluid} alt="humanity" />
              <p>DEDICATED CARRIER RELATIONS TEAM</p>
            </div>
          </Grid>
          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.icon3.childImageSharp.fluid} alt="humanity" />
              <p>FREIGHT OF ALL SIZES AND COMMODITIES</p>
            </div>
          </Grid>
        </Grid>
        <Grid className="cred" container>
          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.icon4.childImageSharp.fluid} alt="humanity" />
              <p>IN-HOUSE, NIGHT AND WEEKEND DISPATCH</p>
            </div>
          </Grid>
          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.icon5.childImageSharp.fluid} alt="humanity" />
              <p>WORRY-FREE PAYMENT OPTIONS</p>
            </div>
          </Grid>

          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.icon6.childImageSharp.fluid} alt="humanity" />
              <p>AROUND THE CLOCK SUPPORT 24/7/365</p>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <Grid className="cred cushion" container>
          <Grid item xs={12} sm={8}>
            <div className="header2">
              <Img
                className="headimage"
                fluid={data.soon.childImageSharp.fluid}
                alt="humanity"
              />
              <div className="headercontent2"></div>
            </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div>
              <div className="coming-soon">
                <h1 className="blue2 ">COMING SOON!</h1>
                <p className="lblue nowrap">
                  BBI APP AND WEB PORTAL FOR CUSTOMERS AND CARRIERS
                </p>
                <ul className="blue2 ">
                  <li>+ QUOTES</li>
                  <li>+ COMMUNICATION 24/7/365</li>
                  <li>+ PAYMENT STATUS</li>
                  <li>+ LOAD TRACKING</li>
                  <li>+ LOAD DOCUMENTS</li>
                </ul>
              </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}
