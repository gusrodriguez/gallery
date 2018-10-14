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
        onClick={() => this.props.displayImage()}
        className="image"
        style={{
          backgroundImage: `url(${this.props.src})`,
          width: `${this.props.size}px`,
          height: `${this.props.size}px`,
        }}
      >
        <div
          className="info"
          style={{
            width: `${this.props.size - 30}px`,
            height: `${this.props.size - 30}px`,
            marginTop: '15px',
            marginLeft: '15px',
          }}
        >
          <div className="info-cell">
            <p>This is the title </p>
            <p>This is the author</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Image;
