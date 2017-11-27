import React, {Component} from 'react'
import PropTypes from 'prop-types'
import PostItem from './PostItem'
import List2 from '../List2'

const { List, Ul } = List2

export default class PostList extends Component {
  constructor (props) {
    super(props)

    this.state = {}

    this.handleVote = this.handleVote.bind(this)
  }

  render () {
    const {posts} = this.props

    let children = (
      <List>
        <Ul>快<br />現在沒東西</Ul>
      </List>
    )
    if (posts.length) {
      children = posts.map(p => (
        <Ul key={p.id} action>
          <PostItem {...p} onVote={this.handleVote} />
        </Ul>
      ))
    }
    return (
      <List>
        <Ul>{children}</Ul>
      </List>
    )
  }

  handleVote (id) {
    this.props.onVote(id)
  }
}
PostList.PropTypes = {
  posts: PropTypes.array,
  onVote: PropTypes.func
}
