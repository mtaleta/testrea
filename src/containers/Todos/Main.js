import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from './Header'
import MainSection from './MainSection'
import * as TodoActions from '../../actions'
import Background from 'components/Background'
import { Link } from 'react-router-dom'
// 組件
import Button from 'components/Buttons'

const { Back } = Background

const Main = ({todos, actions}) => (
  <Back>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
    <Button>
      <Link to='/'>back</Link>
    </Button>
  </Back>
)

Main.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  todos: state.todos
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)
