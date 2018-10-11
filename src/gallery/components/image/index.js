import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.scss';

class Image extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.displayImage();
  }
  render() {
    const { src } = this.props;
    return (
      <img src={src} className="image" />
    );
  }
}

Image.propTypes = {
  displayImage: PropTypes.func.isRequired,
};

export default Image;
