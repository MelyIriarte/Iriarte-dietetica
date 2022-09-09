import React,{ useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import Promesa from '../utils/Promesa';
import BaseDatos from '../utils/BaseDatos.js'

const ItemDetailContainer = () => {

 const [data, setData] = useState({});
 
 useEffect(() => { 

    Promesa(2000, BaseDatos[3])
     .then(result => setData(result))
     .catch(err => console.log(err))
     
   }, []);
 
    return ( 
      <ItemDetail item={data}/>
  );
}

export default ItemDetailContainer;
