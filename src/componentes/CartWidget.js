import React from 'react'
import { FaShoppingCart} from 'react-icons/fa'
import {Nav , Badge , Dropdown } from "react-bootstrap";


function CartWidget() {
  return (
           <Nav>
                <Dropdown alingRigt> 
                   <div>
                      <Badge className='badge' bg='denger' >{5}</Badge>
                      <FaShoppingCart  className='carrito' fontSize="24px"/>
                   </div>
                </Dropdown>
            </Nav>
  )
}

export default CartWidget;
