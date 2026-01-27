import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import { CartProvider } from './context/cartContext';
import ItemDetailContainer from './components/ItemDetailContainer';
import CartContainer from './components/CartContainer';




function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<ItemListContainer />}
          />

          <Route
            path="/category/:categoryID"
            element={<ItemListContainer />}
          />

          <Route
            path="/product/:itemID"
            element={<ItemDetailContainer />}
          />

          <Route
            path="/cart"
            element={<CartContainer />}
          />

          <Route
            path="*"
            element={
              <div>
                <h1>404 - Not Found</h1>
                <Link to="/">Regresar al home</Link>
              </div>}
          />

        </Routes>

      </CartProvider>
    </BrowserRouter>
  )
}

export default App
