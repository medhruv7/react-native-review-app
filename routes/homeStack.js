import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Review from "../screens/review";
import Header from "../shared/header";
import React from "react";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header navigation={navigation} />,
      };
    },
  },
  Review: {
    screen: Review,
    navigationOptions: {
      title: "Reviews Page",
    },
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#eee" },
    headerTintColor: "#444",
  },
});

export default HomeStack;
