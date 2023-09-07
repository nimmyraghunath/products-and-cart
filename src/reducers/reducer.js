

export const reducer = (state, action) => {
  console.log("reducer called", action.type);
  switch (action.type) {
    case "GET_PRODUCTS":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      return { ...state, cart: [{ ...action.payload }, ...state.cart] };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((prod) => prod.id !== action.payload.id),
      };
    case "CHANGE_QTY":
      return {
        ...state,
        cart: state.cart.filter((prod) =>
          prod.id === action.payload.id
            ? (prod.qty = action.payload.qty)
            : prod.qty
        ),
      };
    default:
      return state;
  }
};
