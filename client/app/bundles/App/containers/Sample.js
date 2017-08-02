import {bindActionCreators} from 'redux'
import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

class Sample extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props)
  }



  render() {
    return (
      <div>
        <h3>Sampleだよ!!</h3>
      </div>
    )
  }
}



function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}), dispatch)
}

export default compose(connect(mapStateToProps, mapDispatchToProps))(Sample);

