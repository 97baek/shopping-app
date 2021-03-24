import "./App.css";
import React, { useState } from "react";
import dummy from "./DB/data.json";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState(dummy.products);
  const [cartList, setCartList] = useState(dummy.cart);

  const addToCart = (id) => {
    const [addedProduct] = products.filter((product) => product.id === id);
    for (let i = 0; i < cartList.length; i++) {
      if (cartList[i].id === addedProduct.id) {
        console.log("중복", cartList[i].quantity);
        console.log("중복", cartList[i]);
        setCartList([{ ...cartList[i], quantity: cartList[i].quantity + 1 }]);
        return;
      }
    }
    console.log(cartList);
    setCartList([...cartList, addedProduct]);
  };

  const onIncrease = (id) => {
    setCartList(
      cartList.map((cartItem) =>
        cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      )
    );
  };

  const onDecrease = (id) => {
    setCartList(
      cartList.map((cartItem) => {
        if (cartItem.id === id && cartItem.quantity <= 1) {
          alert("최소수량입니다!");
          return { ...cartItem, quantity: (cartItem.quantity = 1) };
        }
        return cartItem.id === id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem;
      })
    );
  };

  const onClickDelete = (id) => {
    setCartList(cartList.filter((product) => product.id !== id));
  };
  return (
    <>
      <Products products={products} addToCart={addToCart} />
      <Cart
        cart={cartList}
        onClickDelete={onClickDelete}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </>
  );
}

export default App;
