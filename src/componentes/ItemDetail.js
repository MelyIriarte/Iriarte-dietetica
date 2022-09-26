import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext.js';
import ItemCount from './ItemCount.js';
import Swal from 'sweetalert2';

const ItemDetail= ({item}) => {
   
  const [goToCart, setGoToCart] = useState (0);
  const { addItem } = useContext(CartContext);
 
  const onAdd = (quantity) =>{
  setGoToCart(quantity);
  addItem(item,quantity );
  Swal.fire({
    position: 'top-end',
    title: `Producto añadido con exito`,
    showConfirmButton: false,
    timer: 1500
  })}

  return (
    <>
    {item && item.img ?
    <div className='contenido-general'>
    <div className='contenido'>
      <div className='contenido-detalle'>
        <img className='img-detalle' src={item.img}  alt="/" /> 
      </div>
     <div className='contenido-contenido'>
       <div className='contenido-info'>
          <h2 className='title-detalle'>{item.titulo}</h2>  
           <h6 className='contenido-precio'>${item.precio}</h6>
           <p className='contenidos-detalle'>{item.contenido}</p>
       </div>
     
      { goToCart > 0 ?
        <Link to="/cart"> <button className='boton-carrito'> Ir al Carrito </button> </Link>  
        : <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>}
    </div>
    </div>
    </div>
    : <p className='cargando'> Cargando datos ...</p>}
    </> )}

export default ItemDetail;
