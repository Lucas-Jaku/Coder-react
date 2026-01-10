import './App.css';
import Navbar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import IteamDetailContainer from './components/ItemDetailContainer';


function App() {

  return (
    <BrowserRouter>
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
          element={<IteamDetailContainer />}
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
    </BrowserRouter>
  )
}

export default App
