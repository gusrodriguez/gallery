import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Image extends React.Component {
  componentDidMount() {
    const { containerWidth, size, resizeImages } = this.props;
    resizeImages(containerWidth, size);
  }
  render() {
    return (
      <div
        className="image"
        style={{
          backgroundImage: `url(${this.props.src})`,
          width: `${this.props.size}px`,
          height: `${this.props.size}px`,
        }}
      />
    );
  }
}

export default Image;
