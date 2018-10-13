import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from './components/image';
import actions from './actions';
import Waypoint from 'react-waypoint';
import styles from './styles.scss';

class Gallery extends React.Component {
  componentDidMount() {
    this.width = document.body.clientWidth;
    this.props.fetchImages(1);
  }
  render() {
    const { displayImage, closeImage } = this.props;
    const images = this.props.images.map(src => (
      <Image
        resizeImages={this.props.resizeImages}
        src={src} 
        containerWidth={this.width}
        size={this.props.imageSize}
      />
    ));
    return (
      <section className="gallery" >
        {images}
        <Waypoint
          onEnter={() => this.props.fetchImages(2)}
        />
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    imageDisplayed: state.imageDisplayed,
    images: state.images,
    imageSize: state.imageSize,
  };
};

const mapDispatchToProps = {
  fetchImages: actions.fetchImages,
  resizeImages: actions.resizeImages,
};

Gallery.propTypes = {
  displayImage: PropTypes.func.isRequired,
  closeImage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

