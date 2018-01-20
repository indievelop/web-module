import React, { Component } from 'react';

class RadioGroup extends Component {
  render () {
    const { children, name, label ...props } = type
    return (
      <fieldset className="form-group">
        <div className="row">
          <legend className="col-form-legend col-sm-2">{label}</legend>
          <div className="col-sm-10">
            {children.map((child) =>
              <child name={name}/>
            )}
          </div>
        </div>
      </fieldset>
    );
  }
}

export default RadioGroup;
