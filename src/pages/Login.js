import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Redirect } from 'react-router-dom'
import UserModel from '../models/user'
import './App.scss'
import loginImg from './images/login.png'

const Login = props => {
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')

  let handleEmail = e => {
    setEmail(e.target.value)
  }

  let handlePassword = e => {
    setPassword(e.target.value)
  }

  let handleSubmit = (event) => {
    event.preventDefault()

    UserModel.login({
      email,
      password
    }).then(data => {
        if (!data.user) {
          console.log('Login Unsuccessful')
          return false
        }
        // storeUser is defined in the app component and passed to Login
        props.storeUser(data.user)
      })
      .catch(err => console.log('Login Error', err))
  }

  // if user is logged in, redirect
  if (props.currentUser) return <Redirect to='/profile' />

  return (
    <div>
      <Container>
        <Row>
          <Col sm={6}>
            <img className="loginImg" src={ loginImg } alt="food"/>
          </Col>
          <Col sm={6}>
            <form className="loginForm" onSubmit={ handleSubmit }>
              <h2 id="loginHeader">Login</h2>
              <div className="form-group">
                <label className="emailLabel" htmlFor="name">Email</label>
                <input 
                  className="input"
                  onChange={ handleEmail } 
                  value={ email } 
                  type="email" 
                  id="email" 
                  name="email" 
                  required  
                />
              </div>
              <div className="form-group">
                <label className="passwordLabel" htmlFor="password">Password</label>
                <input 
                  className="input"
                  onChange={ handlePassword } 
                  value={ password } 
                  type="password" 
                  id="password" 
                  name="password" 
                  required
                />
              </div>
              <button className="loginButton" type="submit">login</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Login;