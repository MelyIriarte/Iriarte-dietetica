import React from 'react';


function Card({img , titulo , contenido , precio}) {
   
 
  return (
 
    <div className='content'>
      <img src={img}  alt="/"  /> 
      <h3>{titulo}</h3>
      <p>{contenido}</p>
      <h6>{precio}</h6>
      <button className='buttonCard'>agregar +</button>
    </div>

  );
}

export default Card;
