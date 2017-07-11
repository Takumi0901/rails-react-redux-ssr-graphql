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
        Hello World !!
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

export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld)
