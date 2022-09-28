import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from "./CartContext"
import {  serverTimestamp ,doc, setDoc, collection, updateDoc, increment } from "firebase/firestore";
import {db} from '../utils/firebaseConfig'

const Cart = () => {
 const ctx = useContext(CartContext); 

 const crearOrden = async () => {
  let itemsForDB = ctx.cartList.map(item => ({
    id:item.id,
    title:item.titulo,
    price:item.precio,
    quantity:item.quantity
  }))
  let orden = {
     buyer:{
        name:"Melany Iriarte",
        email:"iriarte.mela@gmial.com",
        phone:"1533333917"
      },
    date: serverTimestamp(),
    items: itemsForDB,
    total: ctx.calcTotal()
   }
   
    const newOrderRef = doc(collection(db,"orders"))
    await setDoc(newOrderRef, orden)
    alert('Su orden fue creada exitosamente. Gracias por su compra.')
    ctx.clear()
    
    itemsForDB.map(async (item) => {
     const descStock = doc(db , "products" , item.id );
       await updateDoc( descStock, {
         stock: increment(-item.quantity)
       });
      })
}

 
  return (
    <>
    <div>
    <h2 className="titulo-h2">YOUR CART</h2>

    {ctx.cartList.length > 0 ?
      <div className="flex-carrito"> 
        <Link className="link-sincolor" to="/"> <button className='agregar-carrito' > Continuar Comprando </button> </Link>
        <button  className='borrar-carrito' onClick={ctx.clear}>Delete all</button>
      </div>
    : <div className="flex-carrito"> 
       <Link className="link-sincolor" to="/"> <button className='agregar-carrito' > Continuar Comprando </button> </Link>
       <h6 className='carrito-vacio'>TU CARRITO ESTA VACIO</h6>  
     </div>
    }
    
    {ctx.cartList.map((item) => {
      return(
      <div className="div-cart" key={item.id}>
            <img className="img-cart" src={item.img} alt="/"/>
            <h4 className="h4-producto">{item.titulo}</h4>
            <h6 className="h6-cantidad">{item.quantity} item(s) / ${item.precio}</h6>
            <h6 className="h">${ctx.calcTotalItem(item.id)}</h6>
            <button  className="borrar-item" onClick={() => ctx.removeItem(item.id)}>x</button>
      </div>)
    })}
 
 {ctx.cartList.length > 0 &&
  <div className="orden-carrito">
    <h3 className="orden-titulo">ORDEN DE COMPRA</h3>
    <h6 className="orden-subtitulo">Subtotal: ${ctx.calcSubTotal()} </h6>
    <h6 className="orden-iva">IVA: ${ctx.calcIva()}</h6>
    <h6 className="orden-total">TOTAL: ${ctx.calcTotal()}</h6>
    <button className='finalizar-carrito' onClick={crearOrden}>FINALIZAR COMPRA</button>
  </div>}
  
  </div> 
  </>
)}

export default Cart;
