import Reactotron from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

let reactotron = Reactotron.configure();
reactotron = Reactotron.use(reactotronRedux());
reactotron = Reactotron.use(sagaPlugin());
if (process.env.NODE_ENV === 'development') {
  reactotron = Reactotron.connect();
}

export default reactotron;
