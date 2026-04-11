import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      {/* HEADER IMAGE */}
      <Image
        source={require("../assets/MaskGroup.png")}
        style={styles.image}
      />

      {/* CONTENT */}
      <View style={styles.content}>
        <Text style={styles.title}>
          Get your groceries {"\n"}with nectar
        </Text>

        {/* PHONE INPUT */}
        <TouchableOpacity
  style={styles.phoneBox}
  onPress={() => navigation.navigate("Number")}
>
  <Text style={styles.flag}>🇧🇩</Text>
  <Text style={styles.code}>+880</Text>
  
</TouchableOpacity>

        {/* LINE */}
        <View style={styles.line} />

        <Text style={styles.orText}>
          Or connect with social media
        </Text>

        {/* GOOGLE BUTTON */}
        <TouchableOpacity style={styles.googleBtn}>
          <Text style={styles.btnText}>Continue with Google</Text>
        </TouchableOpacity>

        {/* FACEBOOK BUTTON */}
        <TouchableOpacity style={styles.fbBtn}>
          <Text style={styles.btnText}>Continue with Facebook</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  image: {
    width: "100%",
    height: 300,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  content: {
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  phoneBox: {
    flexDirection: "row",
    alignItems: "center",
  },

  flag: {
    fontSize: 20,
    marginRight: 5,
  },

  code: {
    fontSize: 16,
    marginRight: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
  },

  line: {
    height: 1,
    backgroundColor: "#ccc",
    marginVertical: 15,
  },

  orText: {
    textAlign: "center",
    color: "#888",
    marginBottom: 15,
  },

  googleBtn: {
    backgroundColor: "#5383EC",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },

  fbBtn: {
    backgroundColor: "#4A66AC",
    padding: 15,
    borderRadius: 15,
  },

  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});