import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Board from '../src/components/js/Board';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Reducers from '../src/components/js/reducers/index';


const store = createStore(Reducers);

ReactDOM.render(
<Provider store={store}>
    <Board />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
