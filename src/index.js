import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/app';

const MOUNT_NODE = document.getElementById('index');

const render = () => {
  ReactDOM.render(
    <App />,
    MOUNT_NODE
  );
};


render();