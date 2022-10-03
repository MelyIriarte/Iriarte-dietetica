import React,{ useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { firestoreFetchOne } from '../utils/firestoreFetch';
 
const ItemDetailContainer = () => {

 const [data, setData] = useState({});
 const {idItem} =useParams(); 
 
 useEffect(() => { 
   firestoreFetchOne(idItem)
   .then (result => setData(result))
   .catch(err => console.log(err))
  },[idItem]);
 
    return (    
           <ItemDetail item={data}/>  
  );
}

export default ItemDetailContainer;
