import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import {BsCart3} from "react-icons/bs";
function CartWidget({cantidad}) {
  return (
    <Nav.Link href="#carrito">
        <Button variant="transparent">
        <BsCart3 size={(25)}/><Badge bg="secondary">{cantidad}</Badge>
           
        </Button>
    </Nav.Link>
  );
}

export default CartWidget;