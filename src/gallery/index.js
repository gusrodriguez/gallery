import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from './components/image';
import actions from './actions';
import Modal from './components/modal';
import Waypoint from 'react-waypoint';
import styles from './styles.scss';

class Gallery extends React.Component {
  componentDidMount() {
    this.width = document.body.clientWidth;
    this.props.fetchImages(this.props.nextPage);
  }
  render() {
    const images = this.props.images.map(src => (
      <Image
        displayImage={() => this.props.displayImage(src)}
        resizeImages={this.props.resizeImages}
        src={src}
        containerWidth={this.width}
        size={this.props.imageSize}
      />
    ));
    return (
      <section className="gallery" >
        <Modal display={this.props.imageDisplayed} close={this.props.closeImage} />
        {images}
        <Waypoint
          onEnter={() => this.props.fetchImages(this.props.nextPage)}
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
    nextPage: state.nextPage,
  };
};

const mapDispatchToProps = {
  fetchImages: actions.fetchImages,
  resizeImages: actions.resizeImages,
  displayImage: actions.displayImage,
  closeImage: actions.closeImage,
};

Gallery.propTypes = {
  fetchImages: PropTypes.func.isRequired,
  resizeImages: PropTypes.func.isRequired,
  displayImage: PropTypes.func.isRequired,
  closeImage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

