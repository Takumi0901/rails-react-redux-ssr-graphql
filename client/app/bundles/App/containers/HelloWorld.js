import {bindActionCreators} from 'redux'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

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

function mapStateToProps(state) {
  return {
    name: state.helloWorld.name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld)
