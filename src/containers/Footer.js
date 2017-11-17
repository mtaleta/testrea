import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import Tag from '../components/Tag/index'

const { Footers, Count, Ul, Li, Choose, Clean } = Tag

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
}

export default class Footer extends Component {
  // 顯示item總數
  renderTodoCount () {
    const { activeCount } = this.props
    const itemWord = activeCount === 1 ? 'item' : 'items'

    return (
      <Count>
        <strong>{activeCount || 'No'}</strong> {itemWord} left
      </Count>
    )
  }

  // 顯示選擇的All,Active,Completed
  renderFilterLink (filter) {
    const title = FILTER_TITLES[filter]
    // eslint-disable-line no-unused-vars
    const { filter: selectedFilter, onShow } = this.props

    return (
      <Choose style={{ cursor: 'pointer' }}
        onClick={() => onShow(filter)}>
        {title}
      </Choose>
    )
  }

  // 清除所有todo(Clear completed)
  renderClearButton () {
    const { completedCount, onClearCompleted } = this.props
    if (completedCount > 0) {
      return (
        <Clean onClick={onClearCompleted} >Clear completed</Clean>
      )
    }
  }

  render () {
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

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  filter: PropTypes.string.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
  onShow: PropTypes.func.isRequired
}
