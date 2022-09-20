import { createContext, useState } from 'react';
/* import React, { useContext, useState } from 'react';
 */export const CartContext = createContext([]);

 const CartContextProvider = ({children}) =>{
   
   const [cartList , setCartList] = useState([]);
 
   
   const addItem =(item, quantity) => {
    if (isInCard(item.id)){
        setCartList(cartList.map(BaseDatos => {return  BaseDatos.id === item.id ? { ...BaseDatos, 'quantity': BaseDatos.quantity + quantity } : BaseDatos }));
    } else{
        setCartList([...cartList, { ...item, quantity }])
    }  }
   const clear = () => {setCartList([])};
   
   const removeItem = (id) => setCartList(cartList.filter(BaseDatos => BaseDatos.id !== id));
 
   const isInCard = (id) => cartList.find(BaseDatos => BaseDatos.id === id) ? true : false ;  
  
 
    return(
        <CartContext.Provider value={{cartList,addItem, clear, removeItem,isInCard}}>
            {children}
        </CartContext.Provider>
    )
 }

export default CartContextProvider;




