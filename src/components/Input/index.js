import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';


const Input  = (props) => {
  const {
    inputName,
    Label,
    type,
    value,
    toched,
    valid,
    errorMessage,
    placeholder,
    onChangeAction,
    onFocusAction,
  } = props;


  return (  
    <div className="input-container">
     <label>
          {Label}
          <input 
              type={type}
              name={inputName}
              value={value} 
              placeholder={placeholder}
              className={`${ toched ? '': valid ? "valid" : "invalid"}`} 
              onChange={ event => {  onChangeAction(event)  } }
              onFocus ={onFocusAction}
          />
          <div className="invalid-feedback">
              {errorMessage}
          </div>
      </label>
    </div>
  )
}



Input.propTypes = {
  name: PropTypes.string,
  onClick: PropTypes.func,
};


export default Input;