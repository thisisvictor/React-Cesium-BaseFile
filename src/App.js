import React, { Component } from 'react';
import './App.css';

//need to import pieces from inside Cesium's folder structure, rather than just import Cesium from "cesium"
import Viewer from "cesium/Source/Widgets/Viewer/Viewer";
import BuildModuleUrl from "cesium/Source/Core/buildModuleUrl";

class App extends Component {
  componentDidMount() {

          /*
          require('cesium/Source/Widgets/widgets.css');
          var BuildModuleUrl = require('cesium/Source/Core/buildModuleUrl');
          BuildModuleUrl.setBaseUrl('./cesium');


          var Viewer = require('cesium/Source/Widgets/Viewer/Viewer');
          */

          //CommonJS style for requiring the specific buildModuleUrl module
          var BuildModuleUrl = require('cesium/Source/Core/buildModuleUrl');
          BuildModuleUrl.setBaseUrl('./cesium/');

          this.viewer = new Viewer(this.cesiumContainer);
      }

      render() {
          return (
              <div>
                  <div id="cesiumContainer" ref={ element => this.cesiumContainer = element }/>
              </div>
          );
      }

}

export default App;
