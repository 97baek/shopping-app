import React from "react";
import Product from "./Product";
function Products({ products, addToCart }) {
  return (
    <>
      <div className="products-container">
        <h2>Apple Watch 쇼핑하기</h2>
        <ul className="products">
          {products.map((product) => (
            <Product product={product} key={product.id} addToCart={addToCart} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default Products;
