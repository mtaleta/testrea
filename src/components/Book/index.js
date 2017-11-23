import React, { Component } from 'react'
import BookList from './list'
import BookDetail from './detail'
import { Link } from 'react-router-dom'
import Button from 'components/Buttons'

export default class Book extends Component {
  render () {
    return (
      <div>
        <BookList />
        <BookDetail />
        <Button>
          <Link to='/'>back</Link>
        </Button>
      </div>
    )
  }
}
