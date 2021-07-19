/* eslint-disable prettier/prettier */
import { screenW, setFontSize, setHorizontal, setVertical } from '../utils';
import colors from './colors';
import { isIphoneX } from 'react-native-iphone-x-helper';

export default {
  viewCenterContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewSquare: {
    aspectRatio: 1,
  },
  viewRound: {
    aspectRatio: 1,
    borderRadius: setHorizontal(1000),
  },
  absolute: {
    position: 'absolute',
  },
  screenPaddingTop: {
    paddingTop: setVertical(80),
  },
  hSeparatorView: {
    borderBottomWidth: setVertical(0.6),
    borderColor: colors.borderColors.primary,
  },
  textInput: {
    fontSize: setFontSize(18),
    color: colors.textColors.primary,
    height: setVertical(43),
    width: screenW - setHorizontal(44),
  },
  paddingTop: {
    paddingTop: isIphoneX() ? setVertical(34) : setVertical(34),
  },
};
