import {bindActionCreators} from 'redux'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { compose } from 'react-apollo'
import {Link} from 'react-router-dom'

class Sample extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div style={{padding: '0 16px'}}>
        <h3>Sampleだよ!!</h3>
        <Link to="/hello_world">Helloへ</Link>
      </div>
    )
  }
}



function mapStateToProps() {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}), dispatch)
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Sample)

