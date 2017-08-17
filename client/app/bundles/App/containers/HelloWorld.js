import {bindActionCreators} from 'redux'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';
import {Link} from 'react-router-dom'

class HelloWorld extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)
  }

  onClickAction() {
    this.props.createBook({
      variables: {name: 'ワンピース'},
    })
  }


  render() {
    console.log('******************')
    console.log(this.props)
    console.log('******************')
    return (
      <div>
        <h3>Hello {this.props.name} !!</h3>
        <h4>{this.props.book && this.props.book.name}</h4>
        <ul>
        {this.props.allBooks && this.props.allBooks.map((e, index) => {
            return (
              <li key={index}>{e.name}</li>
            )
          })
        }
        </ul>
        <p><Link to="/sample">Sampleへ</Link></p>
        <button type="button" onClick={this.onClickAction.bind(this)}>送信</button>
      </div>
    )
  }
}

const fetchAllBooks = gql`
  query {
    allBooks {
      name
    }
  }
`

const fetchBook = gql`
  query {
    book(id: 1) {
      name
    }
  }
`

const createBook = gql`
  mutation CreateBook($name: String!) {
    CreateBook(input: {name: $name}) {
      book {name}
    }
  }
`


function mapStateToProps(state) {
  console.log('******************')
  console.log(state)
  console.log('******************')
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}), dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(fetchBook, {
    props: ({ data }) => ({
      book: data.book
    }),
  }),
  graphql(fetchAllBooks, {
    props: ({ data }) => ({
      allBooks: data.allBooks
    }),
  }),
  graphql(createBook, {
    name: 'createBook'
  })
)(HelloWorld);

