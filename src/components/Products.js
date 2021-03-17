import React, { useState } from "react";
import dummy from "../DB/data.json";
import Product from "./Product";
import Cart from "./Cart";
function Products() {
  const productList = dummy.products;
  const [cartList, setCartList] = useState(dummy.cart);
  const addToCart = (id) => {
    const [addedProduct] = productList.filter((product) => product.id === id);
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].id === addedProduct.id) {
        return;
      }
    }
    console.log(cartList);
    setCartList([...cartList, addedProduct]);
  };
  return (
    <>
      <div className="products-container">
        <h2>Apple Watch 쇼핑하기</h2>
        <ul className="products">
          {dummy.products.map((product) => (
            <Product product={product} key={product.id} addToCart={addToCart} />
          ))}
        </ul>
      </div>
      <Cart productList={productList} cart={cartList} />
    </>
  );
}

export default Products;
