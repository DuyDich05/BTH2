import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Platform,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function OtpScreen({ navigation }) {
  const [code, setCode] = useState("");
  const inputRef = useRef(null);

  const keyboardHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardWillShow", (e) => {
      Animated.timing(keyboardHeight, {
        toValue: e.endCoordinates.height,
        duration: 250,
        useNativeDriver: false,
      }).start();
    });

    const hideSub = Keyboard.addListener("keyboardWillHide", () => {
      Animated.timing(keyboardHeight, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
    });

    // Android fallback
    const showSubAndroid = Keyboard.addListener("keyboardDidShow", (e) => {
      Animated.timing(keyboardHeight, {
        toValue: e.endCoordinates.height,
        duration: 250,
        useNativeDriver: false,
      }).start();
    });

    const hideSubAndroid = Keyboard.addListener("keyboardDidHide", () => {
      Animated.timing(keyboardHeight, {
        toValue: 0,
        duration: 250,
        useNativeDriver: false,
      }).start();
    });

    return () => {
      showSub.remove();
      hideSub.remove();
      showSubAndroid.remove();
      hideSubAndroid.remove();
    };
  }, []);

  const handleChange = (text) => {
    const cleaned = text.replace(/[^0-9]/g, "").slice(0, 4);
    setCode(cleaned);
  };

  return (
    <View style={styles.container}>
      {/* BACK */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="chevron-back" size={26} color="#000" />
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Enter your 4-digit code</Text>

        <Text style={styles.label}>Code</Text>

        {/* INPUT ẨN */}
        <TextInput
          ref={inputRef}
          value={code}
          onChangeText={handleChange}
          keyboardType="number-pad"
          style={styles.hiddenInput}
          autoFocus
        />

        {/* OTP */}
        <TouchableOpacity
          style={styles.codeRow}
          onPress={() => inputRef.current.focus()}
        >
          {[0, 1, 2, 3].map((i) => (
            <Text key={i} style={styles.codeChar}>
              {code[i] ? code[i] : "-"}
            </Text>
          ))}
        </TouchableOpacity>

        <View style={styles.line} />

        <TouchableOpacity>
          <Text style={styles.resend}>Resend Code</Text>
        </TouchableOpacity>
      </View>

      {/* BUTTON FLOAT */}
      <Animated.View
        style={[
          styles.submitWrapper,
          {
            bottom: Animated.add(keyboardHeight, new Animated.Value(20)),
          },
        ]}
      >
        <TouchableOpacity
          style={[
            styles.submitBtn,
            { backgroundColor: code.length === 4 ? "#53B175" : "#E2E2E2" },
          ]}
          disabled={code.length !== 4}
          onPress={() => {
  if (code.length === 4) {
    navigation.navigate("Location"); // 👈 chuyển màn
  }
}}
        >
          <Ionicons name="arrow-forward" size={22} color="#fff" />
        </TouchableOpacity>
      </Animated.View>
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

  content: {
    marginTop: 30,
  },

  title: {
    fontSize: 22,
    fontWeight: "600",
    color: "#181725",
    marginBottom: 30,
  },

  label: {
    fontSize: 13,
    color: "#7C7C7C",
    marginBottom: 15,
  },

  hiddenInput: {
    position: "absolute",
    opacity: 0,
  },

  codeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  codeChar: {
    fontSize: 22,
    fontWeight: "500",
    color: "#181725",
    width: 25,
    textAlign: "center",
  },

  line: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginTop: 10,
  },

  resend: {
    marginTop: 25,
    color: "#53B175",
    fontWeight: "500",
  },

  submitWrapper: {
    position: "absolute",
    right: 20,
  },

  submitBtn: {
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