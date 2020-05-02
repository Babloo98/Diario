import React, { Component } from 'react';
import './style.scss';

class InputBox extends Component {
  onChange = (event) => {
    let { name, onChange } = this.props;
    let { value } = event.target;
    onChange && onChange(name,value);
  }

  render() {
    let {labelName, name,disabled, value = '',placeholder="", InputType = "text", errorsMessage,  ...other } = this.props;
    return (
      <div className={`form-group ${errorsMessage && 'error'}`}>
        {labelName && <label>{labelName}</label>}
        <input 
          {...other}
          type={InputType}  
          value={value}
          name={name}
          onChange={this.onChange}
          placeholder={placeholder}
          disabled = {disabled}
        />
        {errorsMessage && <label className={`${errorsMessage && 'error-message'}`}>{errorsMessage}</label>}
      </div>
    );
  }
}

export default InputBox;