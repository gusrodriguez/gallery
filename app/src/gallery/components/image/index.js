import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.redirectToPost = this.redirectToPost.bind(this);
    this.state = {};
  }
  componentDidMount() {
    const { containerWidth, size } = this.props;
    const imagesPerRow = Math.round(containerWidth / size);
    this.setState({ size: containerWidth / imagesPerRow });
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
            width: `${this.state.size - hoverMargin}px`,
            height: `${this.state.size - hoverMargin}px`,
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

Image.propTypes = {
  containerWidth: PropTypes.number.isRequired,
  size: PropTypes.number.isRequired,
  displayImage: PropTypes.func.isRequired,
  image: PropTypes.object.isRequired,
};

export default Image;
