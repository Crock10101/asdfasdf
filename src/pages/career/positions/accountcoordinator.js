import { Button, Card, Container, Grid, Paper } from "@material-ui/core"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "aos/dist/aos.css"
import Layout from "../../../components/Layout"
import { grey } from "@material-ui/core/colors"

export default function Accountcoordinator() {
  const data = useStaticQuery(graphql`
    query accountPage {
      head: file(relativePath: { eq: "AccountCoordinator.jpg" }) {
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
      <div className="cushion">
        <div className="headercontainer2">
          <div className="header">
            <Img
              className="headimage"
              fluid={data.head.childImageSharp.fluid}
              alt="humanity"
            />
          </div>
          <div className="headercontent2">
            <h1>Account Coordinator</h1>
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <Container maxWidth="md" className="positions">
          <div>
            <h3>Life is short. Work somewhere awesome.</h3>

            <p>
              BBI Logistics is seeking an entry level accounting coordinator to
              join our rapidly growing company! Under the supervision of the
              Accounting Supervisor, you will assist with both the Accounts
              Payable and Receivable processes for freight brokerage services.
              You will be fielding inbound calls and conducting outbound calls
              to ensure all paperwork is received and processed accurately. This
              role is an opportunity to learn and grow within a new department.
              You must have a strong attention to detail as well as the ability
              to actively problem solve and stay organized in a fast-paced
              environment. We were just voted a Best Place to Work by Columbus
              Business First for the 2nd year in a row!
            </p>
          </div>
          <div>
            <h3>What you’ll be doing:</h3>

            <ul>
              <li>
                <span>
                  {" "}
                  Manage Account Specialist’s portfolio of accounts through
                  constant communication with customers and carriers.
                </span>
              </li>
              <li>
                <span>
                  Screen carriers to find quality, reliable, and consistent
                  drivers.
                </span>
              </li>
              <li>
                <span>
                  Handle all customer and carrier issues in a professional and
                  timely manner.
                </span>
              </li>
              <li>
                <span>
                  Maintain and update carrier database to company’s standard
                  operating procedures.
                </span>
              </li>
              <li>
                <span>
                  Analyze and negotiate rates based on current market price.
                </span>
              </li>
              <li>
                <span>
                  Handle a high volume of inbound phone calls from drivers and
                  carriers looking to book loads in a timely manner.
                </span>
              </li>
              <li>
                <span>
                  Conduct outbound check calls to current drivers and carriers.
                </span>
              </li>
              <li>
                <span>
                  Manage and resolve daily carrier service issues, failures, and
                  delays.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3>What we’re looking for:</h3>

            <ul>
              <li>
                <span>
                  {" "}
                  Strong work ethic, self-motivation, and sales drive.
                </span>
              </li>
              <li>
                <span>
                  {" "}
                  Possess strong organizational and time management skills.
                </span>
              </li>
              <li>
                <span> Customer Service or Sales experience preferred.</span>
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
            <h3>Who we are:</h3>

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
        </Container>
        <div className="center cushion faux">
          <Button
            href="https://form.jotform.com/211125031103128"
            style={{ color: grey[50] }}
            className="Button "
          >
            Apply Now
          </Button>
        </div>

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
