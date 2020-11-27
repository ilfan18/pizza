import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

function Button({ onClick, className, outline, children }) {
  return (
    <button
      className={classNames('button ', className, {
        'button--outline': outline,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  onClick: PropTypes.func,
  outline: PropTypes.any,
};

export default Button;
