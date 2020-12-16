import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = (props) => {


  return (
    <header>
      <div className="logo">
        <Link to={'/'}>d i s h d</Link>
      </div>
      <div className="links">
        <ul>
          { props.currentUser ? 
            <>
              <li><Link to={'/search'}>SEARCH</Link></li>
              <li><Link to={'/new'}>NEW POST</Link></li>
              <li><Link to={'/profile'}>PROFILE</Link></li>
              <li><a href="/logout" onClick={ props.logout }>LOG OUT</a></li>
            </>
          :
            <>
              <li><Link to={'/register'}>REGISTER</Link></li>
              <li><Link to={'/login'}>LOGIN</Link></li>
            </>
          }
            {/* <Accordion>
              <Card>
                <Card.Header>
                  <Accordion.Toggle variant="link" eventKey="0">
                    MENU
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body><Link to={'/register'}>Register</Link></Card.Body>
                  <Card.Body><Link to={'/login'}>Login</Link></Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          } */}
        </ul>
      </div>
    </header>
  );
}

export default Header;
