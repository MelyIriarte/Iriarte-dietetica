import { FaShoppingCart} from 'react-icons/fa';
import {Nav , Badge } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {

const {calcItemCard}  = useContext(CartContext);
  return (
    <Nav>
      {calcItemCard()> 0 ? <Badge className='badge' pill bg='denger' >{calcItemCard()}</Badge>
      : <></> }
     
      <FaShoppingCart  className='carrito' fontSize="24px"/> 
    </Nav>
  )
}

export default CartWidget;
