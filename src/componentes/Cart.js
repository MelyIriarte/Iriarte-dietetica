import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"

const Cart = () => {
  const { cartList, clear, removeItem } = useContext(CartContext)
 

  return (
    <>
    <div>
    <h2 className="titulo-h2">YOUR CART</h2>

    {cartList.length > 0 ?
      <div> 
        <button  className='borrar-carrito' onClick={clear}>Delete all</button>
        <Link  className="link-sincolor" to="/"> <button className='agregar-carrito' > Continuar Comprando </button> </Link>
      </div>
    : <button className='agregar-carrito' > Continuar Comprando </button>
    }
   
    
    {cartList.map((item) => {
      return(
      <div className="div-cart" key={item.id}>
            <img className="img-cart" src={item.img} alt="/"/>
            <h4 className="h4-producto">Producto: {item.titulo}</h4>
            <h6 className="h6-cantidad">Cantidad: {item.quantity}</h6>
            <h6 className="h6-precio">Precio: {item.precio}</h6>
           <button  className="borrar-item" onClick={() => removeItem(item.id)}>x</button>
      </div>
      )
    })}
    </div>
  
    </>
  )
}

export default Cart
