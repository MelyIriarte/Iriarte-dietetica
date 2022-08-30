 import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar.js';
import ItemListConteiner from './componentes/ItemListConteiner.js'
import ItemCount from './componentes/ItemCount';

import Home from './paginas/Home.js';
import Almacen from './paginas/Almacen.js'
import Bebidas from './paginas/Bebidas.js'
import Frescos from './paginas/Frescos.js'
import Congelados from './paginas/Congelados.js'
import SinGluten from './paginas/SinGluten.js'


function App() {
  return (
   <BrowserRouter>
     <NavBar/>
    
    <div>
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/almacen" element={<Almacen/>}/>
      <Route path="/bebidas" element={<Bebidas/>}/>
      <Route path="/frescos" element={<Frescos/>}/>
      <Route path="/congelados" element={<Congelados/>}/>  
      <Route path="/singluten" element={<SinGluten/>}/>
      </Routes>
    </div>
    
    <ItemListConteiner/>
    <ItemCount/>
  

    </BrowserRouter>
  
  );
}

export default App;
