import { useReducer, useState } from "react";
import CartContext from "./cart-context";

// const defaultCartState = {
//   items: [],
//   totalAmount: 0,
// };

// const cartReducer = (state, action) => {
//   if (action.type === "ADD") {
//     // const updatedItems = state.items.concat(action.item);

//     // const updatedTotalAmount =
//     //   state.totalAmount + action.item.price * action.item.amount;

//     defaultCartState.items.push(action.item)

//     // return { items: updatedItems, totalAmount: updatedTotalAmount };
//     return defaultCartState
//   }
//   return defaultCartState;
// };

const CartProvider = (props) => {
//   const [cartState, dispatchCartAction] = useReducer(
//     cartReducer,
//     defaultCartState
//   );

const [items, updateItems] = useState([]);

  const addItemToCartHandler = (item) => {
    // dispatchCartAction({ type: "ADD", item: item });
    updateItems([...items, item])
  };

  const removeItemFromCartHandler = (id) => {
    // dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: items,
    // totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
        {console.log(items)}
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
