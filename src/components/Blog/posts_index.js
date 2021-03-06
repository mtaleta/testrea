import _ from 'lodash'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPosts } from '../../actions/blog_action'
// 組件
import Button from '../Buttons'
import List from '../List'

const { Ul, Li } = List

class PostsIndex extends Component {
  componentDidMount () {
    this.props.fetchPosts()
  }

  renderPosts () {
    // map迭代集合
    return _.map(this.props.posts, post => {
      return (
        <Li className='list-group-item' key={post.id}>
          <Button>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </Button>
        </Li>
      )
    })
  }
  render () {
    console.log(this.props.posts)
    return (
      <div>
        <div className='text-xs-right'>
          <Button>
            <Link className='btn' to='/blog/new'>Add a Post</Link>
          </Button>
          <Button>
            <Link to='/'>back</Link>
          </Button>
          <h3>留下訊息</h3>
          <Ul style={{
            'display': 'flex',
            'justifyContent': 'center',
            'alignItems': 'start',
            'flexFlow': 'column',
            'margin': '20px'
          }}
          >
            {this.renderPosts()}
          </Ul>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return { posts: state.posts }
}

export default connect(mapStateToProps, {fetchPosts})(PostsIndex)
