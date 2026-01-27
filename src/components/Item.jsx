import { Link } from 'react-router'

export default function Item({ title, img, price, id }) {

  console.log("Ciclo de vida: Montaje")

   return (
    <div className="item-card">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>$ {price}</p>      
      
      <Link to={`/product/${id}`}>
        <button className="item-card-button">Ver producto</button>
      </Link>
    </div> 
  )  
}

export function ItemButton(){
  return(
    <>
      <h2>Hola ItemButton</h2>
      <button>Click aquí</button>
    </>
  )
}


