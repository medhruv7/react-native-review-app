import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleText}> Home Screen </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  titleText: {
    fontFamily: 'nunito-bold',
    fontSize: 18,
  }
});

export default Home;