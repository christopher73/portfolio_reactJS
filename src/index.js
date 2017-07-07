import React from 'react';
import ReactDOM from 'react-dom';
import routes from './routes';
import ReallySmoothScroll from 'really-smooth-scroll';

import './theme/globalStyle';

ReallySmoothScroll.shim();

ReactDOM.render(
  routes,
  document.getElementById('root')
);
