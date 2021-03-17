import React, { useState } from "react";
import dummy from "../DB/data.json";
import Product from "./Product";
import Cart from "./Cart";
function Products() {
  const [productList, setProductList] = useState(dummy.products);
  const [cartProducts, setCartProducts] = useState(dummy.cart);
  console.log(dummy.cart);
  console.log(productList);
  return (
    <>
      <div className="products-container">
        <h2>Apple Watch 쇼핑하기</h2>
        <ul className="products">
          {dummy.products.map((product) => (
            <Product
              product={product}
              productList={productList}
              cart={cartProducts}
              key={product.id}
            />
          ))}
        </ul>
      </div>
      <Cart productList={productList} cart={cartProducts} />
    </>
  );
}

export default Products;
