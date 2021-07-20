/* eslint-disable quotes */
import React from "react";
import { ThemeProvider } from "react-native-picasso";
import { NavigationContainer } from "@react-navigation/native";
import { theme } from "@theme/theme";
import { navigationRef } from "./src/services/navigationService";
import "./src/services/translationService";
import RootNavigation from "./src/navigations/rootNavigation";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer ref={navigationRef}>
        <RootNavigation />
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
