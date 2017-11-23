import React, { Component } from 'react'

class GoogleMap extends Component {
  // 當元件被寫入 DOM 之後觸發
  componentDidMount () {
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    })
  }

  render () {
    return <div ref='map' />
  }
}

export default GoogleMap
