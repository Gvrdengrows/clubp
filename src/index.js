import './index.css';
import reportWebVitals from './reportWebVitals';
import { renderF } from './render';
import state from './Redux/state';
renderF(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
