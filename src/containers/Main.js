import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Header from '../containers/Header'
import MainSection from '../containers/MainSection'
import * as TodoActions from '../actions'
import styled from 'styled-components'

const Background = styled.div`
  min-width: 230px;
  max-width: 550px;
  margin: 0 auto;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
`

const Main = ({todos, actions}) => (
  <Background>
    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
  </Background>
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
