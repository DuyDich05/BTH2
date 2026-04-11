import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SignupScreen({ navigation }) {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* LOGO */}
      <Image
        source={require("../assets/Group(1).png")}
        style={styles.logo}
      />

      {/* TITLE */}
      <Text style={styles.title}>Sign Up</Text>
      <Text style={styles.subtitle}>
        Enter your credentials to continue
      </Text>

      {/* USERNAME */}
      <Text style={styles.label}>Username</Text>
      <TextInput
        style={styles.input}
        value="Afsar Hossen Shuvo"
      />

      {/* EMAIL */}
      <Text style={[styles.label, { marginTop: 20 }]}>
        Email
      </Text>
      <View style={styles.row}>
        <TextInput
          style={{ flex: 1 }}
          value="imshuvo97@gmail.com"
        />
        <Ionicons name="checkmark" size={18} color="#53B175" />
      </View>

      {/* PASSWORD */}
      <Text style={[styles.label, { marginTop: 20 }]}>
        Password
      </Text>
      <View style={styles.passwordRow}>
        <TextInput
          style={styles.passwordInput}
          secureTextEntry={!passwordVisible}
          value="12345678"
        />
        <TouchableOpacity
          onPress={() => setPasswordVisible(!passwordVisible)}
        >
          <Ionicons
            name={passwordVisible ? "eye" : "eye-off"}
            size={18}
            color="#999"
          />
        </TouchableOpacity>
      </View>

      {/* TERMS */}
      <Text style={styles.terms}>
        By continuing you agree to our{" "}
        <Text style={styles.link}>Terms of Service</Text> and{" "}
        <Text style={styles.link}>Privacy Policy</Text>.
      </Text>

      {/* BUTTON */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* LOGIN */}
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.bottomText}>
          Already have an account?{" "}
          <Text style={styles.link}>Signup</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F8F8",
    paddingHorizontal: 25,
    paddingTop: 80,
  },

  logo: {
    width: 50,
    height: 50,
    alignSelf: "center",
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#181725",
  },

  subtitle: {
    fontSize: 14,
    color: "#7C7C7C",
    marginBottom: 30,
  },

  label: {
    fontSize: 13,
    color: "#7C7C7C",
    marginBottom: 8,
  },

  input: {
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
    paddingVertical: 10,
    fontSize: 15,
  },

  row: {
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },

  passwordRow: {
    borderBottomWidth: 1,
    borderColor: "#E2E2E2",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  passwordInput: {
    flex: 1,
    paddingVertical: 10,
    fontSize: 15,
  },

  terms: {
    marginTop: 15,
    fontSize: 12,
    color: "#7C7C7C",
  },

  button: {
    marginTop: 25,
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

  bottomText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 13,
    color: "#181725",
  },

  link: {
    color: "#53B175",
    fontWeight: "500",
  },
});