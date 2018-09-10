import { applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import createSagaMiddleware from 'redux-saga';
import Reactotron from 'reactotron-react-js';

import ReactotronConfig from './ReactotronConfig';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export default () => {
  const sagaMonitor = Reactotron.createSagaMonitor();
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = ReactotronConfig.createStore(rootReducer, composedEnhancers);

  sagaMiddleware.run(rootSaga);

  return store;
};
