import './App.css';

// import react bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';


// import application specific components
import Home from './components/home/Home';
import TopNavigation from './components/navigation/TopNavigation';
import LeftNavigation from './components/navigation/left/LeftNavigation';
import Footer from './components/navigation/Footer';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
function App() {

  useState(() => {
    window.sessionId = window.sessionId || uuidv4();
  },[]);

  return <>
    <Container fluid>
      <header>
        <Row>
          <Col>
            <TopNavigation></TopNavigation>
          </Col>
        </Row>
      </header>
      <main>
        <Row>
          <Col as="aside" xs={1}>
            <LeftNavigation></LeftNavigation>
          </Col>
          <Col>
            <Home></Home>
          </Col>
        </Row>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </Container>

  </>

}

export default App;
