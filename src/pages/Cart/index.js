import React, { useContext, useEffect } from "react";

import "./Cart.css";
import CartContext from "../../context/CartContext";
import NavBar from "../../components/NavBar";

const CartPage = props => {
  const context = useContext(CartContext);

  useEffect(() => {
    console.log(context);
  }, []);

  return (
    <React.Fragment>
      <NavBar
        cartItemNumber={context.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="cart">
        {context.cart.length <= 0 && <p>¡El carrito está vacío!</p>}
        <ul>
          {context.cart.map(cartItem => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={context.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remover del Carrito
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
};



export default CartPage;
