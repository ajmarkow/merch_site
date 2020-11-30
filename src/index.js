import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore} from 'redux';
import reducer from './reducers/merch-list-reducer';
import { Provider } from 'react-redux';

const store = createStore(reducer);

ReactDOM.render(
  //Create React App Generated with Strict Mode but doesn't seem to be needed for app.
  // <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
