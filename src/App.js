import "./App.css";
import React, { useState } from "react";
import dummy from "./DB/data.json";
import Products from "./components/Products";
import Cart from "./components/Cart";

function App() {
  const [products, setProducts] = useState(dummy.products);
  const [cartList, setCartList] = useState(dummy.cart);

  const addToCart = (id) => {
    // 추가시킬 프로덕트 정보 찾기
    const productToAdd = products.find((product) => product.id === id);

    // 카트안에 해당 프로덕트가 이미 존재하는지 찾기
    const existingItem = cartList.find((cartItem) => cartItem.id === id);

    // 카트안에 있었다면
    if (existingItem) {
      // 어떻게 업데이트 할지 로직 구현 -> 카트안에 있는 아이템을 갖고
      const cartToUpdate = cartList.map((cartItem) =>
        // 추가시킨 아이템의 아이디와 이미 카트안에 있는 물품의 아이디가 같을때
        cartItem.id === existingItem.id
          ? {
              // 카트안에 이미 존재하던 아이템을 풀어주고
              ...cartItem,
              // 그 풀어준 값중 quanity의 값을 하나를 더해준다
              quantity: cartItem.quantity + 1,
            }
          : // 카트안에 중복되는 물품이 없다면 그냥 아무작업 하지 않는다
            cartItem
      );
      setCartList(cartToUpdate);
    } else {
      // 카트안에 해당 아이템이 없다면 기존 카트아이템에 덧붙여 추가시킬 아이템을 더한다
      const cartToUpdate = [...cartList, productToAdd];
      setCartList(cartToUpdate);
    }
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
