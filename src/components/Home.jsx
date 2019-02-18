import React, { Component } from 'react'
import {Jumbotron,Row, Col, Image } from 'react-bootstrap'
import './Home.css';


export default class Home extends Component {
  render() {
    return (
      <div >
     <Jumbotron className="HomeJumbo">
          <h2>Zow Consultancy</h2>
          <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
        </Jumbotron>

        <Row>
          <Col>
            <Image className='roundProfile' src="./assets/asd.jpg"></Image>
            <h3>Lorem Ipsum </h3>
            <p>Lorem Ipsum Lorem Ipsum Lorem </p></Col>
        </Row>
        <Row>
          <Col>
        <Image className='roundProfile' src="./assets/asd.jpg"></Image>
            <h3>Lorem Ipsum </h3>
            <p>Lorem Ipsum Lorem Ipsum Lorem </p></Col>
          
        </Row>

      </div>
    )
  }
}
