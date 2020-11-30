import merchListReducer from "../reducers/merch-list-reducer.js";
describe('Reducer for Merch List', () => {
  let action;
  const currentState = {
    1: {
    name: 'band t shirt',
    description: 'a vintage guns and roses shirt',
    quantity: 1,
    price: 100,
    id: 1
  },
  2: {
    name: 'band hat',
    description: 'a vintage guns and roses hat',
    quantity: 1,
    price: 80,
    id: 2
  }
}
  test('merchListReducer', () => {
      expect(merchListReducer({}, {type:null})).toEqual({});
      })
      test('should add new merch item to merchlist', () => {
        const {name,description,quantity, price,id} = currentState;
        action = {
          type: 'ADD_MERCH',
          name: name,
          description: description,
          quantity: quantity,
          price:price,
          id:id
        }
        expect(merchListReducer({}, action)).toEqual({[id]: {
          name:name,
          description:description,
          quantity:quantity,
          price:price,
          id:id
        }});
        });

          test('should delete an item from object', () => {
            action = {
              type:'DELETE_MERCH',
              id:1
            };
            expect(merchListReducer(currentState, action)).toEqual({
              2: {
              name: 'band hat',
              description: 'a vintage guns and roses hat',
              quantity: 1,
              price: 80,
              id: 2 }
            });
              });
});