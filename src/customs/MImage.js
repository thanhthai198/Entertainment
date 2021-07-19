/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';

MImage.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  uri: PropTypes.string,
  source: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  resizeMode: PropTypes.any,
};

MImage.defaultProps = {
  resizeMode: FastImage.resizeMode.cover,
  uri: '',
};

export const RESIZE_MODE = {
  COVER: FastImage.resizeMode.cover,
  CONTAIN: FastImage.resizeMode.contain,
};

function MImage(props) {
  const { style, uri, source, resizeMode } = props;
  return (
    <FastImage
      {...props}
      style={[styles.image, style]}
      source={uri ? { uri: uri } : source}
      resizeMode={resizeMode}
    />
  );
}

const styles = StyleSheet.create({
  image: {},
});

export default MImage;
