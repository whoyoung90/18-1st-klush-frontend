export const handleIncrement = item => ({
  type: "INCREASE",
  payload: item,
});
export const addCart = item => {
  return {
    type: "ADDCART",
    payload: item,
  };
};

// export const handleCheckbox = () =>

export const handleDecrement = item => ({
  type: "DECREASE",
  payload: item,
});

export const handleDelete = item => ({
  type: "REMOVE_FROM_CART",
  payload: item,
});

export const handleItemCounts = e => ({
  type: "HANDLECOUNT",
  e,
});

export const handleToggle = id => ({
  type: "TOGGLE_ITEM",
  id,
});
