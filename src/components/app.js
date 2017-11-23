import React, { Component } from 'react'
import SearchBar from '../containers/search_bar'
import WeatherList from '../containers/weather_list'
import { Link } from 'react-router-dom'
// 組件
import Button from 'components/Buttons'

export default class App extends Component {
  render () {
    return (
      <div>
        <Button>
          <Link to='/'>back</Link>
        </Button>
        <h1>天氣預報</h1>
        <SearchBar />
        <WeatherList />
      </div>
    )
  }
}
