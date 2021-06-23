import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux/store';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab, fas)
// import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(
  <Provider store={store}>
     <Router>
    <App />
    </Router>
    </Provider>,

  document.getElementById('root')
);

serviceWorker.unregister();
// registerServiceWorker();







