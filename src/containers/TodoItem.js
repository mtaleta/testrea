import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import TodoTextInput from './TodoTextInput'
import styled from 'styled-components'

const Item = styled.div`
  white-space: pre-line;
  word-break: break-all;
  padding: 15px 60px 15px 15px;
  margin-left: 45px;
  display: block;
  line-height: 1.2;
  transition: color 0.4s;
`

// -webkit-appearance: none;隱藏checkbox
const Check = styled.input`
  text-align: center;
  width: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  border: none;
  float: left;
  outline: none;
  -webkit-appearance: none;
  &:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
  }
  &:checked:after {
    content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#bddad5" stroke-width="3"/><path fill="#5dc2af" d="M72 25L42 71 27 56l-4 4 20 20 34-52z"/></svg>');
  }
`
const Button = styled.button`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: white;
  margin-bottom: 11px;
  float: right;
  border: 0;
  background: none;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.5s ease-out;
  &:hover {
    color: #cc9a9a;
  }
`
const Li = styled.li`
  position: relative;
  border-bottom: 1px solid #ededed;
`

export default class TodoItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      editing: false
    }
  }

  // 雙擊後變更內容
  // handleDoubleClick = () => {
  //   this.setState({ editing: true })
  // }
  handleDoubleClick () {
    this.setState({
      editing: true
    })
  }

  // 儲存修改
  handleSave (id, text) {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }

  render () {
    const { todo, completeTodo, deleteTodo } = this.props
    let element
    if (this.state.editing) {
      element = (
        <TodoTextInput
          text={todo.text}
          editing={this.state.editing}
          onSave={(text) => this.handleSave(todo.id, text)}
        />
      )
    } else {
      element = (
        <div className='view'>
          <Check
            type='checkbox'
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          <Item onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </Item>
          <Button className='destroy'
            onClick={() => deleteTodo(todo.id)} >x</Button>
        </div>
      )
    }

    return (
      <Li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}
        style={todo.completed
        ? {color: '#d9d9d9', textDecoration: 'line-through'} : {color: 'black'}}
      >
        {element}
      </Li>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
}
