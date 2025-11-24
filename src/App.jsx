import './App.css'
import Item from './components/Item';
import Navbar from './components/NavBar';
import CartWidget from './components/Cartwidget';
import ItemListContainer from './components/ItemlistContainer';


function App() {

  return (
    <>
      <header>
        <Navbar />
        
        </header>
      
      <ItemListContainer greeting="Hola, bienvenidos a mi tienda de tecnologia" />

      <hr />
      <div>
        <Item
          title="Notebook Gamer HP Victus 15"
          price={800}
          categories={["Hp", "Laptop", "Computacion"]}
          handleClick={() => alert("HP Victus")}
          img="https://images.fravega.com/f1000/a72c265609a637be18339e70c9dbeb39.jpg"
        />
        <Item
          title="LG 4K 144Hz 1Ms UltraGear 32GR93U"
          price={300}
          handleClick={() => alert("LG Monitor")}
          img="https://mexx-img-2019.s3.amazonaws.com/47897_1.jpeg"
        />
        <Item
          title="IPhone 17 Pro"
          price={1200}
          handleClick={() => alert("IPhone 17 Pro")}
          img="https://aremsaprod.vtexassets.com/arquivos/ids/1064535/IPHONE-17-PRO-256-GB-NARANJA-COSMICO-PIC-01.jpg?v=638980405891600000"
        />
      </div>
      <hr />
    </>
  )
}

export default App
