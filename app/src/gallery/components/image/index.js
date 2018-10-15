import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToPost = this.redirectToPost.bind(this);
  }
  componentDidMount() {
    const { containerWidth, size, resizeImages } = this.props;
    resizeImages(containerWidth, size);
  }
  redirectToPost(e) {
    e.stopPropagation();
    location.href = this.props.image.postUrl;
  }
  render() {
    const hoverMargin = 30;
    const { image } = this.props;
    return (
      <div
        onClick={() => this.props.displayImage()}
        className="image"
        style={{
          backgroundImage: `url(${image.src})`,
          width: `${this.props.size}px`,
          height: `${this.props.size}px`,
        }}
      >
        <div
          className="info"
          style={{
            width: `${this.props.size - hoverMargin}px`,
            height: `${this.props.size - hoverMargin}px`,
            marginTop: '15px',
            marginLeft: '15px',
          }}
        >
          <div className="info-cell">
            <p>{image.title}</p>
            <p>
              <span onClick={this.redirectToPost} className="post">{image.author}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Image;
