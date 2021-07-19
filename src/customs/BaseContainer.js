/* eslint-disable prettier/prettier */
import React from 'react';
import {
  StyleSheet,
  StatusBar,
  Platform,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import MBackgroundImage from './MBackgroundImage';
import PropTypes from 'prop-types';
import commonStyles from '../theme/commonStyles';

BaseContainer.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  Header: PropTypes.element,
  bgImage: PropTypes.number,
  className: PropTypes.string,
  enableDismissKeyboard: PropTypes.bool,
  hasPaddingTop: PropTypes.bool,
};
BaseContainer.defaultProps = {
  enableDismissKeyboard: false,
  hasPaddingTop: false,
};

export function BaseContainer(props) {
  const { style, Header, bgImage, enableDismissKeyboard, hasPaddingTop } =
    props;

  const ContentView = () => (
    <View
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      {...props}
      style={[
        styles.container,
        hasPaddingTop ? { ...commonStyles.paddingTop } : null,
        style,
      ]}
    />
  );

  return (
    <>
      {bgImage && <MBackgroundImage source={bgImage} />}
      <StatusBar barStyle={'dark-content'} />
      {enableDismissKeyboard ? (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          {ContentView()}
        </TouchableWithoutFeedback>
      ) : (
        ContentView()
      )}
      {Header && <Header />}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
