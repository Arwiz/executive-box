import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import MainRoutes from './app/routes/';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';


import store from './app/redux/store'
import {Provider} from "react-redux";

ReactDOM.render(<Provider store={store}><MainRoutes /></Provider>, document.getElementById('root'));
serviceWorker.unregister();
