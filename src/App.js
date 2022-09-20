import React from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar.js';
import ItemListConteiner from './componentes/ItemListConteiner.js'
import ItemDetailContainer from './componentes/ItemDetailContainer';
import Cart from './componentes/Cart.js';
/* import CartContexto from './componentes/CartContext.js';
 */
import  CartContextProvider from './componentes/CartContext.js';

function App() {
  return (
   <BrowserRouter>
     <NavBar/>
      <CartContextProvider >
      <Routes>
        <Route path='/' element={ <div className='gallery'> <ItemListConteiner/> </div>}/>
        <Route path='/category/:idCategoria' element={<div className='gallery'> <ItemListConteiner/> </div>}/>
        <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
      </CartContextProvider>
 
  
    </BrowserRouter>
  
  );
}

export default App;
