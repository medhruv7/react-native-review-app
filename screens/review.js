import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

const Review = ({ navigation }) => {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles}> {navigation.getParam('title')} </Text>
      <Text style={globalStyles}> {navigation.getParam('body')} </Text>
      <Text style={globalStyles}> {navigation.getParam('rating')} </Text>
    </View>
  );
};

export default Review;
