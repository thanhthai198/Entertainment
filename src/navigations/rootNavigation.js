/* eslint-disable quotes */
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeNavigation from "./homeNavigation";
import { SCREEN_NAMES } from "src/constants";

const RootNavigation = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name={SCREEN_NAMES.HOME_TAB} component={HomeNavigation} />
    </Stack.Navigator>
  );
};

export default RootNavigation;
