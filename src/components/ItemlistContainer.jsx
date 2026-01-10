import Item from './Item';
import getData from '../data/mockService';
import { useEffect, useState } from 'react';


export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  //async await
  useEffect(() => {
    getData().then((respuesta) => {
      console.log("Promesa terminada")
      setProducts(respuesta);
    }).catch((error) => {
      alert(error)
    })
  }, [])


  return (
    <section>

      <h2>Hola, bienvenidos a mi tienda {props.greeting} </h2>
      {
        products.map(
          (item) => <Item
            key={item.id}
            {...item} /> // spread
        )
      }

    </section>
  )
}