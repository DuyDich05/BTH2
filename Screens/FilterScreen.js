import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FilterScreen({ navigation }) {
  // ✅ dùng array để chọn nhiều
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState([]);

  const categories = [
    "Eggs",
    "Noodles & Pasta",
    "Chips & Crisps",
    "Fast Food",
  ];

  const brands = [
    "Individual Collection",
    "Cocacola",
    "Ifad",
    "Kazi Farms",
  ];

  // 👉 toggle chọn / bỏ chọn
  const toggleItem = (item, list, setList) => {
    if (list.includes(item)) {
      setList(list.filter((i) => i !== item));
    } else {
      setList([...list, item]);
    }
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Text style={styles.title}>Filters</Text>

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="close" size={24} />
        </TouchableOpacity>
      </View>

      {/* CATEGORY */}
      <Text style={styles.section}>Categories</Text>

      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() =>
            toggleItem(item, selectedCategory, setSelectedCategory)
          }
        >
          <Ionicons
            name={
              selectedCategory.includes(item)
                ? "checkbox"
                : "square-outline"
            }
            size={20}
            color="#53B175"
          />
          <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
      ))}

      {/* BRAND */}
      <Text style={styles.section}>Brand</Text>

      {brands.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.option}
          onPress={() =>
            toggleItem(item, selectedBrand, setSelectedBrand)
          }
        >
          <Ionicons
            name={
              selectedBrand.includes(item)
                ? "checkbox"
                : "square-outline"
            }
            size={20}
            color="#53B175"
          />
          <Text style={styles.optionText}>{item}</Text>
        </TouchableOpacity>
      ))}

      {/* APPLY BUTTON */}
      <TouchableOpacity
        style={styles.applyBtn}
        onPress={() =>
  navigation.navigate("Main", {
    screen: "Explore",
    params: {
      categories: selectedCategory,
      brands: selectedBrand,
    },
  })
}
      >
        <Text style={{ color: "#fff", fontWeight: "bold" }}>
          Apply Filter
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// STYLE
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
  },

  section: {
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 16,
  },

  option: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
  },

  optionText: {
    marginLeft: 10,
    fontSize: 14,
  },

  applyBtn: {
    marginTop: 30,
    backgroundColor: "#53B175",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
});