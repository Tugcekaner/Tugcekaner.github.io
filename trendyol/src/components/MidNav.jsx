import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import IconName, { BsBag, BsHeart, BsPerson, BsSearch } from "react-icons/bs";


function MidNav() {
  return (
    <div className='MidNav'>
      <Navbar expand="lg" >
        <Container >
          <Navbar.Brand href="#"><h1>trendyol</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto icons">
              <input type="text"  placeholder='Aradığınız ürün, kategori ya da markayı yazınız.'/>
              <Nav.Link className='navLink' href="#"><BsPerson className='navIcon'></BsPerson> Hesabım</Nav.Link>
              <Nav.Link className='navLink' href="#"><BsHeart className='navIcon'></BsHeart> Favorilerim</Nav.Link>
              <Nav.Link className='navLink' href="#"><BsBag className='navIcon'></BsBag> Sepetim</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default MidNav