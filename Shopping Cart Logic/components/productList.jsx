const ProductList = ({ products, addToCart }) => {
  return (
    <div>
      <div className="product heading">
        <span>Product</span> <span>Price</span> <span>Stock Avaliable</span>{" "}
        <span>Add to Cart</span>
      </div>
      {products.map((product, index) => (
        <div key={product.id} className="product">
          <span>{product.name}</span>
          <span>{product.price}</span>
          <span>{product.stock}</span>
          <button onClick={() => addToCart(product.id)}>🛒</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
