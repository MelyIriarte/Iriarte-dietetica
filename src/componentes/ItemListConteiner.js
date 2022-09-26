import React, { useState , useEffect } from "react";
import {useParams} from 'react-router-dom';
import {firestoreFetch} from '../utils/firestoreFetch';
import ItemList from "./ItemList.js";
function ItemListConteiner() {
 
 const [data , setData] = useState([]); 
 const { idCategoria } = useParams();
 
 useEffect( () => { 
     firestoreFetch(idCategoria)
     .then(result => setData(result))
     .catch(err => console.log(err))
   }, [idCategoria] );

   useEffect (()=> {
    return(()=>{
      setData([]);
    })
   }, []);

    return(
      <ItemList data={data}/>
    );


}


export default ItemListConteiner;
  
