import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";

import SplashScreen from "./Screens/SplashScreen";
import OnboardingScreen from "./Screens/OnBoardingScreen";
import HomeScreen from "./Screens/HomeScreen";
import NumberScreen from "./Screens/NumberScreen";
import OtpScreen from "./Screens/OtpScreen";
import LocationScreen from "./Screens/LocationScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";

const Stack = createNativeStackNavigator();

// 👇 HEADER 2 DÒNG
const HeaderTitle = () => (
  <View style={{ alignItems: "center" }}>
    <Text
      style={{
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
      }}
    >
      Nguyễn Địch Khánh Duy
    </Text>

    <Text
      style={{
        color: "#E8F5E9",
        fontSize: 12,
        marginTop: 2,
      }}
    >
      MSSV: 23810310173
    </Text>
    <Text
      style={{
        color: "#fff",
        fontSize: 15,
        fontWeight: "600",
      }}
    >
      Đây là bài của em
    </Text>
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          headerTitleAlign: "center",

          headerStyle: {
            backgroundColor: "#53B175",
            height: 80, // 👈 QUAN TRỌNG: đủ chỗ 2 dòng
          },

          headerTintColor: "#fff",

          headerTitle: () => <HeaderTitle />, // 👈 dùng component
        }}
      >
        {/* Ẩn header splash + onboarding cho đẹp */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen name="Number" component={NumberScreen} />
        <Stack.Screen name="OtpScreen" component={OtpScreen} />
        <Stack.Screen name="Location" component={LocationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}