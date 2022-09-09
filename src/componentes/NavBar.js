 import React from "react";
import { Navbar , Container ,Nav } from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import CartWidget from "./CartWidget";


const NavBar = () => {
    return(
      <Navbar expand="lg">
        <Container>
            <Navbar.Brand className="titulo" href="#home">DIETCON</Navbar.Brand>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
            <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="me-auto">
                   <NavLink to="/almacen">Almacen</NavLink>
                   <NavLink to="/bebidas">Bebidas </NavLink>
                   <NavLink to="/frescosycongelados">Frescos y Congelados</NavLink>
                   <NavLink to="singluten">Sin Gluten</NavLink>
                 </Nav>
            </Navbar.Collapse>
        </Container>
            <CartWidget/>
      </Navbar>
    );
}



export default NavBar;

