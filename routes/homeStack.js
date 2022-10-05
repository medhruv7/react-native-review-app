import { createStackNavigator } from "react-navigation-stack";
import Home from "../screens/home";
import Review from "../screens/review";

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Test12",
      headerStyle: { height: 100 },
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
    headerTintColor: '#444',
  },
});

export default HomeStack;
