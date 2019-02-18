import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import './CustomNavbar.css';


export default class CustomNavBar extends Component {


  render() {
    return (
      <>
        <br /><div className="navBar">
        <Navbar className= "navBar"  variant="dark">
          <Navbar.Brand href="/">Zow Consultancy</Navbar.Brand>
          <Nav className="mr-auto">

            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/news">News</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar></div>


      </>
    )
  }
}
