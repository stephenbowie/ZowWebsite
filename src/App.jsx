import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../src/components/Home'
import About from '../src/components/About'
import News from '../src/components/News'
import Nav from '../src/components/CustomNavBar'
import Contact from '../src/components/Contact'
import { Container } from 'react-bootstrap';

//

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <Nav> </Nav>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/news' component={News} />
          <Route exact path='/contact' component={Contact} />
        </Container>
      </Router>
    );
  }
}

export default App;
