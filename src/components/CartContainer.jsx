import { useContext, useState } from "react"
import cartContext from "../context/cartContext"
import { createBuyOrder } from "../data/firestore"

export default function CartContainer() {
  const { cart, removeItemFromCart, getTotalPrice, clearCart } = useContext(cartContext)
  const [orderId, setOrderId] = useState(null); 
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: ""
  })

  function handleCheckout() {
    const buyOrder = {
      buyer: formData,
      items: cart,
      total: getTotalPrice(), 
      date: new Date()
    }

    
    createBuyOrder(buyOrder).then(id => {
      setOrderId(id);
      clearCart(); 
    });
  }

  function handleSubmit(event) {
    event.preventDefault()
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  
  if (orderId) {
    return (
      <div className="cart-container">
        <h1>¡Gracias por tu compra!</h1>
        <p>Tu número de seguimiento es: <strong>{orderId}</strong></p>
      </div>
    )
  }

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Tu carrito de compras</h2>
      </div>

      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>No hay productos en el carrito.</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-details">
                  <span className="item-title">{item.title}</span>
                  <div className="item-price-info">
                    <span>Precio unitario: ${item.price}</span>
                    <span>Cantidad: {item.count}</span>
                    <span>Subtotal: ${item.price * item.count}</span>
                  </div>
                </div>
                
                <button 
                  className="remove-btn" 
                  onClick={() => removeItemFromCart(item.id)}
                  style={{ backgroundColor: '#ff4444' }}
                >
                  Quitar
                </button>
              </div>
            ))}
          </div>
          
          <h3>Total a pagar: ${getTotalPrice()}</h3>

          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              <input 
                onChange={handleChange}
                name="username"
                type="text"
                placeholder="Nombre completo"
                value={formData.username}
                required
              />
              <input 
                onChange={handleChange}
                name="email"
                type="email"
                placeholder="tumail@mail.com"
                value={formData.email}
                required
              />
              <input 
                onChange={handleChange}
                name="phone"
                type="number"
                placeholder="Teléfono"
                value={formData.phone}
                required
              />
              <div className="cart-actions">
                <button 
                  className="checkout-btn" 
                  type="button" 
                  onClick={handleCheckout}
                  disabled={cart.length === 0 || !formData.email}
                >
                  Confirmar compra
                </button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  )
}