import { Button, Card, Container, Grid, Paper } from "@material-ui/core"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "aos/dist/aos.css"
import Layout from "../../../components/Layout"
import { grey } from "@material-ui/core/colors"

export default function ContentCreator() {
  const data = useStaticQuery(graphql`
    query creatorPage {
      head: file(relativePath: { eq: "content2.jpg" }) {
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
              <h1>Content Creator</h1>
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
              BBI is looking for a creative and motivated individual to join our
              rapidly growing team. The Content Creator concepts, designs,
              develops, and executes breakthrough marketing materials that helps
              enhance our brand. Delivers work that consistently reaches our
              intended audience through social platforms, traditional media,
              digital media, print, email, and website with appropriate message
              hierarchy and design aesthetics.
            </p>
          </div>
          <div>
            <h3>What you’ll be doing:</h3>
            <ul>
              <li>
                <span>
                  Research industry-related topics and coordinate content ideas
                  with our marketing team.
                </span>
              </li>
              <li>
                <span>Portfolio showcasing work, preferred.</span>
              </li>
              <li>
                <span>
                  Ensure final work is ready for production in any number of
                  in-house and off-site printing.
                </span>
              </li>
              <li>
                <span>
                  Concept, produce, shoot and edit photos and videos for
                  promotion or training purposes.
                </span>
              </li>
              <li>
                <span>
                  Continually stay aware of influences on graphic design,
                  typographic techniques, software and visual trends.
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h3>What we’re looking for:</h3>
            <ul>
              <li>
                <span>
                  Bachelor’s degree in Marketing, Graphic Design, Visual
                  Communications or relevant field preferred.
                </span>
              </li>
              <li>
                <span>Portfolio showcasing work, preferred.</span>
              </li>
              <li>
                <span>
                  Experienced in graphic design, content creation and animation
                  for a range of channels and audiences.
                </span>
              </li>
              <li>
                <span>Photography experience is nice to have.</span>
              </li>
              <li>
                <span>Highly structured and keen attention to detail.</span>
              </li>
              <li>
                <span>Able to work quickly without sacrificing quality.</span>
              </li>
              <li>
                <span>Strong work ethic, self-motivation, and drive.</span>
              </li>
              <li>
                <span>
                  Possess strong organizational and time management skills.
                </span>
              </li>
              <li>
                <span>Confident decision-making abilities.</span>
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
