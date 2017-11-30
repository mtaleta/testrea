import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchPost, deletePost } from '../../actions/blog_action'
// 組件
import Button from '../Buttons'

class PostShow extends Component {
  componentDidMount () {
    if (!this.props.post) {
      const { id } = this.props.match.params
      this.props.fetchPost(id)
    }
  }

  onDeleteClick () {
    const { id } = this.props.match.params

    this.props.deletePost(id, () => {
      this.props.history.push('/blog')
    })
  }
  render () {
    const { post } = this.props

    if (!post) {
      return <div>Loading</div>
    }

    return (
      <div style={{
        'display': 'flex',
        'justifyContent': 'center',
        'alignItems': 'center'
      }}
      >
        <Button>
          <Link to='/blog' className='btn'>Back to post</Link>
        </Button>
        <Button>
          <Link to='/' className='btn'>Back to index</Link>
        </Button>
        <Button
          className='btn pull-xs-right'
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </Button>
        <h3>標題：{post.title}</h3>
        <h6>類別： {post.categories}</h6>
        <p>內容：{post.content}</p>
      </div>
    )
  }
}

function mapStateToProps ({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostShow)
