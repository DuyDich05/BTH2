import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// Screens
import SplashScreen from "./Screens/SplashScreen";
import OnboardingScreen from "./Screens/OnBoardingScreen";
import LoginScreen from "./Screens/LoginScreen";
import SignupScreen from "./Screens/SignupScreen";
import HomeScreen from "./Screens/HomeScreen";
import ExploreScreen from "./Screens/ExploreScreen";
import ProductDetailScreen from "./Screens/ProductDetailScreen";
import SearchScreen from "./Screens/SearchScreen";
import BeveragesScreen from "./Screens/BeveragesScreen";
import FilterScreen from "./Screens/FilterScreen";
import CartScreen from "./Screens/CartScreen";
import FavouriteScreen from "./Screens/FavouriteScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

//// ===== HEADER =====
const HeaderTitle = () => (
  <View style={{ alignItems: "center" }}>
    <Text style={{ color: "#fff", fontSize: 15, fontWeight: "600" }}>
      Nguyễn Địch Khánh Duy
    </Text>
    <Text style={{ color: "#E8F5E9", fontSize: 12 }}>
      MSSV: 23810310173
    </Text>
  </View>
);

//// ===== BOTTOM TAB (ẨN HOÀN TOÀN) =====
function MainTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,

        // 👇 ẨN HOÀN TOÀN THANH TAB 2 ICON
        tabBarStyle: { display: "none" },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={ExploreScreen} />
    </Tab.Navigator>
  );
}

//// ===== APP =====
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: { backgroundColor: "#53B175", height: 80 },
          headerTintColor: "#fff",
          headerTitle: () => <HeaderTitle />,
        }}
      >
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

        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />

        {/* MAIN TAB (ĐÃ ẨN TAB BAR) */}
        <Stack.Screen
          name="Main"
          component={MainTab}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
        />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Beverages" component={BeveragesScreen} />
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Favourite" component={FavouriteScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}