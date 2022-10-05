import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/about";

const screens = {
  About: {
    screen: About,
    navigationOptions: {
        title: 'About Reviews',
    }
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerStyle: { backgroundColor: "#eee" },
    headerTintColor: '#444',
  },
});

export default AboutStack;