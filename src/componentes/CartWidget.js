import React from 'react'
import { FaShoppingCart} from 'react-icons/fa';
import {Nav , Badge } from "react-bootstrap";


function CartWidget() {
  return (
           <Nav>
             <Badge className='badge' pill bg='denger' >{5}</Badge>
             <FaShoppingCart  className='carrito' fontSize="24px"/> 
          </Nav>
  )
}

export default CartWidget;
