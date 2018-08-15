import React, { Component } from 'react'

//need to import pieces from inside Cesium's folder structure, rather than just import Cesium from "cesium"
import Viewer from "cesium/Source/Widgets/Viewer/Viewer"
import BuildModuleUrl from 'cesium/Source/Core/buildModuleUrl'
import "cesium/Source/Widgets/widgets.css"

class CesiumContainer extends Component {
  componentDidMount() {
          BuildModuleUrl.setBaseUrl('./cesium/')
          this.viewer = new Viewer(this.cesiumContainer)
      }

      render() {
          return (
              <div>
                  <div id="cesiumContainer" ref={ element => this.cesiumContainer = element }/>
              </div>
          )
      }

}

export default CesiumContainer
