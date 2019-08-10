import React from 'react';

function Loading() {
  return (
    <div className="container">
      <div className="loader">
        <div className="inner inner--1" />
        <div className="inner inner--2" />
        <div className="inner inner--3" />
      </div>
    </div>
  );
}

Loading.propTypes = {};
Loading.defaultProps = {};

export default Loading;
