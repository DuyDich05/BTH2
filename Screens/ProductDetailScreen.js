import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ProductDetailScreen({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      {/* BACK */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} />
      </TouchableOpacity>

      {/* IMAGE */}
      <Image source={product.image} style={styles.image} />

      {/* INFO */}
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.desc}>{product.desc}</Text>

      <Text style={styles.price}>{product.price}</Text>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Add To Basket</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
    marginVertical: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  desc: {
    color: "#7C7C7C",
    marginTop: 5,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  button: {
    marginTop: 30,
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});