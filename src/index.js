import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import registerServiceWorker from './registerServiceWorker';

import "cesium/Source/Widgets/widgets.css";
import BuildModuleUrl from "cesium/Source/Core/buildModuleUrl";
BuildModuleUrl.setBaseUrl('./cesium');

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
