import React, { Component } from 'react';
import classNmaes from 'classnames';
import Field from './Field';

class FieldWrapper extends Component {
  render () {
    const { label, labelSize = 12, 
      meta: { asyncValidating, touched, error, warning },
      ...props } = this.props;
    const isRow = labelSize > 0 && labelSize < 12;
    const labelClassName = labelSize ? classNmaes(`col-${labelSize}`, 'col-form-label') : 'sr-only';
    const formGroupClassName = classNmaes('form-group', isRow ? ' row' : '');
    let inputDivClassName = classNmaes(isRow ? `col-${12-labelSize}` : '', asyncValidating ? 'async-validating': '');

    const helpText = (value) => (value && <span className="error">{value}</span>);

    return (
      <div className={formGroupClassName}>
        <label className={labelClassName} htmlFor={props.id}>{label}</label>
        { <div className={inputDivClassName}>
            <Field {...props} />
          </div>
        }
        { helpText(touched && (error || warning)) }
      </div>
    );
  }
}

export default FieldWrapper;
