import { useContext } from "react";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const onRemoveHandler = () => {

    
  }

  const onAddHandler = () => {

  }
  let totalAmount = 0;

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => {
        console.log(item);
        totalAmount += item.price;
        return (
          <CartItem
            key={item.id}
            price={item.price}
            name={item.name}
            amount={item.quantity}
            onRemove={onRemoveHandler}
            onAdd={onAddHandler}
          />
        );
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
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
