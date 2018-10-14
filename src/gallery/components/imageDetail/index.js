import React from 'react';

function ImageDetail(props) {
  const { src } = props;
  return (
    <img src={src} />
  );
}

export default ImageDetail;
