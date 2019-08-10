import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Button.module.scss';

function Button(props) {
  const { type, lg, md, danger, children } = props;
  const classes = classNames({
    [css.btn]: true,
    [css['btn--lg']]: lg,
    [css['btn--md']]: md,
    [css['btn--danger']]: danger,
  });

  return (
    <button type={type} className={classes}>{children}</button>
  );
}

Button.defaultProps = {
  children: PropTypes.object.isRequired,
  type: PropTypes.string,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  danger: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  lg: false,
  md: false,
  danger: false,
};

export default Button;
