import {bindActionCreators} from 'redux'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import gql from 'graphql-tag'
import {withRouter, Link} from 'react-router-dom'

import { Button } from 'react-bootstrap'

const fetchAllBooks = gql`
  query {
    allBooks {
      id
      name
    }
  }
`

const fetchBook = gql`
  query fetchBook($id: ID!){
    book(id: $id) {
      name
    }
  }
`

const destroyBook = gql`
  mutation DestroyBook($id: ID!) {
    DestroyBook(input: {id: $id}) {
      book {id}
    }
  }
`

class BookDetail extends Component {
  static propTypes = {
    destroyBook: PropTypes.func,
    match: PropTypes.object,
    history: PropTypes.object,
    book: PropTypes.object
  }

  constructor(props) {
    super(props)
  }

  onClickDelete() {
    const {match, history} = this.props
    this.props.destroyBook({
      variables: {id: match.params.id},
      refetchQueries: [{
        query: fetchAllBooks
      }]
    }).then(() => {
      history.push('/books')
    })
  }

  render() {
    const {book} = this.props
    return (
      <div style={{padding: '0 16px'}}>
        <h4>{book && book.name}</h4>
        <p><Button bsStyle="info" onClick={this.onClickDelete.bind(this)}>削除</Button></p>
        <p><Link to="/books">戻る</Link></p>
      </div>
    )
  }
}


function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}), dispatch)
}

export default withRouter(compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(fetchBook, {
    options: (ownProps) => ({
      variables: {
        id: ownProps.match.params.id
      }
    }),
    props: ({ data }) => ({
      book: data.book
    })
  }),
  graphql(destroyBook, {
    name: 'destroyBook'
  })
)(BookDetail))


