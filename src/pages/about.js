import { Button, Card, Container, Grid } from "@material-ui/core"
import React from "react"
import Layout from "../components/Layout"
import "../styles/about.css"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import bg from "../images/comb1.png"
import { makeStyles } from "@material-ui/core/styles"
import { Helmet } from "react-helmet"
import { grey } from "@material-ui/core/colors"
import { useEffect } from "react"

const useStyles = makeStyles(theme => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  value: {
    height: "20vh",
    padding: "auto",
  },
}))

export default function About() {
  const classes = useStyles()

  const data = useStaticQuery(graphql`
    query aboutPage {
      head: file(relativePath: { eq: "about1.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      Growth: file(relativePath: { eq: "GrowthIcon.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      Map: file(relativePath: { eq: "MapIcon.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      Truck: file(relativePath: { eq: "TruckIcon.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      value: file(relativePath: { eq: "values3.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
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
        <title>BBI Logistics About Page</title>
        <meta
          name="description"
          content="This is the about page of BBI Logistics. We are on the forefront of freight and we will get  the job done fast and efficient. "
        />
      </Helmet>
      <div className="headercontainer">
        <div className="header">
          <Img
            className="headimage"
            fluid={data.head.childImageSharp.fluid}
            alt="humanity"
          />
        </div>
        <div className="headercontent">
          <h1>ABOUT US</h1>
          <Button href="/career"
            className="nowrap faux2"
            style={{ color: grey[50] }}>JOIN OUR TEAM</Button>
        
        </div>
      </div>
      <div className="belowtext cushion"  >
        <div style={{ backgroundImage: `url(${bg})` }}>
          <h1>DEDICATION</h1>
          <p>
            "We always give 100% effort. This is the one variable we can
            control"
          </p>
        </div>
      </div>
      <Container maxWidth="lg" className="cushion" data-aos="fade-down">
        <Grid className="cred" container spacing={2}>
          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.Map.childImageSharp.fluid} alt="humanity" />
              <p className="">CARRIERS IN ALL 50 STATES + CANADA</p>
            </div>
          </Grid>
          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.Truck.childImageSharp.fluid} alt="humanity" />

              <p>500,000 MILES OF DEDICATED LANES</p>
            </div>
          </Grid>
          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.Growth.childImageSharp.fluid} alt="humanity" />

              <p>400% + EMPLOYEE GROWTH IN 3 YEARS</p>
            </div>
          </Grid>
        </Grid>
      </Container>
      <Container className="timeline cushion"  data-aos="fade-up">
        <div style={{ backgroundImage: `url(${bg})` }}>
          <h1>OUR STORY</h1>
          <Container maxWidth="sm">
            <div>
              <p>
                BBI was established on November 1st, 2017, when the first
                truckload was booked to run from Utah to Pennsylvania. The first
                employees ran all operations from the small startup office at
                Easton Town Center in Columbus, OH. Within the first year of
                operation BBI Logistics grossed $12 million in revenue and grew
                headcount to 19 employees and that was truly just the
                beginning...
              </p>

              <p>
                At the end of 2019 BBI relocated to a 20,000 sq ft office in
                downtown Columbus, and started off 2020 with 55 employees. We
                navigated our way through unprecedented times during the global
                pandemic and continued our growth objective to finish the year
                at 85 employees
              </p>
              <p>
                {" "}
                In the 2nd quarter of 2021 BBI hit the 100 employee mark! By the
                end of the year BBI will establish roots in the Southeast with a
                new sales office in Tampa, FL.
              </p>
            </div>
          </Container>
        </div>
      </Container>

      <div>
        <Container className="cushion"  data-aos="fade-right">
          <div className="header2">
            <Img
              className="headimage"
              fluid={data.value.childImageSharp.fluid}
              alt="humanity"
            />
            <div className="headercontent3">
              <h1 className="white">OUR MISSION & VALUES</h1>
            </div>
          </div>
        </Container>
        <Container className="cushion" style={{ backgroundImage: `url(${bg})` }} data-aos="fade-left">
          <h2 className="small">MISSION</h2>
          <p > 
            <span className="darkblue">Built on Better Integrity</span>, a
            company that customers endorse, carriers prefer, and employees are
            proud of. We go the extra mile to ensure exceptional transportation
            solutions and scalability.
          </p>

          <h2 className="small">VALUES</h2>
          <Grid
            className="values cushion"
            justify="space-evenly"
            container
            spacing={4}
          >
            <Grid item xs={12} sm={4}>
              <Card className="cardstyle2"data-aos="zoom-in">
                <div>
                  <h3>DEDICATION</h3>
                  <p>
                    WE ALWAYS GIVE 100% EFFORT. THIS IS THE ONE VARIABLE WE CAN
                    CONTROL.
                  </p>
                </div>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card className="cardstyle2" data-aos="zoom-in">
                <div>
                  <h3>PHILANTHROPIC</h3>
                  <p>WE GIVE BACK TO THE COMMUNITIES IN WHICH WE WORK</p>
                </div>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Card className="cardstyle2"data-aos="zoom-in">
                <div>
                  <h3>RELIABILITY</h3>
                  <p>
                    WE DELIVER ON PROMIES TO EACH OTHER AND TO UT CUSTOMERS.
                  </p>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className="cardstyle2" data-aos="zoom-in">
                <div>
                  <h3>TEAMWORK</h3>
                  <p>
                    WE ACCOMPLISH MORE WORKING TOGETHER THAN WE DO WORKING ALONE
                  </p>
                </div>
              </Card>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Card className="cardstyle2" data-aos="zoom-in">
                <div>
                  <h3>INTEGRITY</h3>
                  <p>
                    WE CHOOSE TO DO THE RIGHT THING IN A RELLIABLE WAY, EVEN IF
                    IT MEANS MORE WORK
                  </p>
                </div>
              </Card>
            </Grid>
          </Grid>
        </Container>
      
      </div>
    </Layout>
  )
}
