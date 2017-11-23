import React, { Component } from 'react'
import { connect } from 'react-redux'
import Chart from 'components/chart'
import GoogleMap from 'components/google_map'
import styled from 'styled-components'

const Tr = styled.tr`
  &td, th{
    vertical-align: middle !important;
    text-align: center !important;
  }
  &td:first-of-type, td:first-of-type > div {
    height: 200px;
    width: 250px;
  }
`

class WeatherList extends Component {
  renderWeather (cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(weather => weather.main.temp)
    const pressures = cityData.list.map(weather => weather.main.pressure)
    const humidities = cityData.list.map(weather => weather.main.humidity)
    const { lon, lat } = cityData.city.coord

    return (
      <Tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color='orange' units='K' /></td>
        <td><Chart data={pressures} color='green' units='Hpa' /></td>
        <td><Chart data={humidities} color='black' units='%' /></td>
      </Tr>
    )
  }

  render () {
    return (
      <table className='table'>
        <thead>
          <Tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </Tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps ({ weather }) {
  return { weather }
}

export default connect(mapStateToProps)(WeatherList)
