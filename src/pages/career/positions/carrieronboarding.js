import { Button, Card, Container, Grid, Paper } from "@material-ui/core"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "aos/dist/aos.css"
import Layout from "../../../components/Layout"
import { grey } from "@material-ui/core/colors"

export default function CarrierOnBaording() {
  const data = useStaticQuery(graphql`
    query carrierOnPage {
      head: file(relativePath: { eq: "AccountSpecialist.jpg" }) {
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
              <h1>Carrier On Boarding</h1>
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
            BBI Logistics is seeking to add a Carrier Onboarding Specialist to our newly developed carrier onboarding team! You will be responsible for working with the carrier onboarding team in order to approve all new carriers in our TMS system and working closely with the accounting team and brokers. You will be fielding inbound calls and conducting outbound calls to ensure all paperwork is received and processed accurately. This role is an opportunity to learn and grow within a new department. You must have a strong attention to detail as well as the ability to actively problem solve and stay organized in a fast-paced environment. We were just voted a Best Place to Work by Columbus Business First for the 2nd year in a row!
            </p>
          </div>
          <div>
            <h3>What you’ll be doing:</h3>
            <ul>
              <li>
                <span>
                Responsible for working with the carrier onboarding team in order to approve all new carriers in our TMS system.
                </span>
              </li>
              <li>
                <span>Responsible for inputting the correct data into each carrier profile.</span>
              </li>
              <li>
                <span>
                Will need to make sure all carrier information is SaferWatch certified and matches up correctly to prevent any carrier fraud.
                </span>
              </li>
              <li>
                <span>
                Will need to communicate with insurance companies to review carrier insurance information to verify each new carrier has the correct insurance limits.
                </span>
              </li>
              <li>
                <span>
                Contact carriers to secure necessary documents.
                </span>
              </li>
              <li>
                <span>
                Communicate with brokers once the carrier onboarding process is complete or also in case the onboarding process is denied for any reason.
                </span>
              </li>
              <li>
                <span> Responsible for communicating with carriers throughout the day via phone and email.Contact carriers to secure necessary documents.
                </span>
              </li>
              <li>
                <span>
                Will also be working closely with the accounting team in order to help with overflow work, such as checking carrier payment status or helping resolve proof of delivery paperwork issues.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3>What we’re looking for.</h3>
            <ul>
              <li>
                <span>
                Strong attention to detail and organizational skills.
                </span>
              </li>
              <li>
                <span>Ability to work in a team setting.</span>
              </li>
              <li>
                <span>
                Ability to multi-task, work under pressure, and meet tight deadlines.
                </span>
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
                Brand new beautiful modern office downtown overlooking the Columbus Commons.
                </span>
              </li>
              <li>
                <span>Brand new beautiful modern office downtown overlooking the Columbus Commons.</span>
              </li>
              <li>
                <span>
                Brand new beautiful modern office downtown overlooking the Columbus Commons.
                </span>
              </li>
              <li>
                <span>FREE downtown parking near numerous restaurants.</span>
              </li>
              <li>
                <span>Thorough training program to ensure success with every employee.</span>
              </li>
              <li>
                <span>Fast-growing company with unlimited growth opportunities. Opportunity to get in at the ground level.</span>
              </li>
              <li>
                <span>Laid back yet energetic, work hard play hard company culture.</span>
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
            <p>
              BBI Logistics is an Equal Opportunity Employer. All qualified
              applicants will receive consideration for employment without
              regard to race, color, religion, sex, sexual orientation, gender
              identity, age, national origin, genetic information, disability or
              protected veteran status.
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
        <Container className=" cushion ">
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
