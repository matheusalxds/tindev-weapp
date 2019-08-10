import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from './Button.module.scss';

function Button(props) {
  const { type = 'text', lg, md, xs, primary, danger, success, children } = props;
  const classes = classNames({
    [css.btn]: true,
    [css['btn--lg']]: lg,
    [css['btn--md']]: md,
    [css['btn--xs']]: xs,
    [css['btn--primary']]: primary,
    [css['btn--success']]: success,
    [css['btn--danger']]: danger,
  });

  return (
    <button type={type} className={classes}>{children}</button>
  );
}

Button.defaultProps = {
  children: PropTypes.object.isRequired,
};

export default Button;
