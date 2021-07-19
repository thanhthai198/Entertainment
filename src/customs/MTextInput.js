/* eslint-disable no-shadow */
/* eslint-disable prettier/prettier */
import React, {
  useRef,
  forwardRef,
  useImperativeHandle,
  useState,
} from 'react';
import { StyleSheet, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import colors from '../theme/colors';
import { setVertical } from '../utils';

export const MTextInput = forwardRef((props, ref) => {
  const { style, onChangeText, placeholder, hasBottomBorder, onFocus, onBlur } =
    props;
  const inputRef = useRef();
  const [text, setText] = useState('');
  const [focusing, setFocusing] = useState(false);
  const { t } = useTranslation();

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => inputRef.current?.clear(),
    blur: () => inputRef.current?.blur(),
    getText: () => text,
  }));

  return (
    <TextInput
      autoCorrect={false}
      {...props}
      ref={inputRef}
      placeholder={placeholder ? t(placeholder) : ''}
      placeholderTextColor={colors.placeholderTextColor}
      onChangeText={(text) => {
        setText(text);
        onChangeText && onChangeText(text);
      }}
      onFocus={() => {
        setFocusing(true);
        onFocus && onFocus();
      }}
      onBlur={() => {
        setFocusing(false);
        onBlur && onBlur();
      }}
      style={[
        styles.container,
        hasBottomBorder
          ? {
              borderBottomWidth: setVertical(1),
              borderColor: focusing
                ? colors.colors.secondary
                : colors.colorE3E3E3,
            }
          : null,
        style,
      ]}
    />
  );
});

MTextInput.propTypes = {
  ref: PropTypes.object,
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  onChangeText: PropTypes.func,
  onSubmitEditing: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  maxLength: PropTypes.number,
  hasBottomBorder: PropTypes.bool,
  autoCapitalize: PropTypes.string,
  editable: PropTypes.bool,
};
MTextInput.defaultProps = {
  style: undefined,
  hasDefaultBorder: true,
  hasDefaultVerticalPadding: true,
  hasBottomBorder: false,
};

const styles = StyleSheet.create({
  container: {},
});
