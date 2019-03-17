import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
// import { IntlProvider, FormattedMessage } from 'react-intl';
// import {addLocaleData} from 'react-intl';
// import en from 'react-intl/locale-data/en';
// import ru from 'react-intl/locale-data/ru';
// import ua from 'react-intl/locale-data/ua';
// addLocaleData([...en, ...ru]);

ReactDOM.render(<App />,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
