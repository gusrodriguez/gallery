import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.displayModal = this.displayModal.bind(this);
  }
  componentDidMount() {
    const { containerWidth, size, resizeImages } = this.props;
    resizeImages(containerWidth, size);
  }
  displayModal() {
    this.props.displayImage();
  }
  render() {
    return (
      <div
        onClick={() => this.displayModal()}
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
