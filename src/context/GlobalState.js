import React, { useState, useReducer } from "react";

import { shopReducer, ADD_PRODUCT, REMOVE_PRODUCT } from "./reducers";
import CartContext from "./CartContext";

const GlobalState = props => {
  const products = [
    { id: "01", title: "Bicicleta Scott Aspect 930", price: 135.233 },
    { id: "02", title: "Bicicleta Scott Aspect 950", price: 160.354 },
    { id: "03", title: "Bicicleta Scott Scale 930", price: 450.539 },
    { id: "04", title: "Bicicleta Scott Scale 900", price: 235.540 },

  ];
  // const [cart, setCart] = useState([]);
  const [cartState, dispatch] = useReducer(shopReducer, { cart: [] });

  const addProductToCart = product => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: ADD_PRODUCT, product: product });
    }, 700);
  };

  const removeProductFromCart = productId => {
    setTimeout(() => {
      // setCart(updatedCart);
      dispatch({ type: REMOVE_PRODUCT, productId: productId });
    }, 700);
  };

  return (
    <CartContext.Provider
      value={{
        products: products,
        cart: cartState.cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default GlobalState;