import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';




const Navbarr = () => {
    const total = 25000;
    const token = false;

    return(
    <Navbar collapseOnSelect expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" style={{color: "white"}}>Pizzeria Mama Mia</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features"><Button variant="outline-light">Light</Button>{' '}</Nav.Link>
            <Nav.Link href="#features"><Button variant="outline-light">Login</Button>{' '}</Nav.Link>
            <Nav.Link href="#features"><Button variant="outline-light">Register</Button>{' '}</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#features"><Button variant="outline-info">Total: 25000</Button>{' '}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    ) 
}

export default Navbarr;