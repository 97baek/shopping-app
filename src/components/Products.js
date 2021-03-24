import React, { useState } from "react";
import dummy from "../DB/data.json";
import Product from "./Product";
import Cart from "./Cart";
function Products() {
  const [cartList, setCartList] = useState(dummy.cart);
  const [productPrice, setProductPrice] = useState(cartList.map((product) => product.quantity));
  const [productQuantity, setProductQuantity] = useState(1);
  // const price = cartList.reduce((acc, curr) => acc + curr.price * productQuantity, 0);
  const quantity = cartList.map((product) => product.quantity);
  console.log(cartList.map((product) => product.quantity));
  console.log(quantity);
  const productList = dummy.products;

  const addToCart = (id) => {
    const [addedProduct] = productList.filter((product) => product.id === id);
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].id === addedProduct.id) {
        return;
      }
    }
    console.log(cartList);
    setCartList([...cartList, addedProduct]);

    // setProductPrice(cartList.reduce((acc, curr) => acc + curr.price * curr.quantity, 0));
    // console.log(productPrice);
  };

  const onClickPlus = (id) => {
    const [addedProduct] = productList.filter((product) => product.id === id);
    console.log("addProduct.id: ", addedProduct.id);
    console.log("id: ", id);
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].id === addedProduct.id) {
        setProductQuantity(cartList[i].quantity + 1);
      }
    }
  };

  const onClickMinus = (id) => {
    setProductQuantity(productQuantity - 1);
    if (productQuantity <= 1) {
      alert("최소수량입니다!");
      setProductQuantity(1);
    }
  };

  const onClickDelete = (id) => {
    setCartList(cartList.filter((product) => product.id !== id));
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
      <Cart
        productPrice={productPrice}
        productQuantity={productQuantity}
        cart={cartList}
        onClickDelete={onClickDelete}
        onClickPlus={onClickPlus}
        onClickMinus={onClickMinus}
      />
    </>
  );
}

export default Products;
