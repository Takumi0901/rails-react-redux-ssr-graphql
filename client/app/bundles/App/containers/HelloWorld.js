import {bindActionCreators} from 'redux'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo'
import {reduxForm, Field} from 'redux-form'
import gql from 'graphql-tag'
import {Link} from 'react-router-dom'

import FormField from '../components/FormField'
import { Button } from 'react-bootstrap'

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

class HelloWorld extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    reset: PropTypes.func,
    createBook: PropTypes.func,
    allBooks: PropTypes.array,
    name: PropTypes.string,
    book: PropTypes.object
  }

  constructor(props) {
    super(props)
  }

  onClickAction(values) {
    this.props.createBook({
      variables: {name: values.book.name},
      refetchQueries: [{
        query: fetchAllBooks
      }]
    })
  }

  componentWillReceiveProps(nextProps) {
    const {allBooks, reset} = this.props
    if(allBooks && nextProps && allBooks !== nextProps.allBooks) {
      reset()
    }
  }


  render() {
    const {handleSubmit, name, book, allBooks} = this.props
    return (
      <div style={{padding: '0 16px'}}>
        <h3>Hello {name} !!</h3>
        <Field
          name="book.name"
          component={FormField}
          type="text"
          label="本の名前を入力"/>
        <Button bsStyle="success" onClick={handleSubmit(this.onClickAction.bind(this))}>送信</Button>
        <h4>{book && book.name}</h4>
        <ul>
          {
            allBooks && allBooks.map((e, index) => {
              return (
                <li key={index}>{e.name}</li>
              )
            })
          }
        </ul>
        <p><Link to="/sample">Sampleへ</Link></p>
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

let AddBookForm = reduxForm({
  form: 'AddBookForm',
  enableReinitialize: true
})(HelloWorld)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(fetchBook, {
    props: ({ data }) => ({
      book: data.book
    })
  }),
  graphql(fetchAllBooks, {
    props: ({ data }) => ({
      allBooks: data.allBooks
    })
  }),
  graphql(createBook, {
    name: 'createBook'
  })
)(AddBookForm)


