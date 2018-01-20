import React, { Component } from 'react';

class RadioButton extends Component {
  render () {
    const { id, value, label, checked, ...props } = this.props;
    return (
      <div className="form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="radio" name="exampleRadios" {...props} />
          {label}
        </label>
      </div>
    );
  }
}

export default RadioButton;
