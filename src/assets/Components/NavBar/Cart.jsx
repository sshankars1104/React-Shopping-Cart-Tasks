import React from "react";
import "./Cart.css";

const Cart = ({ cart, setCart }) => {
  const removeFromCart = (item) => {
    setCart(cart.filter((c) => c.id !== item.id));
  };

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <img
            src="https://shop.millenniumbooksource.com/static/images/cart1.png"
            alt="image"
          />
        </div>
      ) : (
        <div className="cart-container">
          {cart.map((item, index) => (
            <div className="cart-product" key={index}>
              <div className="img">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="cart-product-details">
                <h3>{item.productName}</h3>
                <p>Regular Price: $ {item.price.regular}</p>
                <p>Discounted Price: $ {item.price.discounted}</p>
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cart;
