import React, {Component} from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import {
  FormGroup,
  ControlLabel,
  FormControl
} from 'react-bootstrap';

export default class FormField extends Component{

  static propTypes = {
    classes: PropTypes.any,
    children: PropTypes.any,
    inlineStyles: PropTypes.any,
    color: PropTypes.string,
  }

  render() {
    const {
      input,
      label,
      type,
      componentClass,
      children,
      meta: {
        touched,
        error
      }
    } = this.props;

    return (
      <FormGroup>
        <ControlLabel>
          {label}
        </ControlLabel>

        <FormControl
          {...input}
          type={type || "text"}
          componentClass={componentClass || "input"}
        >
          {children}
        </FormControl>

        {touched && error && <span className="text-danger">{error}</span>}
      </FormGroup>
    );
  }
}