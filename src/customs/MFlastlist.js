/* eslint-disable prettier/prettier */
import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
} from 'react';
import { StyleSheet, FlatList } from 'react-native';
import PropTypes from 'prop-types';
import { makeId } from '../utils';

export const MFlatList = forwardRef((props, ref) => {
  const { style } = props;
  const listRef = useRef();
  useImperativeHandle(ref, () => ({
    scrollToIndex: (params) => listRef.current?.scrollToIndex(params),
  }));
  return (
    <FlatList
      ref={listRef}
      style={[styles.container, style]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps={'always'}
      keyExtractor={(item, index) => makeId(index)}
      removeClippedSubviews={true}
      {...props}
    />
  );
});

MFlatList.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  data: PropTypes.array,
  renderItem: PropTypes.func,
  keyExtractor: PropTypes.func,
  horizontal: PropTypes.bool,
  numColumns: PropTypes.number,
};
MFlatList.defaultProps = {
  data: [],
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
});
