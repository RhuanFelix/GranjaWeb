import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <header>
      <Navbar expand="lg" className="navbar-custom bg-success">
        <Container>
          <Navbar.Brand className='text-light' href="/">
            <img 
              style={{width: 60, height:60, marginRight:20, borderRadius:100}} 
              src="../../public/logoGranja.png" 
              alt="Logo da GranjaWeb" 
            />
            GranjaWeb
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className='text-light' href="/">Home</Nav.Link>
              <Nav.Link className='text-light' href="/galpoes">Galpões</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;