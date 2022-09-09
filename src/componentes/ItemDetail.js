import React from 'react'

import ItemCount from './ItemCount.js'

const ItemDetail= ({item}) => {
 
  function onAdd (x) {
    alert (`compraste ${x} unidad${x>1 ? 'es' :'' }`)
  }

  return (
    <>
    <div className='contenido'>
      <div className='contenido-detalle'>
        <img className='img-detalle' src={item.img}  alt="/"  /> 
        <div className='contenido-middle'>
            <h2 className='title-detalle'>{item.titulo}</h2>       
       </div>
      </div>
     <div className='contenido-contenido'>
       <div className='contenido-info'>
           <h6 className='contenido-precio'>{item.precio}</h6>
           <p className='contenidos-detalle'>{item.contenido}</p>
       </div>

       <ItemCount initial={1} stock={5} onAdd={onAdd}/>
      
    </div>
    </div>
    </>
  ) 

}

export default ItemDetail;
