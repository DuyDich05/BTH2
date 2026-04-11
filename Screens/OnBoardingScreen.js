import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";

export default function OnboardingScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/81401.png")}
      style={styles.container}
    >
      <View style={styles.overlay} />

      <View style={styles.content}>
        <Text style={styles.icon}>🥕</Text>

        <Text style={styles.title}>
          Welcome {"\n"}to our store
        </Text>

        <Text style={styles.subtitle}>
          Get your groceries in as fast as one hour
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("Home")}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  content: {
    padding: 20,
    marginBottom: 40,
  },
  icon: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",
    color: "#ddd",
    marginVertical: 10,
  },
  button: {
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 15,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});