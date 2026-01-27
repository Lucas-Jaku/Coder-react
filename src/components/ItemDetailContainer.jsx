import { useParams } from "react-router";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import { getItemData } from "../data/firestore";
import { useContext } from "react";
import cartContext from "../context/cartContext";


function ItemDetailContainer(){
  const { itemID } = useParams();  
  const [product, setProduct] = useState({});
  const { addItemToCart, removeItemFromCart } = useContext(cartContext);

  
  function onAddToCart(count){
    console.log("Agregando " + count +  " items al carrito.")    
    addItemToCart(product, count);
  }

  useEffect( () => {
    getItemData(itemID).then( response => setProduct(response))
  }, [])

  
  return(    
  <section className="item-detail">
   <div className="detail-img">
     <img src={product.img} alt={product.title} />
   </div>
   <div className="detail-info">
     <h2>{product.title}</h2>
     <p>{product.description}</p>
     <h4 className="price">$ {product.price}</h4>
     <ItemCount onAddToCart={onAddToCart}/>
   </div>
</section>
  )
}

export default ItemDetailContainer