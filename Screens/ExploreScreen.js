import React from "react";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    name: "Fresh Fruits & Vegetable",
    image: require("../assets/pngfuel6.png"),
    color: "#EAF7EE",
  },
  {
    id: "2",
    name: "Cooking Oil & Ghee",
    image: require("../assets/Group6835.png"),
    color: "#FFF6ED",
  },
  {
    id: "3",
    name: "Meat & Fish",
    image: require("../assets/pngfuel9.png"),
    color: "#FDECEC",
  },
  {
    id: "4",
    name: "Bakery & Snacks",
    image: require("../assets/banhmy.png"),
    color: "#F4ECF7",
  },
  {
    id: "5",
    name: "Dairy & Eggs",
    image: require("../assets/Group6837.png"),
    color: "#F4ECF7",
  },
  {
    id: "6",
    name: "Beverages",
    image: require("../assets/beverage.png"),
    color: "#F4ECF7",
  },
];

export default function ExploreScreen({ navigation }) {
  const renderItem = ({ item }) => (
  <TouchableOpacity
    style={[styles.card, { backgroundColor: item.color }]}
    onPress={() => {
      if (item.name === "Beverages") {
        navigation.navigate("Beverages");
      }
    }}
  >
    <Image source={item.image} style={styles.img} />
    <Text style={styles.title}>{item.name}</Text>
  </TouchableOpacity>
);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find Products</Text>

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <Ionicons name="search" size={18} color="#888" />
        <TextInput placeholder="Search Store" style={styles.input} />
      </View>

      {/* GRID */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 20 }}
      />
      <View style={styles.tabBar}>
  <TabItem
    icon="grid-outline"
    label="Shop"
    onPress={() => navigation.navigate("Home")}
  />

  <TabItem
    icon="search-outline"
    label="Explore"
    active
  />

  <TabItem
    icon="cart-outline"
    label="Cart"
    onPress={() => navigation.navigate("Cart")}
  />

  <TabItem
    icon="heart-outline"
    label="Favourite"
    onPress={() => navigation.navigate("Favourite")}
  />

  <TabItem
    icon="person-outline"
    label="Account"
    onPress={() => navigation.navigate("Account")}
  />
</View>
    </View>
  );
}
const TabItem = ({ icon, label, active, onPress }) => (
  <TouchableOpacity style={styles.tabItem} onPress={onPress}>
    <Ionicons
      name={icon}
      size={22}
      color={active ? "#53B175" : "#999"}
    />
    <Text style={{ color: active ? "#53B175" : "#999", fontSize: 12 }}>
      {label}
    </Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },

  header: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
  },

  searchBox: {
    flexDirection: "row",
    backgroundColor: "#F2F3F2",
    margin: 20,
    padding: 12,
    borderRadius: 12,
  },

  input: { marginLeft: 10, flex: 1 },

  card: {
    width: "48%",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
  },

  img: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },

  title: {
    marginTop: 10,
    fontWeight: "600",
    textAlign: "center",
  },
  tabBar: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  height: 70,
  backgroundColor: "#fff",
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",

  borderTopLeftRadius: 25,
  borderTopRightRadius: 25,

  shadowColor: "#000",
  shadowOpacity: 0.08,
  shadowOffset: { width: 0, height: -2 },
  shadowRadius: 10,
  elevation: 15,

  paddingBottom: 10,
},

tabItem: {
  alignItems: "center",
  justifyContent: "center",
},
});