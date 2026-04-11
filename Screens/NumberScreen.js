import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function NumberScreen({ navigation }) {
  const inputRef = useRef(null);
  const [phone, setPhone] = useState("");

  useEffect(() => {
    setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
  }, []);

  // chỉ cho nhập số
  const handleChange = (text) => {
    const cleaned = text.replace(/[^0-9]/g, "");
    setPhone(cleaned);
  };

  // validate số VN (>=9 số)
  const isValid = phone.length >= 9;

  const handleSubmit = () => {
    if (!isValid) return;

    navigation.navigate("OtpScreen", {
      phone: "+84" + phone,
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" />

        {/* BACK */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={26} color="#000" />
        </TouchableOpacity>

        {/* CONTENT */}
        <View style={styles.content}>
          <Text style={styles.title}>Enter your mobile number</Text>

          <Text style={styles.label}>Mobile Number</Text>

          {/* INPUT */}
          <View style={styles.phoneRow}>
            <Text style={styles.flag}>🇧🇩</Text>
            <Text style={styles.code}>+880</Text>

            <TextInput
              ref={inputRef}
              style={styles.input}
              keyboardType="number-pad"
              value={phone}
              onChangeText={handleChange}
              placeholder="Enter phone number"
              maxLength={10}
            />
          </View>

          <View style={styles.line} />
        </View>

        {/* SUBMIT BUTTON */}
        <TouchableOpacity
          style={[
            styles.submitBtn,
            { backgroundColor: isValid ? "#53B175" : "#E2E2E2" },
          ]}
          disabled={!isValid}
          onPress={handleSubmit}
          activeOpacity={0.8}
        >
          <Ionicons name="arrow-forward" size={22} color="#fff" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  content: {
    marginTop: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 25,
    color: "#181725",
  },

  label: {
    fontSize: 13,
    color: "#7C7C7C",
    marginBottom: 10,
  },

  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  flag: {
    fontSize: 22,
    marginRight: 8,
  },

  code: {
    fontSize: 16,
    marginRight: 10,
    color: "#181725",
  },

  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 5,
  },

  line: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginTop: 8,
  },

  submitBtn: {
    position: "absolute",
    bottom: 120,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },

    elevation: 6,
  },
});