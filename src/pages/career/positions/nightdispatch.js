import { Button, Card, Container, Grid, Paper } from "@material-ui/core"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import "aos/dist/aos.css"
import Layout from "../../../components/Layout"
import { grey } from '@material-ui/core/colors';

export default function Nightdispatch() {
  const data = useStaticQuery(graphql`
    query nightPage {
      head: file(relativePath: { eq: "Night.jpg" }) {
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
            <h1>Night Dispatch</h1>
          </div>
        </div>

     
       
      </div>
      <br></br>
      
       
      <Container maxWidth="md" className="positions">
      <div>
        <h3>The position:</h3>
       
        <p>
          BBI Logistics offers transportation solutions including, but not
          limited to truckload, intermodal, LTL, expedited, purchase order
          consolidation, route optimization, cold storage, and disaster
          response. As a part of our support team, you will act as the lifeline
          between our sales team and transportation partners.
        </p>
      </div>
      <div>
        
        <h3>What you’ll be doing.</h3>
        
        <ul>
          <li>
            <span>
              Handle a high volume of inbound and outbound phone calls, ensuring
              pick up and deliveries are on schedule.
            </span>
          </li>
          <li>
            <span>
              Build relationships with carriers and customers to understand
              needs and ensure an excellent customer service experience.
            </span>
          </li>
          <li>
            <span>
              Responsible for the coordination, scheduling, and planning of
              customer freight shipments.
            </span>
          </li>
          <li>
            <span>
              Analyze and negotiate rates with carriers based on current market
              prices.
            </span>
          </li>
          <li>
            <span>
              Update Account Managers on any issues that arise throughout and
              resolve issues in a timely and professional manner.
            </span>
          </li>
          <li>
            <span> Ensure all proper paperwork is received for billing.</span>
          </li>
          <li>
            <span>
              Work efficiently and effectively in a fast-paced environment.
            </span>
          </li>
          <li>
            <span>
              Document and manage all tasks in our internal systems.
            </span>
          </li>
          <li>
            <span>
              Respond to customers efficiently, thoroughly, and professionally.
            </span>
          </li>
        </ul>
      </div>
      <div>
        
        <h3>What we’re looking for.</h3>
        <ul>
            <li>
            <span> High School Diploma. Bachelor’s Degree preferred.</span>
            </li>
            <li>
            <span> 2+ years of relevant, customer service experience.</span>
                </li>
                <li>
                <span>
          Self-motivated with a strong desire to meet customer needs.
        </span>
                </li>
                <li>
                <span>
          Desire for a long-term career with a fast-growing company.
        </span>
                </li>
                <li>
                <span>
          Transportation industry knowledge and experience is a plus.
        </span>
                </li>
                <li>
                <span>
          Must be able to work a flexible schedule, including weekends.
        </span>
                </li>
        </ul>
  
        
        
       
      </div>
      <div>
      
        <h3>Who we are.</h3>
       
        <p>
          BBI Logistics offers transportation solutions including but not
          limited to truckload, intermodal, LTL, expedited, purchase order
          consolidation, route optimization, cold storage, expedited delivery,
          and natural disaster response. As a rapidly growing company, BBI is
          quickly becoming a premier transportation provider nationwide.
        </p>
      
        <h3>What draws people to BBI.</h3>
       
        <p>
          BBI’s greatest asset are the employees. The employees make the
          fast-paced and energetic culture a place people want to be. A place
          where hard work does not go unnoticed, and your impact is felt at
          every turn. Take that and couple it with endless earnings and growth
          opportunity and you have a roadmap for success.
        </p>
       
      </div>
      <div className="center cushion faux">
          <Button href="javascript:void( window.open( 'https://form.jotform.com/211125031103128', 'blank', 'scrollbars=yes, width=1200, height=1000') ) " style={{ color: grey[50] }} className="Button ">Apply Now</Button>
          </div>
      </Container>
      <Container>
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
    </Layout>
  )
}
