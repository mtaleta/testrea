import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classnames from 'classnames'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
// import { Tag } from '../components/Tag/index'
//待查Q:Module build failed?

const Count = styled.div`
  float: left;
`
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  position: absolute;
  right: 0;
  left: 0;
`
const Li = styled.li`
  display: inline;
`
const Choose = styled.a`
  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  &:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }
  &:checked {
    border-color: rgba(175, 47, 47, 0.2);
  }
`
const Footers = styled.div`
  color: #777;
  padding: 10px 15px;
  height: 20px;
  text-align: center;
  border-top: 1px solid #e6e6e6;
`
const Clean = styled.button`
  float: right;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  color: inherit;
  background: none;
  border: 0;
  font-size: 100%;
`

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

export default class Footer extends Component {
  static propTypes = {
    completedCount: PropTypes.number.isRequired,
    activeCount: PropTypes.number.isRequired,
    filter: PropTypes.string.isRequired,
    onClearCompleted: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
  }

  //顯示item總數
  renderTodoCount() {
    const { activeCount } = this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
      <Count>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </Count>
    )
  }

  //顯示選擇的All,Active,Completed
  renderFilterLink(filter) {
    const title = FILTER_TITLES[filter]
    const { filter: selectedFilter, onShow } = this.props

    return (
      <Choose style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {title}
      </Choose>
    )
  }

  //清除所有todo(Clear completed)
  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <Clean onClick={onClearCompleted} >Clear completed</Clean>
      )
    }
  }

  render() {
    return (
      <Footers>
        {this.renderTodoCount()}
          <Ul>
            {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
              <Li key={filter}>
                 {this.renderFilterLink(filter)} 
              </Li>
            )}
          </Ul>
          {this.renderClearButton()}
      </Footers>

    )
  }
}
