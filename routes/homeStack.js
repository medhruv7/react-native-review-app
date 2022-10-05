import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import Review from "../screens/review";
import About from "../screens/about";

const screens = {
    Home: {
        screen: Home,
    },
    Review: {
        screen: Review,
    },
    About: {
        screen: About,
    }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);