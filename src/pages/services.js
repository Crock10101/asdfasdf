import {
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core"
import React from "react"
import Layout from "../components/Layout"
import "../styles/services.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import bg from "../images/comb1.png"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import { grey } from "@material-ui/core/colors"

import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    height: "100%",
    
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightBold,
  },
}))

export default function Services() {
  const data = useStaticQuery(graphql`
    query servicePage {
      head: file(relativePath: { eq: "Services.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      Pull: file(relativePath: { eq: "BBIT.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      right: file(relativePath: { eq: "rightTruck.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      full: file(relativePath: { eq: "serv1.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      ltl: file(relativePath: { eq: "serv2.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      intermodal: file(relativePath: { eq: "serv4.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      heavy: file(relativePath: { eq: "serv5.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      exp: file(relativePath: { eq: "serv3.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      special: file(relativePath: { eq: "serv6.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      ltlpic: file(relativePath: { eq: "ServicesPic3.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      exppic: file(relativePath: { eq: "ServicesPic1.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      intermodalpic: file(relativePath: { eq: "ServicesPic2.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  const classes = useStyles()

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
      <div className="headercontainer">
        <div className="header">
          <Img
            className="headimage"
            fluid={data.head.childImageSharp.fluid}
            alt="humanity"
          />
        </div>
        <div className="headercontent">
          <h1>BOOK YOUR FREIGHT</h1>
          <Button href="#service"
            className="nowrap faux2"
            style={{ color: grey[50] }}>VIEW SERVICES</Button>
        </div>
      </div>
      <div className="belowtext cushion">
        <div style={{ backgroundImage: `url(${bg})` }}>
          <h1>RELIABILITY</h1>
          <p>"We deliver on promises to each other and our customers"</p>
        </div>
      </div>
      <body>
        <Container id="service" className="cushion">
        <h1 className="center blue2">SERVICES</h1>
        <Grid
          className="cred cushion services"
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
          
        >
          <Grid item xs={8} sm={3} data-aos="zoom-in-up">
            <div>
              <Img fluid={data.full.childImageSharp.fluid} alt="humanity" />
              <div className={classes.root}>
                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                   
                    <Typography textAlign="center" className={classes.heading}>
                      FULL TRUCKLOAD
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className = "cardstyle">
                      <h2 className="linesmall temph">SERVICES</h2>
                      <ul>
                        <li>Temp Controlled</li>
                        <li>Dry Van</li>
                        <li>Flatbed</li>
                        <li>Step Deck</li>
                        <li>Expedited</li>
                        <li>Dedicated Fleet</li>
                      </ul>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </Grid>
          <Grid item xs={8} sm={3} data-aos="zoom-in-up">
            <div>
              <Img fluid={data.ltl.childImageSharp.fluid} alt="humanity" />
              <div className={classes.root}>
                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                   
                    <Typography textAlign="center" className={classes.heading}>
                      LESS THAN TRUCKLOAD
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className = "cardstyle">
                      <h3 className="linesmall temph">SERVICES</h3>
                      <ul>
                        <li>Traditional LTL</li>
                        <li>Partial Truckload</li>
                        <li>Sprinters</li>
                        <li>Hotshots</li>
                        <li>Expedited</li>
                        <li>PO Consolidation</li>
                        <li>Route Optimization</li>
                      </ul>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </Grid>
          <Grid item xs={8} sm={3} data-aos="zoom-in-up">
            <div>
              <Img fluid={data.exp.childImageSharp.fluid} alt="humanity" />
              <div className={classes.root}>
                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    
                    <Typography textAlign="center" className={classes.heading}>
                      EXPEDITED
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails Wrap>
                    <div className = "cardstyle">
                      <h3 className="linesmall temph">SERVICES</h3>
                      <ul>
                        <li>Team Service</li>
                        <li>Load Recovery</li>
                        <li>Sprinter Vans</li>
                        <li>Track & Trace Visibility</li>
                        <li>Time Critical Response</li>
                        <li>24/7/365 Dispatch</li>
                      </ul>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </Grid>
          <Grid
          className="cred cushion services"
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
          
        >
          </Grid>
          <Grid item xs={8} sm={3} data-aos="zoom-in-up"> 
            <div>
              <Img
                fluid={data.intermodal.childImageSharp.fluid}
                alt="humanity"
                
              />
              <div className={classes.root}>
                <Accordion defaultExpanded >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                   
                    <Typography textAlign="center" className={classes.heading}>
                      INTERMODAL
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className = "cardstyle">
                    <div >
                      <h3 className="linesmall temph">SERVICES</h3>
                      <ul>
                        <li>Drayage</li>
                        <li>Wholesale</li>
                        <li>Temp Controlled</li>
                        <li>Regional </li>
                        <li>Cross Country</li>
                        <li>Cross Border</li>
                      </ul>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </Grid>
          <Grid item xs={8} sm={3} data-aos="zoom-in-up">
            <div>
              <Img fluid={data.heavy.childImageSharp.fluid} alt="humanity" />
              <div class="content"></div>
              <div className={classes.root}>
                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                 
                    <Typography textAlign="center" className={classes.heading}>
                      OVERSIZED
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className = "cardstyle">
                    <div >
                      <h3 className="linesmall temph">SERVICES</h3>
                      <ul>
                        <li>Heavy Haul</li>
                        <li>Over Dimensional</li>
                        <li>RGN</li>
                        <li>Stretch Double Drop </li>
                        <li>Conestoga</li>
                        <li>Permits</li>
                        <li>Escorts</li>
                        
                      </ul>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            
          </Grid>
          <Grid item xs={8} sm={3} data-aos="zoom-in-up">
            <div>
              <Img fluid={data.special.childImageSharp.fluid} alt="humanity" />
              <div class="content"></div>
              <div className={classes.root}>
                <Accordion defaultExpanded>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                 
                    <Typography textAlign="center" className={classes.heading}>
                      SPECIALIZED
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails className = "cardstyle">
                    <div >
                      <h3 className="linesmall temph">SERVICES</h3>
                      <ul>
                        <li>Power Only Drivers</li>
                        <li>Direct Store Delivery</li>
                        <li>Multi-Temp Loads </li>
                        <li>High Value Cargo</li>
                        <li>Trailer Pools </li>
                        <li>Sprinters</li>
                        <li>Hotshots</li>
                        <li>Dedicated Seasonal Capacity </li>
                        
                      </ul>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            
          </Grid>
        </Grid>
        </Container>
      </body>
    </Layout>
  )
}
