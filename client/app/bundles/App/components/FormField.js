import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap'

export default class FormField extends Component{

  static propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    componentClass: PropTypes.object,
    children: PropTypes.object,
    meta: PropTypes.object,
    placeholder: PropTypes.string
  }

  render() {
    const {
      input,
      label,
      placeholder,
      type,
      componentClass,
      children,
      meta: {
        touched,
        error
      }
    } = this.props

    return (
      <FormGroup>
        <ControlLabel>
          {label}
        </ControlLabel>

        <FormControl
          {...input}
          placeholder={placeholder}
          type={type || "text"}
          componentClass={componentClass || "input"}
        >
          {children}
        </FormControl>

        {touched && error && <span className="text-danger">{error}</span>}
      </FormGroup>
    )
  }
}