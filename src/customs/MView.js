/* eslint-disable prettier/prettier */
import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

MView.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};
MView.defaultProps = {
  style: undefined,
};

export function MView(props) {
  const { style } = props;
  return <View {...props} style={[styles.view, style]} />;
}

const styles = StyleSheet.create({
  view: {},
});
