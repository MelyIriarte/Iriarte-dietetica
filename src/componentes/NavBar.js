 import React from "react";
import { Navbar , Container ,Nav } from "react-bootstrap";
import {NavLink} from 'react-router-dom';
import CartWidget from "./CartWidget";


const NavBar = () => {
    return(
      <Navbar expand="lg">
        <Container className="container-nav">
            <Navbar.Brand className="titulo"><NavLink to="/">DIETCON</NavLink></Navbar.Brand>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
            <Navbar.Collapse id="basic-navbar-nav">
                 <Nav className="me-auto">
                   <NavLink to="/category/A1">Almacen</NavLink>
                   <NavLink to="/category/B1">Bebidas </NavLink>
                   <NavLink to="/category/FC">Frescos y Congelados</NavLink>
                   <NavLink to="/category/SG">Sin Gluten</NavLink>
                 </Nav>
             <NavLink to="/cart"><CartWidget/></NavLink>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}



export default NavBar;

