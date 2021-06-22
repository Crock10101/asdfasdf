import { Button, Card, Container, Grid, Paper } from "@material-ui/core"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "aos/dist/aos.css"
import Layout from "../../../components/Layout"
import { grey } from "@material-ui/core/colors"

export default function Salesaccountspecialist() {
  const data = useStaticQuery(graphql`
    query salesPage {
      head: file(relativePath: { eq: "sales2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pic1: file(relativePath: { eq: "pic1.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 3080, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pic2: file(relativePath: { eq: "pic2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2500, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pic3: file(relativePath: { eq: "pic3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2500, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pic4: file(relativePath: { eq: "pic4.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2500, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <div>
        <div className="headercontainer2">
          <div className="header">
            <Img
              className="headimage"
              fluid={data.head.childImageSharp.fluid}
              alt="humanity"
            />
          </div>
          <Container maxWidth="md">
            <div className="headercontent2">
              <h1>Sales Account Specialist</h1>
            </div>
          </Container>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <Container maxWidth="md" className="positions">
          <div>
            <h3>Life is short. Work somewhere awesome.</h3>

            <p>
              BBI Logistics is seeking experienced and motivated sales
              professionals to join our rapidly growing company! At BBI, you
              will focus on the fast-paced brokerage aspect of our business,
              helping customers move inventory in the most cost-effective way by
              identifying and providing logistics solutions. You will create and
              manage your individual portfolio of accounts through constant
              communication with carriers and customers. This position offers a
              competitive base salary plus unlimited earning in commission. Just
              voted a Best Place to Work by Columbus Business First for the 2nd
              year in a row!
            </p>
          </div>
          <div>
            <h3>What you’ll be doing.</h3>
            <ul>
              <li>
                <span>
                  Prospect potential customers, build, maintain, and manage
                  account relationships.
                </span>
              </li>
              <li>
                <span>
                  Market, service, and promote BBI Logistics transportation
                  products and services.
                </span>
              </li>
              <li>
                <span>
                  Establish strong relationships with clients, carriers, and
                  internal team members.
                </span>
              </li>
              <li>
                <span>
                  Effectively use systems and strategies for client prospecting
                  and pipeline management.
                </span>
              </li>
              <li>
                <span>
                  Ensure customer satisfaction and adequate service levels where
                  freight is picked up and delivered using safe and reliable
                  carriers.
                </span>
              </li>
              <li>
                <span>
                  Manage and resolve daily carrier service issues, failures, and
                  delays.
                </span>
              </li>
              <li>
                <span>
                  Conduct outbound check calls to current drivers and carriers.
                </span>
              </li>
              <li>
                <span>
                  Present the value of BBI Logistics services to prospecting and
                  existing clients.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3>What we’re looking for.</h3>
            <ul>
              <li>
                <span> 2+ years of sales or cold calling experience.</span>
              </li>
              <li>
                <span>
                  {" "}
                  Strong work ethic, self-motivation, and sales drive.
                </span>
              </li>
              <li>
                <span>
                  Possess strong organizational and time management skills.
                </span>
              </li>
              <li>
                <span>
                  Must have flexibility in schedule to work after normal
                  business hours and weekends.
                </span>
              </li>
              <li>
                <span>Confident decision-making abilities.</span>
              </li>
              <li>
                <span>Strong ability to sell and negotiate.</span>
              </li>
              <li>
                <span>Bachelor’s degree preferred.</span>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company Perks:</h3>
            <ul>
              <li>
                <span>
                  Brand new beautiful modern office downtown overlooking the
                  Columbus Commons.
                </span>
              </li>
              <li>
                <span>
                  Brand new beautiful modern office downtown overlooking the
                  Columbus Commons.
                </span>
              </li>
              <li>
                <span>
                  Brand new beautiful modern office downtown overlooking the
                  Columbus Commons.
                </span>
              </li>
              <li>
                <span>FREE downtown parking near numerous restaurants.</span>
              </li>
              <li>
                <span>
                  Thorough training program to ensure success with every
                  employee.
                </span>
              </li>
              <li>
                <span>
                  Fast-growing company with unlimited growth opportunities.
                  Opportunity to get in at the ground level.
                </span>
              </li>
              <li>
                <span>
                  Laid back yet energetic, work hard play hard company culture.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3>Who we are.</h3>

            <p>
              BBI Logistics offers transportation solutions including but not
              limited to truckload, intermodal, LTL, expedited, purchase order
              consolidation, route optimization, cold storage, expedited
              delivery, and natural disaster response. As a rapidly growing
              company, BBI is quickly becoming a premier transportation provider
              nationwide.
            </p>

            <h3>What draws people to BBI.</h3>

            <p>
              BBI’s greatest asset are the employees. The employees make the
              fast-paced and energetic culture a place people want to be. A
              place where hard work does not go unnoticed, and your impact is
              felt at every turn. Take that and couple it with endless earnings
              and growth opportunity and you have a roadmap for success.
            </p>
          </div>
          <div className="center cushion faux">
            <Button
              href="javascript:void( window.open( 'https://form.jotform.com/211125031103128', 'blank', 'scrollbars=yes, width=1200, height=1000') ) "
              style={{ color: grey[50] }}
              className="Button "
            >
              Apply Now
            </Button>
          </div>
        </Container>
        <Container className="cushion">
          <Grid container spacing={3}>
            <Grid item item xs={12} sm={3}>
              <Img
                className="headimage pop"
                fluid={data.pic1.childImageSharp.fluid}
                alt="humanity"
              />
            </Grid>
            <Grid item item xs={12} sm={3}>
              <Img
                className="headimage pop"
                fluid={data.pic2.childImageSharp.fluid}
                alt="humanity"
              />
            </Grid>
            <Grid item item xs={12} sm={3}>
              <Img
                className="headimage pop "
                fluid={data.pic3.childImageSharp.fluid}
                alt="humanity"
              />
            </Grid>
            <Grid item item xs={12} sm={3}>
              <Img
                className="headimage pop"
                fluid={data.pic4.childImageSharp.fluid}
                alt="humanity"
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  )
}
