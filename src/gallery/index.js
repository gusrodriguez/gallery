import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Image from './components/image';
import actions from './actions';
import styles from './styles.scss';

function Gallery(props) {
  const { displayImage, closeImage } = props;
  return (
    <section className="gallery">
      <Image />
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    imageDisplayed: state.imageDisplayed,
    images: state.images,
  };
};

Gallery.propTypes = {
  displayImage: PropTypes.func.isRequired,
  closeImage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, actions)(Gallery);

