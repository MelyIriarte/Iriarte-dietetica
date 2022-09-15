import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import ItemCount from './ItemCount.js'

const ItemDetail= ({item}) => {
   
  const [goToCart, setGoToCart] = useState (0);

  function onAdd (count) {
    console.log(count)
   setGoToCart(count);
  }

  return (
    <>
    {item && item.img ?
    <div className='contenido-general'>
    <div className='contenido'>
      <div className='contenido-detalle'>
        <img className='img-detalle' src={item.img}  alt="/"  /> 
      </div>
     <div className='contenido-contenido'>
       <div className='contenido-info'>
          <h2 className='title-detalle'>{item.titulo}</h2>  
           <h6 className='contenido-precio'>{item.precio}</h6>
           <p className='contenidos-detalle'>{item.contenido}</p>
       </div>
     
      { goToCart ?
        <Link to="/cart"> <button className='boton-carrito'> Ir al Carrito </button> </Link>  
        : <ItemCount initial={1} stock={item.stock} onAdd={onAdd}/>
       }
    </div>
    </div>
    </div>
    : <p> Cargando datos ...</p>
}
    </>
  ) 

}

export default ItemDetail;
