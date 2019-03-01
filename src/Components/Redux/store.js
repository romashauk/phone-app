import { applyMiddleware, compose, createStore } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
const middlewares = [thunk, createLogger()];
const finalCreateStore = compose(applyMiddleware(...middlewares))(createStore);
export default function configureStore() {
  return finalCreateStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
