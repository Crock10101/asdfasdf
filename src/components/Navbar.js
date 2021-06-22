import React, { Component } from "react"
import { MenuItems } from "./MenuItems"
import "../styles/global.css"
import "font-awesome/css/font-awesome.min.css"
import classnames from "classnames"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Logo from "../images/HomeIcon3.png"
import Logo2 from "../images/Blogo.webp"
import { useState, useEffect } from "react"

class Navbar extends Component {
  state = { clicked: false }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
  }

  constructor(props) {
    super(props)

    this.state = {
      visible: true,
    }
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.handleScroll)
    }
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", this.handleScroll)
    }
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state

    const currentScrollPos = window.pageYOffset
    const visible =  prevScrollpos >= currentScrollPos || currentScrollPos <= 100

  
    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    })
  }

  render() {
    return (
      <nav
        className={classnames("NavbarItems", {
          "NavbarItems--hidden": !this.state.visible,
        })}
      >
        <div>
        <Link href="/" alt="home">
          {" "}
          <img className="navbar-logo" src={Logo} alt="BBI long logo" />{" "}
        </Link>
        <Link href="/" alt="home small">
          <img className="navbar-logo2" src={Logo2} alt="BBI small logo" />
        </Link>
      
        
        </div>
        <a className="number" href="tel:1-614-927-1200" alt="phone number">
          (800) 809-2172
        </a>
        <div className="menu-icon" onClick={this.handleClick}>
          <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"}></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            )
          })}
        </ul>
      </nav>
    )
  }
}

export default Navbar
