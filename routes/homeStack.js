import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Review from "../screens/review";
import About from "../screens/about";

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
  About: {
    screen: About,
  },
};

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#eee" },
    headerTintColor: '#444',
  },
});

export default createAppContainer(HomeStack);
