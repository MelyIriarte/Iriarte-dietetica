import React, { useContext } from 'react'
import { FaShoppingCart} from 'react-icons/fa';
import {Nav , Badge } from "react-bootstrap";
import { CartContext } from './CartContext';


function CartWidget() {
  const { calcItemCard } = useContext(CartContext)
 console.log(calcItemCard)

  return (
           <Nav>
             <Badge className='badge' pill bg='denger' ></Badge>
             <FaShoppingCart  className='carrito' fontSize="24px"/> 
          </Nav>
  )
}

export default CartWidget;
