import { BrowserRouter, Route , Routes } from 'react-router-dom';
import './App.css';
import NavBar from './componentes/NavBar.js';
import ItemListConteiner from './componentes/ItemListConteiner.js'
import ItemDetailContainer from './componentes/ItemDetailContainer';

function App() {
  return (
   <BrowserRouter>
     <NavBar/>
    
      <Routes>
        <Route path='/' element={ <div className='gallery'> <ItemListConteiner/> </div>}/>
        <Route path='/category/:idCategoria' element={<div className='gallery'> <ItemListConteiner/> </div>}/>
        <Route path='/item/:idItem' element={ <ItemDetailContainer/> }/>
        
      </Routes>
     
 
  
    </BrowserRouter>
  
  );
}

export default App;
