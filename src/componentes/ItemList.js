import React, { useState , useEffect } from "react";
import Promesa from "../utils/Promesa.js"; 
 import Card from "./Card.js"; 
import BaseDatos from '../utils/BaseDatos' 


const ItemList = () => {
const [data , setData] = useState([]); 


 useEffect(() => { 

   Promesa(2000, BaseDatos)
    .then(datos => setData(BaseDatos))
    .catch(err => console.log(err))
    
  }, [] );
    return (
    <>
      {data.length ? 
       data.map((item) => (
        <Card
          key={item.id}
          img={item.img}
          titulo={item.titulo}
          precio={item.precio}
        />
      ))   : <p>Cargando datos....</p>
    }
    </>
  );
};

export default ItemList;
