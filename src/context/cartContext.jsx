import { createContext, useState } from "react";


const cartContext = createContext({ cart: [] });


export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  
  function addItemToCart(product, count) {
    const newCart = [...cart];
    
   
    const index = newCart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      
      newCart[index].count += count;
      setCart(newCart);
    } else {
      
      const newItem = { ...product, count };
      newCart.push(newItem);
      setCart(newCart);
    }
  }

  // Función para eliminar un producto específico (usada en CartContainer)
  function removeItemFromCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  // Función para contar el total de unidades (usada en CartWidget)
  function countItemsInCart() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count;
    });
    return total;
  }

  // Función para calcular el precio total de la compra
  function getTotalPrice() {
    let total = 0;
    cart.forEach((item) => {
      total += item.count * item.price;
    });
    return total;
  }

  // Función para limpiar el carrito después de la compra
  function clearCart() {
    setCart([]);
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addItemToCart,
        removeItemFromCart,
        countItemsInCart,
        getTotalPrice,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  );
}

export default cartContext;
