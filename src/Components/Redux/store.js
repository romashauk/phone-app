import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducers';
import { createLogger } from 'redux-logger';

const finalCreateStore = compose(applyMiddleware(createLogger()))(createStore);
export default function configureStore() {
  return finalCreateStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
}
