import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Today from './Today'
import {searchKeyPress,
        clearSearch} from '../../actions/Post-action.js'

export default class Main extends Component {
  constructor (props) {
    super(props)

    this.state = {
      searchText: '' // 搜尋功能
    }
    this.store = null
    this.searchEl = null // 搜尋後回傳為null

    this.handleSearchKeyPress = this.handleSearchKeyPress.bind(this)
    this.handleClearSearch = this.handleClearSearch.bind(this)
  }
  render () {
    const {searchText} = this.props
    return (
      <div>
        {/* <div> 搜尋功能先不顯示
          <input
            type='text'
            // getRef={this.searchEl}
            placeholder='找什麼'
            onKeyPress={this.handleSearchKeyPress}
            // getRef={e => this.searchEl = e}
            />
          {searchText && <i onClick={this.handleClearSearch}>X</i>}
    </div> */}
        <Today sesrchText={searchText} />
      </div>
    )
  }

  // 點擊
  handleSearchKeyPress (e) {
    var keyCode = e.keyCode || e.which
    if (keyCode === 13) {
      console.log('Press')
      this.store.dispatch(searchKeyPress(e.target.value))
    }
    this.forceUpdate()
    // render() 方法從 this.props 或者 this.state 之外的地方讀取數據，通過調用 forceUpdate() 告訴 React 需要再次運行 render()。
    // 如果直接改變了 this.state，也需要調用 forceUpdate()。
    // forceUpdate() 會導致 render() 方法在相應的組件上被調用，
    // 並且子級組件也會調用自己的 render()，但是如果標記改變了，那麼 React 僅會更新 DOM。
  }

  handleClearSearch () {
    this.store.dispatch(clearSearch())
    this.forceUpdate()
    this.searchEl.value = ''
  }
}

Main.PropTypes = {
  searchText: PropTypes.string
}
