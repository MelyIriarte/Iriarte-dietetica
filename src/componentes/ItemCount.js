import React, { useState } from 'react'

function ItemCount({ initial,stock, onAdd }) {
    const [ count , setCount] = useState( parseInt(initial));

    const increase = () =>{
        setCount(count+1);
    }

    const decrease = () =>{
      setCount(count-1);
    }

  

    return (
    <div className='contador'>
      
     <button className='componentes'  disabled={count <= 1} onClick={decrease}>-</button>
          <span> {count} </span> 
     <button className='componentes' disabled={count >= stock} onClick={increase}>+</button>
     
    <div>
      <button className='agregar-carrito' disible={stock <= 0} onClick={ ()=> onAdd(count)}> Agregar al carrito </button>   
   </div>   
   
   </div>
  );
}

export default ItemCount;
