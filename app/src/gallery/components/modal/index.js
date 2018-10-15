import React from 'react';
import './styles.scss';

function Modal(props) {
  const { image, close } = props;
  let src = '';
  let title = '';
  let author = '';
  let visible = 'hidden';
  if (image) {
    visible = 'visible';
    ({ src, title, author } = image);
  }
  const style = {
    backgroundImage: `url(${src})`,
    width: '80%',
    height: '80%',
  };

  const Cross = () => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 125'>
      <path d='M74.353 37.147a3.747 3.747 0 0 0-.006-5.3l-6.194-6.194a3.752 3.752 0 0 0-5.3-.006L52.647 35.853a3.748 3.748 0 0 1-5.294 0L37.147 25.647a3.747 3.747 0 0 0-5.3.006l-6.194 6.194a3.752 3.752 0 0 0-.006 5.3l10.206 10.206a3.748 3.748 0 0 1 0 5.294L25.647 62.853a3.747 3.747 0 0 0 .006 5.3l6.194 6.194a3.752 3.752 0 0 0 5.3.006l10.206-10.206a3.748 3.748 0 0 1 5.294 0l10.206 10.206a3.747 3.747 0 0 0 5.3-.006l6.194-6.194a3.752 3.752 0 0 0 .006-5.3L64.147 52.647a3.748 3.748 0 0 1 0-5.294l10.206-10.206z'
        stroke='#000' fill='#fff' fillRule='evenodd' />
    </svg>
  );

  return (
    <div className={`modal ${visible}`}>
      <h2 className="modal-title">{`${title} - ${author}`}</h2>
      <div className="modal-content" style={style}>
        <span className="close" onClick={() => close()}>
          <Cross />
        </span>
      </div>
    </div >
  );
}

export default Modal;
