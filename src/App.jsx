import './App.css';
import Item from './components/Item';
import Navbar from './components/NavBar';
import CartWidget from './components/Cartwidget';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';


function App() {

  return (
    <>
      
      <Navbar />
      <ItemCount />
      <ItemListContainer />
    </>
  )
}

export default App
