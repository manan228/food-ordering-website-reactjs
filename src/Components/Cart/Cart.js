import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {

    const cartCtx = useContext(CartContext)

    let totalAmount = 0;

    // cartCtx.items.map(item => {

    //     totalAmount += item.price
    // })

    const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {

        totalAmount += item.price
        return <li>Name: {item.name} Price: {item.price} Quantity: {item.quantity}</li>
      })}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
