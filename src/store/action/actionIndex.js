export const addCart = item => {
  return {
    type: "ADDCART",
    payload: item,
  };
};
