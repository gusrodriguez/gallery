import React from 'react';
import './styles.scss';

function ErrorMessage() {
  return <div className="error-message">An error has occured! Please make sure the API is running or try reloading the page.</div>;
}

module.exports = ErrorMessage;
