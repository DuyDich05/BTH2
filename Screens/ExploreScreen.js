import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { PRODUCTS } from "../data/data";
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

export default function ExploreScreen({ navigation, route }) {
  // ✅ STATE
  const [keyword, setKeyword] = useState("");
  const [filteredData, setFilteredData] = useState(DATA);
  const [cart, setCart] = useState([]);

  // ✅ SEARCH
  const handleSearch = (text) => {
  setKeyword(text);

  let data = PRODUCTS;

  // 🔍 search theo tên
  if (text !== "") {
    data = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  // 🎯 filter category
  if (selectedCategories.length > 0) {
    data = data.filter((item) =>
      selectedCategories.includes(item.category)
    );
  }

  // 🎯 filter brand
  if (selectedBrands.length > 0) {
    data = data.filter((item) =>
      selectedBrands.includes(item.brand)
    );
  }

  // 👉 nếu không có gì thì hiện category
  if (text === "" && selectedCategories.length === 0 && selectedBrands.length === 0) {
    setFilteredData(DATA);
  } else {
    setFilteredData(data);
  }
};

  // 👉 render category
  const renderCategory = ({ item }) => (
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

  // 👉 render product
  const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.img} />
      <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
      <Text>${item.price}</Text>

      <TouchableOpacity
  style={styles.addBtn}
  onPress={() => {
  const existing = cart.find((i) => i.id === item.id);

  let newCart;

  if (existing) {
    // 👉 đã có → tăng số lượng
    newCart = cart.map((i) =>
      i.id === item.id
        ? { ...i, quantity: i.quantity + 1 }
        : i
    );
  } else {
    // 👉 chưa có → thêm mới
    newCart = [...cart, { ...item, quantity: 1 }];
  }

  setCart(newCart);

  navigation.navigate("Cart", { cart: newCart });
}}
>
  <Ionicons name="add" size={18} color="#fff" />
</TouchableOpacity>
    </View>
  );
  const selectedCategories = route?.params?.categories || [];
  const selectedBrands = route?.params?.brands || [];


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Find Products</Text>

      {/* SEARCH */}
      <View style={styles.searchBox}>
  <Ionicons name="search" size={18} color="#888" />

  <TextInput
    placeholder="Search Store"
    style={styles.input}
    value={keyword}
    onChangeText={handleSearch}
  />

  {/* 👇 NÚT FILTER */}
  <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
    <Ionicons name="options-outline" size={22} color="#333" />
  </TouchableOpacity>
</View>

      {/* LIST */}
      <FlatList
        data={filteredData}
        renderItem={keyword === "" ? renderCategory : renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        contentContainerStyle={{ padding: 20 }}
      />

      {/* TAB BAR */}
      <View style={styles.tabBar}>
        <TabItem
          icon="grid-outline"
          label="Shop"
          onPress={() => navigation.navigate("Home")}
        />
        <TabItem icon="search-outline" label="Explore" active />
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

// TAB ITEM
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

// STYLE
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
    alignItems: "center",
  },

  input: { marginLeft: 10, flex: 1 },

  card: {
    width: "48%",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
  },

  productCard: {
    width: "48%",
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 15,
    padding: 10,
    marginBottom: 15,
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

  addBtn: {
    backgroundColor: "#53B175",
    padding: 8,
    borderRadius: 10,
    alignSelf: "flex-end",
    marginTop: 5,
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
    elevation: 15,
  },

  tabItem: {
    alignItems: "center",
    justifyContent: "center",
  },
});