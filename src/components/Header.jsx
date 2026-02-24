import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';


function Header() {
  return (
    <header>
      <Navbar expand="lg" className="navbar-custom">
        <Container>
          <Navbar.Brand href="/">
            <img 
              style={{width: 100, height:100, marginRight:20, borderRadius:100}} 
              src="../../public/logoGranja.png" 
              alt="Logo da GranjaWeb" 
            />
            GranjaWeb
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/galpoes">Galpões</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;