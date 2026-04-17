import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Onboarding");
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Group1.png")} // logo dạng ảnh
        style={styles.logo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 200,
    height: 80,
    resizeMode: "contain",
  },
});