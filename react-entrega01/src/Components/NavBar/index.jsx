import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget';
import { MdDirectionsBike } from "react-icons/md";
function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#"><MdDirectionsBike size={(50)}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Inicio</Nav.Link>
            <Nav.Link href="#action2">Accesorios</Nav.Link>
            <Nav.Link href="#action2">Ofertas!</Nav.Link>
            <NavDropdown title="Bicicletas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">TREK</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                VAIRO
              </NavDropdown.Item>
              <NavDropdown.Item href="#action5">
                SPL
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>
          <CartWidget cantidad ="5"/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;