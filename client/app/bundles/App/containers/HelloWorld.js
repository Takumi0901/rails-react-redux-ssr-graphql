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


  render() {
    return (
      <div>
        Hello {this.props.name} !!
      </div>
    )
  }
}

const fetchTodos = gql`
  query { blog(id: 1) { title content }}
  `


function mapStateToProps(state) {
  console.log('*****************')
  console.log(state)
  console.log('*****************')
  return {
    name: state.helloWorld.name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}), dispatch)
}

export default compose(
  graphql(fetchTodos, {}),
  connect(mapStateToProps, mapDispatchToProps)
)(HelloWorld);

