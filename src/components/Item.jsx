export default function Item( {title, img, price,} ){

  console.log("Ciclo de vida: Montaje")

  return (
    <div style={{ border: "solid 1px white", borderRadius: "8px", padding: "16px", margin: "12px auto"}}>
      <h3>{title}</h3>
      <img width="220" src={img} />
      <p>$ {price}</p>      
      <button>Ver producto</button>
    </div> 
  )  
}

