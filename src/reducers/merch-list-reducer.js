export default (state = {}, action) => {
  const { name, description, quantity, price, id } = action;
  let newState;
  switch (action.type) {
    case "ADD_MERCH":
      return Object.assign({}, state, {
        [id]: {
          name: name,
          description: description,
          quantity: quantity,
          price: price,
          id: id,
        },
      });
    case "DELETE_MERCH":
      newState = { ...state };
      console.log(newState[id].quantity);
      delete newState[id];
      return newState;

    case "ADD_QUANTITY":
      console.log("Add Reducer Reached");
      console.log("State: " + state[id].quantity);

      const tempState = { ...state };
      console.log("TempState Quantity: " + tempState[id].quantity);
      const newQuantity = tempState[id].quantity + 1;
      tempState[id].quantity = newQuantity;
      return tempState;

      case "REMOVE_QUANTITY":
      console.log("Remove Reducer Reached");

      newState = { ...state };
      if (newState[id].quantity > 0) {
        const tempQuantity = newState[id].quantity - 1;
        newState[id].quantity = tempQuantity;
        return newState;
      }
      else {
        alert("Out of stock");
      }

    default:
      return state;
  }
};
