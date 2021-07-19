/* eslint-disable quotes */
import React from "react";
import { StyleSheet } from "react-native";
import FastImage from "react-native-fast-image";
import { screenH, screenW } from "../utils";

const MBackgroundImageComponent = (props) => {
  const { style } = props;
  return (
    <FastImage
      className={"view-absolute flex-1"}
      style={[styles.image, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    top: 0,
    left: 0,
    width: screenW,
    height: screenH,
    position: "absolute",
  },
});

export const MBackgroundImage = MBackgroundImageComponent;
