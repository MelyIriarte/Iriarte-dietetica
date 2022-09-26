import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

const Cart = () => {
 const { cartList, clear, removeItem , calcTotalItem, calcSubTotal , calcIva, calcTotal} = useContext(CartContext); 

  return (
    <>
    <div>
    <h2 className="titulo-h2">YOUR CART</h2>

    {cartList.length > 0 ?
      <div className="flex-carrito"> 
        <Link className="link-sincolor" to="/"> <button className='agregar-carrito' > Continuar Comprando </button> </Link>
        <button  className='borrar-carrito' onClick={clear}>Delete all</button>
      </div>
    : <div className="flex-carrito"> 
       <Link className="link-sincolor" to="/"> <button className='agregar-carrito' > Continuar Comprando </button> </Link>
       <h6 className='carrito-vacio'>TU CARRITO ESTA VACIO</h6>  
     </div>
    }
    
    {cartList.map((item) => {
      return(
      <div className="div-cart" key={item.id}>
            <img className="img-cart" src={item.img} alt="/"/>
            <h4 className="h4-producto">{item.titulo}</h4>
            <h6 className="h6-cantidad">{item.quantity} item(s) / ${item.precio}</h6>
            <h6 className="h">${calcTotalItem(item.id)}</h6>
            <button  className="borrar-item" onClick={() => removeItem(item.id)}>x</button>
      </div>)
    })}
 
 {cartList.length > 0 &&
  <div className="orden-carrito">
    <h3 className="orden-titulo">ORDEN DE COMPRA</h3>
    <h6 className="orden-subtitulo">Subtotal: ${calcSubTotal()} </h6>
    <h6 className="orden-iva">IVA: ${calcIva()}</h6>
    <h6 className="orden-total">TOTAL: ${calcTotal()}</h6>
    <button className='finalizar-carrito'>FINALIZAR COMPRA</button>
  </div>}
  
  </div> 
  </>
)}

export default Cart;
