import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './App.scss'

const Home = () => {
  return (
    <div className="home">
      <Container>
        <Row>
          <Col sm={8}>
            <img className="img1" src="../images/home.jpg" alt="breakfast"/>
            <h3 className="homeHeader1">bringing people and food together</h3>
          </Col>
          <Col sm={4}>
            <h3 className="homeHeader2">a simple way to post and share your favorite food</h3>
            <img className="img2" src="../images/home2.jpg" alt="pasta"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home
