import React from "react";
// import { connect } from 'react-redux';

// import { addProductToCart } from '../store/actions';
import "./Products.css";
import NavBar from "../../components/NavBar";
import CartContext from "../../context/CartContext";

const ProductsPage = props => {
  return (
    <CartContext.Consumer>
      {context => (
        <React.Fragment>
          <NavBar
            cartItemNumber={context.cart.reduce((count, curItem) => {
              return count + curItem.quantity;
            }, 0)}
          />
          <main className="products">
            <ul>
              {context.products.map(product => (
                <li key={product.id}>
                  <div>
                    <strong>{product.title}</strong> - ${product.price}
                  </div>
                  <div>
                    <button
                      onClick={context.addProductToCart.bind(this, product)}
                    >
                      Agregar al Carrito
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </main>
        </React.Fragment>
      )}
    </CartContext.Consumer>
  );
};


export default ProductsPage;
