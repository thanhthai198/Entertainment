/* eslint-disable quotes */
import colors from "./colors";
import { setFontSize, setHorizontal, setVertical } from "../utils";
import commonStyles from "./commonStyles";

export const theme = {
  colors: {
    ...colors.colors,
  },
  textColors: {
    ...colors.textColors,
  },
  bordercolor: {
    ...colors.borderColors,
  },
  font: {
    sizes: {
      15: setFontSize(12),
      md: setFontSize(16),
      lg: setFontSize(24),
      xl: setFontSize(32),
      xxl: setFontSize(40),
    },
    weights: {
      light: "100",
      normal: "normal",
      bold: "bold",
      extrabold: "900",
    },
  },
  shadow: {
    button: {
      // shadowColor: '#000000',
      shadowOffset: { width: 0, height: 5 },
      shadowOpacity: 0.2,
      shadowRadius: 3,
    },
  },
  radius: {
    sm: setHorizontal(5),
    md: setHorizontal(10),
    lg: setHorizontal(20),
    xl: setHorizontal(40),
    round: setHorizontal(1000),
  },
  spacing: {
    hsm: setHorizontal(8),
    hmd: setHorizontal(16),
    hlg: setHorizontal(24),
    hxl: setHorizontal(32),
    hxxl: setHorizontal(40),
    h_screen: 0,
    vsm: setVertical(8),
    vmd: setVertical(16),
    vlg: setVertical(24),
    vxl: setVertical(32),
    vxxl: setVertical(40),
    v_screen: 0,
  },
  common: {
    ...commonStyles,
  },
  headerText: {
    fontSize: setFontSize(25),
    fontWeight: "bold",
    color: colors.textColors.primary,
  },
  screenPaddingTop: {
    paddingTop: setVertical(80),
  },
};
