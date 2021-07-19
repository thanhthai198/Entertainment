/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { StyleSheet, ScrollView } from "react-native";
import PropTypes from 'prop-types';

export const MScrollView = forwardRef((props, ref) => {
  const {
    style,
  } = props;
  const listRef = useRef();
  useImperativeHandle(ref, () => ({}));
  return (
    <ScrollView
      ref={listRef}
      style={[styles.container, style]}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      keyboardShouldPersistTaps={"always"}
      bounces={false}
      {...props}
    />
  );
});

MScrollView.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  showsVerticalScrollIndicator: PropTypes.bool,
  showsHorizontalScrollIndicator: PropTypes.bool,
  alwaysBounceHorizontal: PropTypes.bool,
  alwaysBounceVertical: PropTypes.bool,
};
MScrollView.defaultProps = {
  showsHorizontalScrollIndicator: false,
  showsVerticalScrollIndicator: false,
  alwaysBounceHorizontal: false,
  alwaysBounceVertical: false,
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 0,
  },
});
