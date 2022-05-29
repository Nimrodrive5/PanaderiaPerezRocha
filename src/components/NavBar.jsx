import {Navbar, Nav, Container } from "react-bootstrap";
function NavBar() {
    return (
        
  <Navbar bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Panaderia Pan8n</Navbar.Brand>
  <Nav className="me-auto">
    <Nav.Link href="#home">Inicio</Nav.Link>
    <Nav.Link href="#Contacto">Contacto</Nav.Link>
    <Nav.Link href="#Eventos">Eventos</Nav.Link>
    <Nav.Link href="#pricing">Carrito</Nav.Link>
    
  </Nav>
  </Container>
</Navbar>
    )
}
  export default NavBar;