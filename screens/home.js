import React, { useState } from "react";
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { globalStyles } from "../styles/global";

const Home = ({ navigation }) => {
  const [reviews, setReviews] = useState([
    { title: "lorem ipsum", rating: 5, body: "lorem ipsum", key: "1" },
    { title: "lorem ipsum", rating: 5, body: "lorem ipsum", key: "2" },
    { title: "lorem ipsum", rating: 5, body: "lorem ipsum", key: "3" },
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("Review", item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Home;
