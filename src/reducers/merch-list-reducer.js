export default (state = {}, action) => {
  const { name, description, quantity, price, id} = action;
  switch (action.type) {
    case 'ADD_MERCH':
      return Object.assign({}, state, {
        [id]: {
          name: name,
          description: description,
          quantity: quantity,
          price: price,
          id: id
        }
      });
    case 'DELETE_MERCH':
      const newState = {...state};
      delete newState[id];
      return newState;
  default:
    return state;
  }
}