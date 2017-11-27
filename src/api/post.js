import axios from 'axios'
import uuid from 'uuid/v4'
import moment from 'moment'
import 'babel-polyfill'

const postKey = 'posts'

export function listPosts (searchText = '') {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('searchText')
      resolve(_listPosts(searchText))
    }, 500)
  })
}

// Simulated server-side code
function _listPosts (searchText = '') {
  let postString = localStorage.getItem(postKey)
  let posts = postString ? JSON.parse(postString) : []
  if (posts.length > 0 && searchText) {
    posts = posts.filter(p => {
      return p.text.toLocaleLowerCase().indexOf(searchText.toLowerCase()) !== -1
    })
  }
  return posts
};

export function createPost (mood, text) {
  return new Promise((resolve, reject) => {
    resolve(_createPost(mood, text))
  })
}

// Simulated server-side code
function _createPost (text) {
  const newPost = {
    id: uuid(),
    open: false,
    // mood: mood,
    text: text
    // ts: moment().unix(),
    // clearVotes: 0,
    // cloudsVotes: 0,
    // drizzleVotes: 0,
    // rainVotes: 0,
    // thunderVotes: 0,
    // snowVotes: 0,
    // windyVotes: 0
  }
  const posts = [
    newPost,
    ..._listPosts()
  ]
  console.log(newPost.open)
  localStorage.setItem(postKey, JSON.stringify(posts))
  return newPost
}

export function createVote (id) {
  return new Promise((resolve, reject) => {
    _createVote(id)
    resolve()
  })
}

// Simulated server-side code
function _createVote (id) {
  const posts = _listPosts().map(p => {
    if (p.id === id) {
      // console.log(mood.toLowerCase())
      // if (mood === 'True') {
      //   console.log('find true')
      //   p.open = true
      // } else {
      //   p[mood.toLowerCase() + 'Votes']++
      //   p.open = false
      // }
    }
    return p
  })
  localStorage.setItem(postKey, JSON.stringify(posts))
}

export function ChangeOpen (id, open) {
  return new Promise((resolve, reject) => {
    _ChangeOpen(id, open)
    resolve()
  })
}

// Simulated server-side code
function _ChangeOpen (id, open) {
  const posts = _listPosts().map(p => {
    if (p.id === id) {
      p.open = true
      console.log('match +id = ' + p.id + 'open = ' + p.open)
    } else {
      console.log('notmatch +id = ' + p.id + 'open = ' + p.open)
    }
    return p
  })
  localStorage.setItem(postKey, JSON.stringify(posts))
}
