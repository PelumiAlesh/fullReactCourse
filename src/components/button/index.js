import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

class sharedButton extends React.Component {

  onSubmit() {
    if(this.props.emitEvent){
      this.props.emitEvent();
    }
  }

  render() {
    const { buttonText } = this.props;
    return (
      <button onClick={() => this.onSubmit()}  className="btn" data-test="buttonComponent">
        {buttonText}
      </button>
    )
  }
}

sharedButton.protoType = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func
};

export default sharedButton;
