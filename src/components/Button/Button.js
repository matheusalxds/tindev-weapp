import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Button.module.scss';

function Button(props) {
  const { type, lg, md, danger, transparent, uppercase, onClick, children } = props;
  const classes = classNames({
    [css.btn]: true,
    [css['btn--lg']]: lg,
    [css['btn--md']]: md,
    [css['btn--danger']]: danger,
    [css['btn--transparent']]: transparent,
    [css['btn--uppercase']]: uppercase,
  });

  return (
    <button type={type} className={classes} onClick={onClick}>{children}</button>
  );
}

Button.defaultProps = {
  children: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  lg: PropTypes.bool,
  md: PropTypes.bool,
  danger: PropTypes.bool,
  transparent: PropTypes.bool,
  uppercase: PropTypes.bool,
};

Button.defaultProps = {
  type: 'button',
  lg: false,
  md: false,
  danger: false,
  transparent: false,
  uppercase: false,
};

export default Button;
