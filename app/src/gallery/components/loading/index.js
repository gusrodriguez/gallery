import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Loading(props) {
  const visibility = props.fetching ? 'visible' : 'hidden';
  return (
    <div className={`loading ${visibility}`}>Loading images...</div>
  );
}

Loading.propTypes = {
  fetching: PropTypes.bool.isRequired,
};

export default Loading;
