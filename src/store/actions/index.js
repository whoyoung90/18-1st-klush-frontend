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

export const handleDecrement = item => ({
  type: "DECREASE",
  payload: item,
});

export const handleDelete = () => ({
  type: "DELETE",
});

export const handleItemCounts = e => ({
  type: "HANDLECOUNT",
  e,
});

export const handleCheck = () => ({
  type: "HANDLE_CHECKBOX",
});

export const handleSelect = item => ({
  type: "HANDLE_SELECT",
  payload: item,
});

export const selectAll = () => ({
  type: "SELECT_ALL",
});

export const changeCheck = bool => ({
  type: "CHANGE_CHECK",
  payload: bool,
});
