import { initializeIcons } from '@uifabric/icons';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';

import DisplayPackage from './DisplayPackage/DisplayPackage';
import Upload from './Upload';
import About from './About';
import './index.css';

// import registerServiceWorker from './registerServiceWorker';

initializeIcons();

const basename=process.env.REACT_APP_BASEPATH + "/";

ReactDOM.render(
  <Router  basename={basename}>
    <App>
      <Route path="/packages/:id/:version?" component={DisplayPackage} />

      <Route path="/upload" component={Upload} />
      <Route path="/about" component={About} />
    </App>
  </Router>,
  document.getElementById('root') as HTMLElement
);

// registerServiceWorker();
