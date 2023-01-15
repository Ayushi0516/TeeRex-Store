
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Cart from './pages/cart/Cart';
import ProductPage from './pages/product/ProductPage';


function App() {
  return (
    <div className="App">
      <Header/>
     <Routes>
            <Route path='/' element={<ProductPage/>}/>
            <Route path='/cart' element={<Cart/>}/>
        </Routes>
    </div>
  );
}

export default App;
