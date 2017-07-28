import {bindActionCreators} from 'redux'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

class HelloWorld extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)
  }

  onClickAction() {
    this.props.createBook({
      variables: {name: 'HUNTER x HUNTER'},
    })
  }


  render() {
    console.log(this.props)
    return (
      <div>
        <h3>Hello {this.props.name} !!</h3>
        <button type="button" onClick={this.onClickAction.bind(this)}>送信</button>
      </div>
    )
  }
}

const fetchTodos = gql`
  query {
    book(id: 2) {
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
  console.log(state)
  return {
    name: state.helloWorld.name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}), dispatch)
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(fetchTodos, {
    props: ({ data }) => ({
      book: data.book
    }),
  }),
  graphql(createBook, {
    name: 'createBook'
  })
)(HelloWorld);

