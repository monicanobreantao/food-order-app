import { createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  clearCart: () => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];

      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };

      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedItems = [...state.items];

    if (existingCartItem.quantity > 1) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };

      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.splice(existingCartItemIndex, 1);
    }

    return { ...state, items: updatedItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchcartAction] = useReducer(cartReducer, { items: [] });

  function addItem(item) {
    dispatchcartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchcartAction({ type: "REMOVE_ITEM", id });
  }

  function clearCart() {
    dispatchcartAction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    items: cart.items,
    addItem: addItem,
    removeItem: removeItem,
    clearCart: clearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
