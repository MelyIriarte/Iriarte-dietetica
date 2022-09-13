import React from 'react';
import { ImEyePlus } from 'react-icons/im'
import { Link } from 'react-router-dom';

function Item({id ,img , titulo , contenido , precio}) {
 
  return (
   
    <div className='content'>
      <img src={img}  alt="/"  /> 
      <h3>{titulo}</h3>
      <p>{contenido}</p>
      <h6 className='card-precio'>{precio}</h6>
      <button className='buttonCard'>Comprar</button>
      <button className='buttonCard-detalle'><Link to={`/item/${id}`}><ImEyePlus fontSize="20px" /></Link></button>
   </div>

  );
}

export default Item;
