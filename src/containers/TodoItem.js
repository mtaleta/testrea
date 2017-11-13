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
  height: 40px;
  text-align: center;
  width: 40px;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  border: none;
  float: left;
`

const Button = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin: auto 0;
  font-size: 30px;
  color: #cc9a9a;
  margin-bottom: 11px;
  float: right;
`

const Li = styled.li`
  position: relative;
`

export default class TodoItem extends Component {
  static propTypes = {
    todo: PropTypes.object.isRequired,
    editTodo: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
  }

  state = {
    editing: false
  }

  //雙擊後變更內容
  handleDoubleClick = () => {
    this.setState({ editing: true })
  }

  //存入id與內容
  handleSave = (id, text) => {
    if (text.length === 0) {
      this.props.deleteTodo(id)
    } else {
      this.props.editTodo(id, text)
    }
    this.setState({ editing: false })
  }


  render() {
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
        <div className="view">
          <Check 
            type="checkbox"
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)} 
          />
          <Item onDoubleClick={this.handleDoubleClick}>
            {todo.text}
          </Item>
          <Button className="destroy"
                  onClick={() => deleteTodo(todo.id)} >x</Button>
        </div>
      )
    }

    return (
      <Li className={classnames({
        completed: todo.completed,
        editing: this.state.editing
      })}>
        {element}
      </Li>
    )
  }
}
