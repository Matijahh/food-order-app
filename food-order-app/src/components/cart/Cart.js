import React from "react";

import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];
  return (
    <div>
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => {
          return <li>{item.name}</li>;
        })}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
