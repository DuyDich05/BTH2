import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function SearchScreen({ route }) {
  const { category } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category}</Text>
      <Text>Danh sách sản phẩm ở đây...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});