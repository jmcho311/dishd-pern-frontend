import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import UserModel from '../models/user'
import './App.scss'
import registerImg from './images/register.png'


const Register = props => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleName = e => {
    setName(e.target.value)
  }  
  const handleEmail = e => {
    setEmail(e.target.value)
  }
  const handlePassword = e => {
    setPassword(e.target.value)
  }
  const handleConfirmPassword = e => {
    setConfirmPassword(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

    if (password === confirmPassword) {
      UserModel.create({ name, email, password })
        .then(data => {
          console.log('Successful register', data)
          props.history.push('/login')
        })
    }
  }

  return (
    <div>
      <Container>
        <Row>
          <Col sm={6}>
            <img className="registerImg" src={ registerImg } alt="food"/>
          </Col>
          <Col sm={6}>
            <form className="registerForm" onSubmit={ handleSubmit }>
              <h2 id="registerHeader">Register</h2>
              <div>
                <label className="registerLabel" htmlFor="name">Name</label>
                <input 
                  className="input"
                  onChange={ handleName } 
                  value={ name }
                  type="text" 
                  id="name" 
                  name="name" 
                  required
                />
              </div>
              <div>
                <label className="registerLabel" htmlFor="name">Email</label>
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
              <div>
                <label className="registerLabel" htmlFor="name">Password</label>
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
              <div>
                <label className="registerLabel" htmlFor="confirm-password">Confirm Password</label>
                <input
                  className="input"
                  onChange={ handleConfirmPassword } 
                  value={ confirmPassword } 
                  type="password" 
                  id="confirm-password" 
                  name="confirm-password" 
                  required
                />
              </div>
              <button className="registerButton" type="submit">Register</button>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Register