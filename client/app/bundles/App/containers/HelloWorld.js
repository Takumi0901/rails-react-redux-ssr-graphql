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
        <h3>Hello {this.props.name} !!</h3>
        <p>{this.props.data.title}</p>
      </div>
    )
  }
}

const fetchTodos = gql`
  query {
    blog(id: 1) {
      title content
    }
  }
`


function mapStateToProps(state) {
  return {
    name: state.helloWorld.name,
    data: state.helloWorld.data[0]
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}), dispatch)
}

export default compose(
  graphql(fetchTodos, {}),
  connect(mapStateToProps, mapDispatchToProps)
)(HelloWorld);

