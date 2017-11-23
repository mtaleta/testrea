import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../../actions/booklist'
import { bindActionCreators } from 'redux'
import List from 'components/List'

const { Ul, Li } = List

class BookList extends Component {
  renderList () {
    return this.props.books.map((book) => {
      return (
        <Li
          key={book.title}
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </Li>
      )
    })
  }

  render () {
    return (
      <Ul>
        {this.renderList()}
      </Ul>
    )
  }
}
  // 顯示清單烈表
function mapStateToProps (state) {
  return {
    books: state.books
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({ selectBook: selectBook }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList)
