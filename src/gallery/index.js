import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import groupBy from '../utils/group';
import Image from './components/image';
import actions from './actions';
import styles from './styles.scss';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.imagesByColumn = 7;
  }
  handleClick() {
    this.props.fetchImages();
  }
  render() {
    const { displayImage, closeImage } = this.props;
    const columns = [];
    const groups = groupBy(this.props.images, this.imagesByColumn);
    groups.forEach((group) => {
      const imagesGroup = group.map(image => (
        <Image src={image} />
      ));
      columns.push(
        <div className="column">
          {imagesGroup}
        </div>);
    });
    return (
      <section className="gallery">
        <div className="header">
          <h1 onClick={this.handleClick}>Image gallery</h1>
        </div>
        <div className="row">
          {columns}
        </div>
      </section >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    imageDisplayed: state.imageDisplayed,
    images: state.images,
  };
};


// const mapDispatchToProps = dispatch => ({
//   fetchImages: bindActionCreators(actions.fetchImages, dispatch),
// });

const mapDispatchToProps = {
  fetchImages: actions.fetchImages,
};

Gallery.propTypes = {
  displayImage: PropTypes.func.isRequired,
  closeImage: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);

