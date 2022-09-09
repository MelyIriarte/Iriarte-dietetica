import React, { useState } from 'react';
import { IoAddOutline } from 'react-icons/io5';
import {HiOutlineMinus } from 'react-icons/hi';


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
     
     <div className='btn'>
         <button className='componentes'  disabled={count <= 1} onClick={decrease}><HiOutlineMinus fontSize="20px"/></button>
            <span> {count} </span> 
         <button className='componentes' disabled={count >= stock} onClick={increase}> <IoAddOutline fontSize="20px"/></button>
    </div>

    <div>
      <button className='agregar-carrito' disible={stock <= 0} onClick={ ()=> onAdd(count)}> Agregar al carrito </button>   
    </div>   
   
   </div>
  );
}

export default ItemCount;
