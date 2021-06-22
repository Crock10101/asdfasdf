import { Container, Grid } from "@material-ui/core"
import React from "react"
import { blue } from "@material-ui/core/colors"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { Link, graphql } from "gatsby"
import Logo from "../images/HomeIcon4.png"
import { useStaticQuery } from "gatsby"
import Img from "gatsby-image"



export default function Footer() {
  const data = useStaticQuery(graphql`
  query footerPage {
    head: file(relativePath: { eq: "HomeIcon4.png" }) {
      childImageSharp {
        fluid(maxWidth: 2048, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
  }
  `)
  
  return (
    
    <footer>
      <Container>
        <div>
          <div>
            <Link href="/" alt="home">
            <Img
            className="footerlogo"
            fluid={data.head.childImageSharp.fluid}
            alt="imgheader"
          />
            </Link>
            {/* <ul>
              <li>
                <Link>ABOUT US </Link>
              </li>
              <li>
                <Link>CUSTOMERS </Link>
              </li>
              <li>
                <Link>CARRIER </Link>
              </li>
              <li>
                <Link>JOIN OUR TEAM </Link>
              </li>
              <li>
                <Link>CONTACT US </Link>
              </li>
              <li>
                <Link>GET A QUOTE </Link>
              </li>
              <li>
              <a
                href="https://www.linkedin.com/company/bbi-logistics"
                target="_blank"
              >
                <LinkedInIcon style={{ color: blue[800] }} fontSize="large" />
              </a>
              <a href="https://www.instagram.com/bbilogistics/" target="_blank">
                <InstagramIcon style={{ color: blue[800] }} fontSize="large" />
              </a>
              <a href="https://www.facebook.com/BBILogistics" target="_blank">
                <FacebookIcon style={{ color: blue[800] }} fontSize="large" />
              </a>
              </li>
            </ul> */}
          </div>
          <Grid container spacing={3}>
            <Grid item xs={6} sm={3}>
              <div>
                <ul>
                  <li>
                    <Link href="/about" alt="home">ABOUT US </Link>
                  </li>
                  <li>
                    <Link href="/services" alt="home">CUSTOMERS </Link>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <div>
              <ul>
                <li>
                  <Link href="/carrier" alt="home">CARRIER </Link>
                </li>
                <li>
                  <Link href="/career" alt="home">JOIN OUR TEAM </Link>
                </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <div>
              <ul>
                <li>
                  <Link href="https://form.jotform.com/211715101189145" alt="home">CONTACT US </Link>
                </li>
                <li>
                  <Link href="https://form.jotform.com/211394934568062" alt="home">GET A QUOTE </Link>
                </li>
                </ul>
              </div>
            </Grid>
            <Grid item xs={6} sm={3}>
              <div>
              <ul>
                <li>
                  <a
                    href="https://www.linkedin.com/company/bbi-logistics"
                    target="_blank"
                  >
                    <LinkedInIcon
                      style={{ color: blue[800] }}
                      fontSize="large"
                    />
                  </a>
                  <a
                    href="https://www.instagram.com/bbilogistics/"
                    target="_blank"
                  >
                    <InstagramIcon
                      style={{ color: blue[800] }}
                      fontSize="large"
                    />
                  </a>
                  <a
                    href="https://www.facebook.com/BBILogistics"
                    target="_blank"
                  >
                    <FacebookIcon
                      style={{ color: blue[800] }}
                      fontSize="large"
                    />
                  </a>
                </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </footer>
  )
}
