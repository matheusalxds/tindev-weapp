import React from 'react';
import classNames from 'classnames';

import css from './Loading.module.scss';

function Loading(props) {

  const inner1 = classNames({
    [css.inner]: true,
    [css['inner--1']]: true,
  });

  const inner2 = classNames({
    [css.inner]: true,
    [css['inner--2']]: true,
  });

  const inner3 = classNames({
    [css.inner]: true,
    [css['inner--3']]: true,
  });

  return (
    <div className="container">
      <div className={css.loader}>
        <div className={inner1} />
        <div className={inner2} />
        <div className={inner3} />
      </div>
    </div>
  );
}

Loading.propTypes = {};
Loading.defaultProps = {};

export default Loading;
