/* eslint-disable quotes */
import React from "react";
import { Text, StyleSheet } from "react-native";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

MText.propTypes = {
  style: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.any,
  numberOfLines: PropTypes.number,
};

MText.defaultProps = {};

export function MText(props) {
  const { style, text, children } = props;

  const { t } = useTranslation();

  return text ? (
    <Text style={[styles.text, style]} textBreakStrategy="simple" {...props}>
      {typeof text === "string" ? t(text) : text}
    </Text>
  ) : (
    <Text style={[styles.text, style]} textBreakStrategy="simple" {...props}>
      {typeof children === "string" ? t(children) : children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {},
});
