import ReactDOM from 'react-dom';

import './styles/index.less';
import ROUTER from '@/routes';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(ROUTER, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
