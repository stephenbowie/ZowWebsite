import React, { Component } from 'react'
import { Jumbotron } from 'react-bootstrap'
import { Row, Col } from 'react-bootstrap'

export default class Contact extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="HomeJumbo">
          <h2>Contact us</h2>
          <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
          <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum </p>
        </Jumbotron>
        <br />
        <Row>
          <Col>
            <div class="card">
              <div class="card-header">
                Featured
             </div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="https://www.facebook.com/profile.php?id=100009859412168" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </Col>
          <Col>
            <div class="card">
              <div class="card-header">
                Featured
             </div>
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="https://www.facebook.com/abadzorina" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </Col>
        </Row>
      </div>

    )
  }
}
