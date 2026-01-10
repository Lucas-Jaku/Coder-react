import Item from './Item';
import getData, { getCategoryData } from '../data/mockService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';


export default function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  const { categoryID } = useParams();

  //fetch
  useEffect(() => {
    if (categoryID) {
      getCategoryData(categoryID).then(respuesta => setProducts(respuesta))
    } 
    else {
      getData().then(respuesta => setProducts(respuesta))
    }
}, [categoryID]);


return (
  <section>

    <h2>Hola, bienvenidos a mi tienda! {props.greeting} </h2>
    <div className="itemList">
    {
      products.map(
        (item) => <Item
          key={item.id}
          {...item} /> // spread
      )
    }
    </div>

  </section>
)
}