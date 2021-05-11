const INITIAL_DATA = {
  cartList: [],
};

const ADDCART = "ADDCART";

const Cart = (state = INITIAL_DATA, action) => {
  switch (action.type) {
    case ADDCART:
      return {
        ...state,
        cartList: [...state.cartList, action.payload],
      };
    default:
      return state;
  }
};

export default Cart;
