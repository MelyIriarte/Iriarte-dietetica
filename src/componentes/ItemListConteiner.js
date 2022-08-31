import React from 'react'
import ItemCount from './ItemCount';

function ItemListConteiner() {
  
  const onAdd = (quantity) =>{
    alert(`Compraste ${quantity} unidades`)
  }
  
  return (
    <ItemCount initial={1} stock={5} onAdd={onAdd}/>
  )
}

export default ItemListConteiner;
