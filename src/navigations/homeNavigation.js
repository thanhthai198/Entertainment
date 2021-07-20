/* eslint-disable quotes */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "@screens/home";
import Books from "@screens/book";
import Group from "@screens/group";
import Settings from "@screens/setting";
import Watch from "@screens/watch";

import { SCREEN_NAMES } from "src/constants";

const HomeNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      lazy={false}
      tabBarOptions={{
        showLabel: true,
        keyboardHidesTabBar: true,
      }}
    >
      <Tab.Screen name={SCREEN_NAMES.HOME} component={Home} />
      <Tab.Screen name={SCREEN_NAMES.WATCH} component={Watch} />
      <Tab.Screen name={SCREEN_NAMES.GROUP} component={Group} />
      <Tab.Screen name={SCREEN_NAMES.BOOK} component={Books} />
      <Tab.Screen name={SCREEN_NAMES.SETTINGS} component={Settings} />
    </Tab.Navigator>
  );
};

export default HomeNavigator;
