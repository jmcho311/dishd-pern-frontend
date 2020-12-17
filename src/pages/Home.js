import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.scss'

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col sm={8}><img src="../images/home.jpg" alt="breakfast"/></Col>
            {/* <img src="../images/home.jpg" alt="breakfast"/> */}
          <Col sm={4}><h3>bringing people and food together</h3></Col>
            {/* <h3>bringing people and food together</h3> */}
        </Row>
        <Row>
          <Col sm={4}><h3>a simple way to post and share your favorite food</h3></Col>
            {/* <h3>a simple way to post and share your favorite food</h3> */}
          <Col sm={8}><img src="../images/home2.jpg" alt="pasta"/></Col>
            {/* <img src="../images/home2.jpg" alt="pasta"/> */}
        </Row>
      </Container>
    </div>
  )
}

export default Home
