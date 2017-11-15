import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'
import Footer from './Footer'
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/TodoFilters'
import styled from 'styled-components'

const Check = styled.input`
  position: relative;
  top: -55px;
  left: -12px;
  width: 60px;
  height: 34px;
  text-align: center;
  border: none;
  outline: none;
  transform: rotate(90deg);
  -webkit-appearance: none;
  &:before{
      content: '❯';
      font-size: 22px;
      color: #e6e6e6;
      padding: 10px 27px 10px 27px;
  }
  &:checked:before {
    color: #737373;
  }
`
const Ul = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  margin-top: -40px;
`
const Section = styled.section`
  position: relative;
  z-index: 2;
  border-top: 1px solid #e6e6e6;
`

const TODO_FILTERS = {
  [SHOW_ALL]: () => true,
  [SHOW_ACTIVE]: todo => !todo.completed,
  [SHOW_COMPLETED]: todo => todo.completed
}

export default class MainSection extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  }

  state = { filter: SHOW_ALL }

  //清除
  handleClearCompleted = () => {
    this.props.actions.clearCompleted()
  }

  //變更filter
  handleShow = filter => {
    this.setState({ filter })
  }

//   handleDropdownSelect(mood) {
//     this.props.dispatch(dropdownSelect(mood));
//     console.log(this.props);
//     //this.setState({mood: mood});
// }

  // completeAll() {
  //   this.props.dispatch(completeAll())
  // }

  //全選按鈕
  renderToggleAll(completedCount) {
    const { todos, actions } = this.props
    if (todos.length > 0) {
      return (
          <Check type="checkbox"
                 checked={completedCount === todos.length}
                 onClick={actions.completeAll}
          />
      )
    }
  }

  //接Footer方法,並操作
  renderFooter(completedCount) {
    const { todos } = this.props
    const { filter } = this.state
    const activeCount = todos.length - completedCount

    if (todos.length) {
      return (
        <Footer completedCount={completedCount}
                activeCount={activeCount}
                filter={filter}
                onClearCompleted={this.handleClearCompleted}
                onShow={this.handleShow} />
      )
    }
  }

  render() {
    const { todos, actions } = this.props
    const { filter } = this.state

    const filteredTodos = todos.filter(TODO_FILTERS[filter])
    const completedCount = todos.reduce((count, todo) =>
      todo.completed ? count + 1 : count,
      0
    )

    return (
      <Section>
        {this.renderToggleAll(completedCount)}
        <Ul>
          {filteredTodos.map(todo =>
            <TodoItem key={todo.id} todo={todo} {...actions} />
          )}
        </Ul>
        {this.renderFooter(completedCount)}
      </Section>
    )
  }
}
