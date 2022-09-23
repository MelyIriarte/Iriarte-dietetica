import React,{ useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import Promesa from '../utils/Promesa';
import BaseDatos from '../utils/BaseDatos.js'
import { useParams } from 'react-router-dom';
/* import { firestoreFetchOne } from '../utils/firestoreFetch';
  */
const ItemDetailContainer = () => {

 const [data, setData] = useState({});
 const {idItem} =useParams(); 
 useEffect(() => { 

    Promesa(2000, BaseDatos.find(item => item.id === parseInt(idItem)))
     .then(result => setData(result))
     .catch(err => console.log(err))
     
   }, [idItem]); 
/* 
   firestoreFetchOne(idItem)
   .then (result => setData(result))
   .catch(err => console.log(err))
  },[]); */
 
    return (    
           <ItemDetail item={data}/>  
  );
}

export default ItemDetailContainer;
