import './index.css';
import reportWebVitals from './reportWebVitals';
import store from './Redux/reduxStore';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let renderF = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={store.getState()}
        dispatch={store.dispatch.bind(store)}
        store = {store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}
renderF(store.getState());

store.subscribe(() => {
  let state = store.getState();
  renderF(state)
})
reportWebVitals();
