import { Button, Card, Container, Grid, Paper } from "@material-ui/core"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import bg from "../../images/comb1.png"
import "aos/dist/aos.css"
import { useEffect } from "react"
import Layout from "../../components/Layout"
import CardActionArea from "@material-ui/core/CardActionArea"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import CardMedia from "@material-ui/core/CardMedia"
import styled from "styled-components"
import Typography from "@material-ui/core/Typography"
import { grey } from "@material-ui/core/colors"
import FacebookIcon from "@material-ui/icons/Facebook"
import InstagramIcon from "@material-ui/icons/Instagram"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import { makeStyles, createStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      
      
      paddingBottom: 30,
      
      
    },
  })
)



export default function Career() {
  const data = useStaticQuery(graphql`
    query careerPage {
      head: file(relativePath: { eq: "meet-bbi.jpg" }) {
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
      lind: file(relativePath: { eq: "lind.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      aj: file(relativePath: { eq: "AjH.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      josh: file(relativePath: { eq: "JoshH.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      luzy: file(relativePath: { eq: "LuzyH.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      laura: file(relativePath: { eq: "LauraH.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      lexi: file(relativePath: { eq: "LexiH.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      adam: file(relativePath: { eq: "AdamH.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      Growth: file(relativePath: { eq: "401k.webp" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      Map: file(relativePath: { eq: "energetic.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      Truck: file(relativePath: { eq: "highfive.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      med: file(relativePath: { eq: "medical.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      profit: file(relativePath: { eq: "profit.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      pto: file(relativePath: { eq: "pto.png" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      building: file(relativePath: { eq: "building.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      cbus1: file(relativePath: { eq: "tampa.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      night: file(relativePath: { eq: "content.jpg" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      cord: file(relativePath: { eq: "ac.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      special: file(relativePath: { eq: "sales.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      caron: file(relativePath: { eq: "on.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      bptw: file(relativePath: { eq: "bptwlogo.png" }) {
        childImageSharp {
          fluid(maxWidth: 2048, quality: 100) {
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
      <div className="headercontainer ">
        <div className="header">
          <Img
            className="headimage"
            fluid={data.head.childImageSharp.fluid}
            alt="humanity"
          />
        </div>
        <div className="headercontent ">
          <h1>JOIN OUR TEAM</h1>

          <Button
            href="#pos"
            className="nowrap faux2"
            style={{ color: grey[50] }}
          >
            VIEW OPEN POSITIONS
          </Button>

          <Grid container className="icons">
            <Grid>
              <a
                href="https://www.linkedin.com/company/bbi-logistics"
                target="_blank"
              >
                <LinkedInIcon style={{ color: grey[50] }} fontSize="large" />
              </a>
              <a href="https://www.instagram.com/bbilogistics/" target="_blank">
                <InstagramIcon style={{ color: grey[50] }} fontSize="large" />
              </a>
              <a href="https://www.facebook.com/BBILogistics" target="_blank">
                <FacebookIcon style={{ color: grey[50] }} fontSize="large" />
              </a>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className="belowtext cushion">
        <div style={{ backgroundImage: `url(${bg})` }}>
          <h1>TEAMWORK</h1>
          <p>"We accomplish more working together than we do working alone"</p>
          <Img
                  fluid={data.bptw.childImageSharp.fluid}
                  alt="humanity"
                  className="widthpic"
                />
        </div>
      </div>
      <Container maxWidth={false} className="cushion" data-aos="fade-right">
        <Container className="cushion">
          <h1 className="blue2 cushion center ">OFFICE LOCATIONS</h1>
          <Grid container spacing={6}>
            <Grid item xs={12} sm={6}>
              <div className="location">
                <Img
                  className="locimage pop"
                  fluid={data.building.childImageSharp.fluid}
                  alt="humanity"
                />
                <h2>COLUMBUS, OHIO</h2>
                <p>HEADQUARTERS</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="location">
                <Img
                  className="locimage pop "
                  fluid={data.cbus1.childImageSharp.fluid}
                  alt="humanity"
                />
                <h2>TAMPA, FLORIDA</h2>
                <p>*OPENING NOV, 2021</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Container>

      <Container id="pos" maxWidth={false} className=" pos" data-aos="fade-left">
        <Container className="cushion">
          <h1 className="blue2 cushion center ">OPEN POSITIONS</h1>
          <Grid className="cred cushion" container spacing={4}>
            <Grid item xs={12} sm={3}>
              <Card >
                <Img fluid={data.cord.childImageSharp.fluid} alt="humanity" />

                <CardContent>
                  <p className="text-color-blue ">Account Coordinator</p>
                  
                <CardActions className ="pbutt " >
                  <Button
                    href="positions/accountcoordinator/"
                    style={{ color: grey[50] }}
                    size="large"
                   
                  >
                    Learn More
                  </Button>
                </CardActions>
                </CardContent>

              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card>
                <Img
                  fluid={data.special.childImageSharp.fluid}
                  alt="humanity"
                />

                <CardContent>
                  <p className="text-color-blue ">Sales Account Specialist</p>
                  <CardActions className="pbutt">
                  <Button
                    href="positions/salesaccountspecialist/"
                    style={{ color: grey[50] }}
                    size="large"
                  >
                    Learn More
                  </Button>
                </CardActions>
                </CardContent>

                
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card>
                <Img
                  fluid={data.caron.childImageSharp.fluid}
                  alt="humanity"
                 
                />

                <CardContent>
                  {/* <Typography gutterBottom variant="h5" component="p" className="text-color-blue"> */}
                  <p className="text-color-blue ">
                    Carrier Onboarding Specialist{" "}
                  </p>
                  <CardActions className="pbutt">
                  <Button
                    href="positions/carrieronboarding/"
                    style={{ color: grey[50] }}
                    size="large"
                  >
                    Learn More
                  </Button>
                </CardActions>
                </CardContent>

               
              </Card>
            </Grid>
            <Grid item xs={12} sm={3}>
              <Card>
                <Img fluid={data.night.childImageSharp.fluid} alt="humanity" />

                <CardContent>
                  <p className="text-color-blue">Content Creator / Designer</p>
                  <CardActions className="pbutt">
                  {/* <Button
                    className={classes.button}
                    style={{ color: grey[50] }}
                    size="large"
                  >
                    Share
                  </Button> */}
                  <Button
                    href="positions/contentcreator/"
                    style={{ color: grey[50] }}
                    size="large"
                  >
                    Learn More
                  </Button>
                </CardActions>
                </CardContent>

               
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Container>
      
      <Container maxWidth={false} className="cushion" data-aos="fade-up">
        <h1 className="unhide">MEET OUR TEAM</h1>
        <Meet>
          <Card1 className="hide">
            <h1>MEET OUR TEAM</h1>
          </Card1>
          <Card1>
            <AImg
              className="pop "
              fluid={data.lind.childImageSharp.fluid}
              alt="Logo"
            />
            <Overlay>
              <Text>
                "I love the people I work with and the environment those people
                create; comfortable and fun. I have great degree of control and
                freedom within my job. I have a boss that allows me to innovate
                and create. It makes coming to work everyday fun and exciting."
                <br></br>
                <br></br>
                -Lindsey Wessinger
              </Text>
            </Overlay>
          </Card1>
          <Card1>
            <AImg
              className="pop"
              fluid={data.aj.childImageSharp.fluid}
              alt="Logo"
            />
            <Overlay>
              <Text>
                "BBI is unlike any other place I have worked. The oppurtunity to
                create your own success with very few limitatioins in your own
                way is something I cherish and what makes this company so great
                to work for. The people here truly make this a family feel. What
                we have been able to put together is special and I hope all of
                those that come to work for BBI share the same goals!"
                <br></br>
                <br></br>
                -Albert Trapasso
              </Text>
            </Overlay>
          </Card1>
          <Card1>
            <AImg
              className="pop"
              fluid={data.laura.childImageSharp.fluid}
              alt="Logo"
            />
            <Overlay>
              <Text>
                "I made a huge career change when I started at BBI. It was a
                leap of faith and I couldn't be happier that I made the switch!
                I love all my co-workers, the laid-back environment, and the
                fact that every day is different."
                <br></br>
                <br></br>
                -Laura Smith
              </Text>
            </Overlay>
          </Card1>
          <Card1>
            <AImg
              className="pop"
              fluid={data.adam.childImageSharp.fluid}
              alt="Logo"
            />
            <Overlay>
              <Text>
                "The culture and atmosphere we have at BBI makes it an enjoyable
                place to come in every day and grind. The work we do is
                challenging but it comes with a high reward. Every day is
                completely different, which keeps you on your toes. There is an
                unlimited amount of growth and oppurtunity within this evolving
                industry. I have found a long-term career at BBI."
                <br></br>
                <br></br>
                -Adam Kraemer
              </Text>
            </Overlay>
          </Card1>
          <Card1>
            <AImg
              className="pop"
              fluid={data.luzy.childImageSharp.fluid}
              alt="Logo"
            />
            <Overlay>
              <Text>
                "The thing I enjoy most about working at BBI is the energy that
                surrounds the office. Everyone is willing to help each other and
                work together as a team! The harder you work the more
                flexibility you have. Working here has allowed me to create long
                lasting frienships and expand my overall knowledge within the
                industry."
                <br></br>
                <br></br>
                -Luzy Almonte
              </Text>
            </Overlay>
          </Card1>
          <Card1>
            <AImg
              className="pop"
              fluid={data.josh.childImageSharp.fluid}
              alt="Logo"
            />
            <Overlay>
              <Text>
                "BBI not only gave me a career, but also gave me a passion. The
                work ethic and knowledge put on display every day by our
                leadership is truly inspiring. I wake up eager to get started
                because I know each day spent at BBI is day of improving and
                getting me one step closer to my dreams."
                <br></br>
                <br></br>
                -Joshua DeLozier
              </Text>
            </Overlay>
          </Card1>
          <Card1>
            <AImg
              className="pop"
              fluid={data.lexi.childImageSharp.fluid}
              alt="Logo"
            />
            <Overlay>
              <Text>
                "Before starting at BBI Logistics I felt like my job was just a
                job. I was working 9-5 and that was it. I never felt like I was
                appreciated for the work I did. Once I started at BBI that
                feeling changed. I love coming to work, seeing my co-workers,
                and enjoying the time that I am here. I always feel like people
                are appreciative of the work I am doing. I am amazed with how
                fast we have grown over the last couple years and cannot wait to
                see where the next 5 will take us."
                <br></br>
                <br></br>
                -Lexi Enderby
              </Text>
            </Overlay>
          </Card1>
        </Meet>
      </Container>

      <Container className="cushion" data-aos="fade-down">
        <h1 className="center blue2 cushion">WORK PERKS</h1>
        <Grid className="cred " container>
          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.pto.childImageSharp.fluid} alt="humanity" />
              <p>PTO</p>
            </div>
          </Grid>
          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.Map.childImageSharp.fluid} alt="humanity" />
              <p>ENERGETIC OFFICE</p>
            </div>
          </Grid>
          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.profit.childImageSharp.fluid} alt="humanity" />
              <p>PROFIT SHARING</p>
            </div>
          </Grid>
        </Grid>
        <Grid className="cred" container>
          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.med.childImageSharp.fluid} alt="humanity" />
              <p>HEALTH INSURANCE (+ DENTAL & VISION)</p>
            </div>
          </Grid>
          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.Growth.childImageSharp.fluid} alt="humanity" />
              <p>EMPLOYEE 401K WITH MATCH</p>
            </div>
          </Grid>

          <Grid item xs={8} sm={2}>
            <div>
              <Img fluid={data.Truck.childImageSharp.fluid} alt="humanity" />
              <p>CELEBRATION & RECOGNITION</p>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

const Meet = styled.div`
  object-fit: cover;
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr 0.5fr;
  text-align: center;
  justify-items: center;
  margin: 0 auto;
  align-items: center;
  width: 90%;
  grid-gap: 40px;
  padding-top: 20px;
  padding-bottom: 20px;

  h1 {
    margin: 0;
  }

  @media screen and (max-width: 1750px) {
    object-fit: cover;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr 0.5fr;
    text-align: center;
    justify-items: center;
    margin: 0 auto;
    align-items: center;
    width: 100%;
    grid-gap: 40px;
  }

  @media screen and (max-width: 1300px) {
    object-fit: cover;
    display: grid;
    grid-template-columns: 0.5fr 0.5fr;
    text-align: center;
    justify-items: center;
    margin: 0 auto;
    align-items: center;
    width: 100%;
    grid-gap: 40px;
    padding: 20px;
  }

  @media screen and (max-width: 950px) {
    display: flex;
    width: 85%;
    padding: 0px;
    height: 50vh;
    h1 {
      display: none;
    }
    overflow: auto;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    justify-content: flex-start;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }

    .gatsby-image-wrapper {
      box-sizing: inherit;
    }
  }
`

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: auto;
  width: auto;
  opacity: 0;
  transition: 0.5s ease;
  background-color: #314e7cb3;
  border-radius: 250px;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 950px) {
    margin: 10px;
    height: auto;
    width: auto;
    border-radius: 10px;
  }
`
const Text = styled.div`
  color: white;
  font-size: 13px;
  position: absolute;
  top: 50%;
  width: 85%;
  padding-top: 20px;
  left: 50%;
  text-shadow: 2px 2px 4px #000000;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  @media screen and (max-width: 950px) {
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    white-space: pre-wrap;
    font-size: 11px;
  }
`

const Card1 = styled.div`
  object-fit: cover;
  height: 400px;
  width: 400px;
  position: relative;
  border-radius: 10px;
  p {
    font-size: 0;
  }
  h1 {
    font-size: 100px;
  }

  @media screen and (max-width: 950px) {
    h1 {
      white-space: pre-wrap;
      font-size: 100px;
      text-align: center;
      justify-content: center;
      padding-left: 40px;
    }
    p {
      font-size: 15px;
      white-space: pre-wrap;
      width: inherit;
    }
    width: 500px;
    padding: 10px;
    border: 0px;
    width: auto;
    height: auto;
  }
`

const AImg = styled(Img)`
  padding: 30px;
  border-radius: 250px;
  display: block;

  @media screen and (max-width: 950px) {
    width: 350px;
  }
  @media screen and (max-width: 950px) {
    justify-content: start;
    background: whitesmoke;
    padding: 20px;
    height: 270px;
    width: 250px;
    border-radius: 10px;
  }
`
