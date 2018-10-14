import React from 'react';
import './styles.scss';

function Modal(props) {
  const visible = props.display ? 'visible' : 'hidden';
  return (
    <div className={`modal ${visible}`}>
      <div className="modal-content">
        <span className="close">&times;</span>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
}

export default Modal;
