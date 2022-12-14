import { createContext, useState } from 'react';
export const CartContext = createContext([]);

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
 
   const isInCard = (id) => cartList.some(BaseDatos => BaseDatos.id === id);  

   const calcItemCard = () => {
    return cartList.reduce((previusValue,currentValue)=> previusValue + currentValue.quantity, 0)
  } 

   const calcTotalItem = (id) => {
      let index = cartList.map(item => item.id).indexOf(id)
        return cartList[index].precio * cartList[index].quantity;
    }

    const calcSubTotal = () => {
      let subTotal = cartList.map(item => calcTotalItem(item.id));
      return subTotal.reduce((previusValue,currentValue)=> previusValue + currentValue)
    }
   
   const calcIva = () =>{
      return calcSubTotal() *0.21
    }

   const calcTotal = () =>{
      return calcSubTotal() + calcIva ()
    }

  return(
        <CartContext.Provider value={{cartList,addItem, clear, removeItem,isInCard, calcItemCard , calcTotalItem, calcSubTotal, calcIva , calcTotal }}>
            {children}
        </CartContext.Provider>
    )
 }

export default CartContextProvider;
