import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './css/Navbar.css';

const NavbarMain = () => {

  return (
    <div className='Navbar'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='fluidcontent'>
        <div>
          <img className="logo" src="/img/avatarlogo.jpeg" height="60px" alt="" href="/Home" />
          {/* <p className='titulo'> Greiskel S.</p> */}
        </div>
        <Container className='fluid'>
          <Navbar.Brand href="/Home" className='hoverclick'>Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/Experience3D" id="Experience3D" className='hoverclick'>3D Experience </Nav.Link></Nav>
            <Nav>
              <Nav.Link href="/Contacto" className='hoverclick'>
                Contact
              </Nav.Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavbarMain