import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from './components/image';
import actions from './actions';
import Modal from './components/modal';
import Loading from './components/loading';
import ErrorMessage from './components/error-message';
import Waypoint from 'react-waypoint';
import styles from './styles.scss';

class Gallery extends React.Component {
  componentDidMount() {
    this.width = document.body.clientWidth;
    this.props.fetchImages(this.props.nextPage);
  }
  render() {

    if(this.props.error) { return <ErrorMessage />};

    const images = this.props.images.map((image) => {
      return (<Image
        displayImage={() => this.props.displayImage(image)}
        resizeImages={this.props.resizeImages}
        image={image}
        containerWidth={this.width}
        size={this.props.imageSize}
      />)
    });
    return (
      <section className="gallery" >
        <Modal 
          image={this.props.imageDisplayed}
          close={this.props.closeImage}
        />
        {images}
        <Loading fetching={this.props.fetching} />
        <Waypoint
          onEnter={() => this.props.fetchImages(this.props.nextPage + 1)}
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
    fetching: state.fetching,
    error: state.error,
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
  images: PropTypes.array.isRequired,
  nextPage: PropTypes.number.isRequired,
  resizeImages: PropTypes.func.isRequired,
  displayImage: PropTypes.func.isRequired,
  closeImage: PropTypes.func.isRequired,
  imageSize: PropTypes.number,
  error: PropTypes.bool,
};

Gallery.defaultProps = {
  imageSize: 200,
  error: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

