import React from "react";

export default React.createContext({
  products: [
    { id: "01", title: "Bicicleta Scott Aspect 930", price: 135.233 },
    { id: "02", title: "Bicicleta Scott Aspect 950", price: 160.354 },
    { id: "03", title: "Bicicleta Scott Scale 930", price: 450.539 },
    { id: "04", title: "Bicicleta Scott Scale 900", price: 235.540 },
  ],
  cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}
});
