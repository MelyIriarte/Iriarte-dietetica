import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar.js';
/* import ItemListConteiner from './componentes/ItemListConteiner.js'
 */import ItemList from './componentes/ItemList.js'

 
import Home from './paginas/Home.js';
import Almacen from './paginas/Almacen.js'
import Bebidas from './paginas/Bebidas.js'
import SinGluten from './paginas/SinGluten.js'
import FrescosyCongelados from './paginas/Frescos.js';


function App() {
  return (
   <BrowserRouter>
     <NavBar/>
    <>
    
      <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/almacen" element={<Almacen/>}/>
      <Route path="/bebidas" element={<Bebidas/>}/>
      <Route path="/frescosycongelados" element={<FrescosyCongelados/>}/>
      <Route path="/singluten" element={<SinGluten/>}/>
      </Routes>
     
     <div className='gallery'>
      <ItemList className='body-propiedades'/>
      {/* <ItemListConteiner className='body-propiedades'/> */}
      </div>
    </>
    </BrowserRouter>
  
  );
}

export default App;
