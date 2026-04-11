import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LocationScreen({ navigation }) {
  const [zone, setZone] = useState("Banasree");
  const [area, setArea] = useState("");

  return (
    <View style={styles.container}>
      {/* BACK */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={26} color="#000" />
      </TouchableOpacity>

      {/* MAP IMAGE */}
      <View style={styles.mapWrapper}>
        <Image
          source={require("../assets/illustration.png")} // 👈 nhớ thêm ảnh vào đây
          style={styles.mapImage}
          resizeMode="contain"
        />
      </View>

      {/* TITLE */}
      <Text style={styles.title}>Select Your Location</Text>

      <Text style={styles.subtitle}>
        Switch on your location to stay in tune with{"\n"}
        what’s happening in your area
      </Text>

      {/* FORM */}
      <View style={styles.form}>
        {/* Zone */}
        <Text style={styles.label}>Your Zone</Text>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.inputText}>{zone}</Text>
          <Ionicons name="chevron-down" size={18} color="#999" />
        </TouchableOpacity>

        {/* Area */}
        <Text style={[styles.label, { marginTop: 25 }]}>
          Your Area
        </Text>
        <TouchableOpacity style={styles.input}>
          <Text style={styles.placeholder}>Types of your area</Text>
          <Ionicons name="chevron-down" size={18} color="#999" />
        </TouchableOpacity>
      </View>

      {/* BUTTON */}
      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate("Login")} // 👈 thêm dòng này
>
  <Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  mapWrapper: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 15,
  },

  mapImage: {
    width: 200,
    height: 150,
  },

  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "600",
    color: "#181725",
    marginTop: 10,
  },

  subtitle: {
    textAlign: "center",
    fontSize: 14,
    color: "#7C7C7C",
    marginTop: 10,
    lineHeight: 20,
  },

  form: {
    marginTop: 40,
  },

  label: {
    fontSize: 13,
    color: "#7C7C7C",
    marginBottom: 10,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
    paddingVertical: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  inputText: {
    fontSize: 15,
    color: "#181725",
  },

  placeholder: {
    fontSize: 15,
    color: "#B1B1B1",
  },

  button: {
    marginTop: 60,
    backgroundColor: "#53B175",
    paddingVertical: 16,
    borderRadius: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});