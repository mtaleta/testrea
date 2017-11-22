import React, { Component } from 'react'
import Input from '../components/Input/index'

const { Wrapper, Edit } = Input
const Bar = {
  'width': '75%'
}
const InputEdit = {
  'magin': '20px',
  'textAlign': 'center'
}

class SearchBar extends Component {
  constructor (props) {
    super(props)

    this.state = { term: '' }
  }
  render () {
    return (
      <Wrapper style={Bar}>
        <Edit
          style={InputEdit}
          placeholder='找什麼好?'
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </Wrapper>
    )
  }

  onInputChange (term) {
    this.setState({term})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar
