import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import PostForm from './PostForm'
import PostList from './PostList'
import { listPosts, createPost } from '../../api/post'
import { connect } from 'react-redux'

class Today extends Component {
  constructor (props) {
    super(props)

    this.state = {
      postLoading: false,
      posts: [] // 訊息是陣列
    }
    this.handleCreatePost = this.handleCreatePost.bind(this)
    // this.handleCreateVote = this.handleCreateVote.bind(this)
  }

  componentDidMount () {
    this.listPosts(this.props.searchText)
  }

  // 已掛載的元件收到新的 props 時被觸發
  // 比較 this.props 和 nextProps 然後再用 this.setState 去改變狀態
  componentWillReceiveProps (nextProps) {
    if (nextProps.searchText !== this.props.searchText) {
      this.listPosts(nextProps.searchText)
    }
  }

  render () {
    const {posts, postLoading} = this.state
    return (
      <div className='today'>
        <div className='posts'>
          <PostForm onPost={this.handleCreatePost} />
          <PostList posts={posts} onVote={this.handleCreateVote} />{
            postLoading &&
            <div>Loading</div>
          }
        </div>
      </div>
    )
  }

  listPosts (searchText) {
    this.setState({
      postLoading: true
    }, () => {
      listPosts(searchText).then(posts => {
        this.setState({
          posts,
          postLoading: false
        })
      }).catch(err => {
        console.error('Error listing posts', err)

        this.setState({
          posts: [],
          postLoading: false
        })
      })
    })
  }

  handleCreatePost (text) {
    createPost(text).then(() => {
      this.listPosts(this.props.searchText)
    }).catch(err => {
      console.error('Error creating posts', err)
    })
  }

  // handleCreateVote (id) {
  //   createVote(id).then(() => {
  //     this.listPosts(this.props.searchText)
  //   }).catch(err => {
  //     console.error('Error create vote', err)
  //   })
  // }
}

export default connect((state) => {
  return {
    ...state.weather,
    unit: state.unit
  }
})(Today)
