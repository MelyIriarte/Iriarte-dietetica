import React, { useState , useEffect } from "react";
import Promesa from "../utils/Promesa.js"; 
import BaseDatos from '../utils/BaseDatos' 
import ItemList from "./ItemList.js";
import {useParams} from 'react-router-dom';

function ItemListConteiner() {
 
 const [data , setData] = useState([]); 
 const { idCategoria } = useParams();
  useEffect(() => { 
     if (idCategoria){
      Promesa(2000, BaseDatos.filter(item => item.categoria === idCategoria ))
      .then(datos => {  
        setData(datos)
         
      })
      .catch(err => console.log(err))
     } 
     else{
      Promesa(2000, BaseDatos)
      .then(datos => setData(datos))
      .catch(err => console.log(err))
      
     }
   
   }, [idCategoria] );
    return(
      <ItemList data={data}/>
    );


}

export default ItemListConteiner;
  
