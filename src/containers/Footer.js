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

const Wrapper = styled.div`
  color: #777;
  text-align: center;
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

const A = styled.a`
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
      <A style={{ cursor: 'pointer' }}
         onClick={() => onShow(filter)}>
        {title}
      </A>
    )
  }

  //清除所有todo
  renderClearButton() {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <button className="clear-completed"
                onClick={onClearCompleted} >
          Clear completed
        </button>
      )
    }
  }

  render() {
    return (
      <footer className="footer">
        <Wrapper>
        {this.renderTodoCount()}
          <Ul>
            {[ SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED ].map(filter =>
              <Li key={filter}>
                 {this.renderFilterLink(filter)} 
              </Li>
            )}
          </Ul>
          {this.renderClearButton()}
        </Wrapper>
      </footer>

    )
  }
}
