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
      id
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

const destroyBook = gql`
  mutation DestroyBook($id: ID!) {
    DestroyBook(input: {id: $id}) {
      book {id}
    }
  }
`

class BookList extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    reset: PropTypes.func,
    createBook: PropTypes.func,
    allBooks: PropTypes.array,
    myName: PropTypes.string,
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
    const {handleSubmit, myName, allBooks} = this.props
    return (
      <div style={{padding: '0 16px'}}>
        <h3>Hello {myName} !!</h3>
        <Field
          name="book.name"
          component={FormField}
          placeholder="本の名前を入力"
          type="text"
          label="Book"/>
        <p><Button block={true} bsStyle="success" onClick={handleSubmit(this.onClickAction.bind(this))}>送信</Button></p>
        <ul>
          {
            allBooks && allBooks.map((e, index) => {
              return (
                <li key={index}><Link to={'/books/' + e.id}>{e.name}</Link></li>
              )
            })
          }
        </ul>
        <p><Link to="/sample">Sampleへ</Link></p>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    myName: state.helloWorld.name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}), dispatch)
}

let AddBookForm = reduxForm({
  form: 'AddBookForm',
  enableReinitialize: true
})(BookList)

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(fetchAllBooks, {
    props: ({ data }) => ({
      allBooks: data.allBooks
    })
  }),
  graphql(createBook, {
    name: 'createBook'
  }),
  graphql(destroyBook, {
    name: 'destroyBook'
  })
)(AddBookForm)


