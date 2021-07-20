/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
import React from "react";
import {
  MText,
  BaseContainer,
  MBackgroundImage,
  LoadingView,
  MTextInput,
  MFlatList,
} from "@customs/index";
import Image from "./src/assets/images";

const App = () => {
  return (
    <MBackgroundImage
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      source={Image.background_sky}
    />
  );
};

export default App;
