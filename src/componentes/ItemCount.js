import React, { useState } from 'react'

function ItemCount() {
    const [suma, setSuma] = useState(1)

    const sumaProductos = () =>{
        
    }

    const restaProductos = () =>{
        
    }

  
    return (
    <div>
     <button onClick={sumaProductos}> + </button>
          { 1 }
     <button onClick={restaProductos}> - </button>
    </div>
  )
}

export default ItemCount;
