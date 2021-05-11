export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const TOGGLE_ITEM = "TOGGLE_ITEM";
export const HANDLECOUNT = "HANDLECOUNT";

export const handleIncrement = item => ({
  type: INCREASE,
  payload: item,
});

// export const handleCheckbox = () =>

export const handleDecrement = item => ({
  type: DECREASE,
  payload: item,
});

export const handleDelete = item => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const handleItemCounts = e => ({
  type: HANDLECOUNT,
  e,
});

export const handleToggle = id => ({
  type: TOGGLE_ITEM,
  id,
});
