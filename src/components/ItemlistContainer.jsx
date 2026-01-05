import products from '../data/products';
import Item from './Item';

export default function ItemListContainer(props) {
  return (
    <section>

      <h2>Hola, bienvenidos a mi tienda {props.greeting} </h2>
      {
        products.map(
          (item) => <Item
            title={item.title}
            img={item.img}
            price={item.price} />
        )
      }

    </section>
  )
}