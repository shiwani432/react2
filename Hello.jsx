import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Hello = () => {
  return (
    <div className='hello'>
    
      {/* <ul>
        <li>
            <a href='/home'>Home</a>
            <a href='/about'>About</a>
        </li>
      </ul> */}
       <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Logo</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home" className='one'>Home</Nav.Link>
            <Nav.Link href="/About" className='one1'>About</Nav.Link>
            <Nav.Link href="/Contact" className='one2'>Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
          
    </div>
  )
}

export default Hello
  