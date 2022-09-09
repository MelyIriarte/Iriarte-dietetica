import React from "react";
import ItemCount from "../componentes/ItemCount.js"


const ItemList = () => {
 
  
  return (
    
  <>
  
  <ItemCount initial={1} stock={5} onAdd={onAdd}/>
  </>
    
  )
};

export default ItemList;
