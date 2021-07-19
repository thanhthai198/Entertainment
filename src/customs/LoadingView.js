/* eslint-disable prettier/prettier */
import React from 'react';
import { UIActivityIndicator } from 'react-native-indicators';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { setVertical } from '../utils';

LoadingView.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  color: PropTypes.any,
  animationDuration: PropTypes.number,
  size: PropTypes.number,
};
LoadingView.defaultProps = {
  color: 'white',
  animationDuration: 800,
  size: 30,
};

export function LoadingView(props) {
  const { style, color, animationDuration, size } = props;

  return (
    <UIActivityIndicator
      color={color}
      style={[styles.loading, style]}
      animationDuration={animationDuration}
      size={setVertical(size)}
    />
  );
}

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: 'black',
  },
});
