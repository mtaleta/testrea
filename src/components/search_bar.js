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
      <form>
        <Wrapper style={Bar}>
          <Edit
            style={InputEdit}
            placeholder='找什麼好?'
            value={this.state.term}
            onChange={event => this.onInputChange()} />
        </Wrapper>
        <span>
          <button>Submit</button>
        </span>
      </form>
    )
  }

  onInputChange (term) {
    this.setState({term:event.target.value})
    this.props.onSearchTermChange(term)
  }
}

export default SearchBar
