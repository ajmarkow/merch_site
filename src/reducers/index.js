import formVisibleReducer from './form-visible-reducer';
import merchListReducer from './merch-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterMerchList: merchListReducer
});

export default rootReducer;