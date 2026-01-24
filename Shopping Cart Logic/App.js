import "./styles.css";
import { products } from "./data/productsData";
import { sampleCart } from "./data/sampleCart";
import { useState } from "react";
import CartList from "./components/cartList";
import ProductList from "./components/productList";

export default function App() {
  const [cart, setCart] = useState(sampleCart);

  const addToCart = (prodId) => {
    const product = products.find((p) => p.id === prodId);
    if (!product) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === prodId);

      if (existingItem) {
        // item already in cart → increase quantity
        return prevCart.map((item) =>
          item.id === prodId ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // item not in cart → add new entry
      return [
        ...prevCart,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (prodId) => {
    const product = products.find((p) => p.id === prodId);
    if (!product) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === prodId);

      if (existingItem.quantity > 1) {
        return prevCart.map((item) =>
          item.id === prodId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }

      const newList = prevCart.filter((item) => item.id !== prodId);
      return newList;
    });
  };

  const deleteFromCart = (prodId) => {
    const product = products.find((p) => p.id === prodId);
    if (!product) return;

    setCart((prevCart) => {
      const newList = prevCart.filter((item) => item.id !== prodId);
      return newList;
    });
  };

  const totalCost = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  return (
    <div className="App">
      <h1>Shopping Cart Logic</h1>

      <div className="container">
        {/* Product List */}
        <div className="product-list">
          Product List
          <ProductList products={products} addToCart={addToCart} />
        </div>

        {/* Cart */}
        <div>
          CART
          <CartList
            cart={cart}
            removeFromCart={removeFromCart}
            addToCart={addToCart}
            deleteFromCart={deleteFromCart}
          />
          {/* Cart Total Price */}
          <div className="cart-total">
            <strong>Total:</strong> ₹{totalCost}
          </div>
        </div>
      </div>
    </div>
  );
}
