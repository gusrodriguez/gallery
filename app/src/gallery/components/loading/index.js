import React from 'react';
import './styles.scss';

function Loading(props) {
  const visibility = props.fetching ? 'visible' : 'hidden';
  return (
    <div className={`loading ${visibility}`}>Loading images...</div>
  );
}

export default Loading;
