
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';

export default function CustomNavbar() {
    return (
    <Navbar expand="lg" className='navbar'>
    <Container>
      <Navbar.Brand>
        <Nav.Link as={NavLink} to="/" className="logo">
          <span className="logo-text">Jacob Eliks</span>
        </Nav.Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav >
          <Nav.Link as={NavLink} to="/" exact className="nav-link"><span className='link-text'>Home</span></Nav.Link>
          <Nav.Link as={NavLink} to="/portfolio" className="nav-link"><span className='link-text'>Portfolio</span></Nav.Link>
          <Nav.Link as={NavLink} to="/contact" className="nav-link"><span className='link-text'>Contact</span></Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};