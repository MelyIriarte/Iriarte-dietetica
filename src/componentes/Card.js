import React from 'react';
import { ImEyePlus } from 'react-icons/im'

function CardPerso({img , titulo , contenido , precio}) {
 
  return (
 
    <div className='content'>
      <img src={img}  alt="/"  /> 
      <h3>{titulo}</h3>
      <p>{contenido}</p>
      <h6>{precio}</h6>
      <button className='buttonCard'>Comprar</button>
      <button className='buttonCard-detalle'><ImEyePlus fontSize="20px" /></button>
    
    </div>

  );
}

export default CardPerso;
