const CartList = ({ cart, removeFromCart, addToCart, deleteFromCart }) => {
  return (
    <div>
      {" "}
      <div className="product heading">
        <span>Product</span> <span>Price</span> <span>Quantity</span>{" "}
        <span>Remove from Cart</span>
      </div>
      {cart.map((product, index) => (
        <div key={product.id} className="cart">
          <span>{product.name}</span>
          <span>{product.price}</span>
          <div style={{ display: "flex" }}>
            <button className="btn" onClick={() => removeFromCart(product.id)}>
              ➖
            </button>
            <span
              style={{
                margin: "5px",
                border: "1px solid black",
                paddingLeft: "5px",
                paddingRight: "5px",
              }}
            >
              {product.quantity}
            </span>
            <button className="btn" onClick={() => addToCart(product.id)}>
              ➕
            </button>
          </div>
          <div>
            <button
              onClick={() => deleteFromCart(product.id)}
              className="btn"
              style={{
                width: "30px",
              }}
            >
              ❌
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
