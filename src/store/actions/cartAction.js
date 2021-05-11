export const INCREASE = "INCREASE";
export const DECREASE = "DECREASE";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export const handleIncrement = diff => {
  return {
    type: "INCREASE",
    diff,
  };
};

export const handledecrement = diff => {
  return {
    type: "DECREASE",
    diff,
  };
};

export const handleDelete = item => {
  return {
    type: "REMOVE_FROM_CART",
    payload: item,
  };
};

export const handleItemCounts = e => {
  return {
    type: "HANDLECOUNT",
    e,
  };
};

export const handleToggle = id => {
  return { type: "TOGGLE_ITEM", id };
};
