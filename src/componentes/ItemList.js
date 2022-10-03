import React from "react";
import Item from "./Item.js";

const ItemList = ({data}) => {
 
  return (
    <>
      {data.length ? 
       data.map(item => (
        < Item
          id={item.id}
          key={item.id}
          img={item.img}
          precio={item.precio}
        />
      ))  : <p>Cargando datos....</p>
    } </>
  )
}

export default ItemList;
