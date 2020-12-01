import formVisibleReducer from '../../src/reducers/form-visible-reducer';

describe('formVisible Reducer initial test', () => {
      test('Returns true if FORM_TOGGLE action taken', () => {
        expect(formVisibleReducer(false,{type: 'TOGGLE_FORM'})).toEqual(true);
        })
})