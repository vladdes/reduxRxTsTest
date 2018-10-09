import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const ReduxPromise = require('redux-promise').default;
// import promise from "redux-promise-middleware";
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';

const createStoreWithMiddleware: any = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
 <Provider store={createStoreWithMiddleware(reducers)}>
   <App />
 </Provider>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
