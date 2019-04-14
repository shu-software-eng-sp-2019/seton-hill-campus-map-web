import React from 'react';
import PropTypes from 'prop-types';

// const styles = {
//   button: '',
// };

// const TYPES = {
//   PRIMARY: 'primary',
//   WARNING: 'warning',
//   DANGER: 'danger',
//   SUCCESS: 'success',
// };

const BaseButton = ({
  text,
  onClick,
  disabled,
}) => (
  <button
    type="button"
    disabled={disabled}
    onClick={onClick}
    classnames={text}
  >
    {text}
  </button>
);

BaseButton.defaultProps = {
  text: '',
  onClick: function click() {},
  disabled: false,
  // buttonType: 'primary',
  // buttonSize: '',
};

BaseButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  // buttonType: PropTypes.string,
  // buttonSize: PropTypes.string,
};
