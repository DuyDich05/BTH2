import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const DATA = [
  {
    id: "1",
    name: "Diet Coke",
    size: "355ml, Price",
    price: 1.99, // 🔥 sửa thành number
    image: require("../assets/pngfuel11.png"),
  },
  {
    id: "2",
    name: "Sprite Can",
    size: "325ml, Price",
    price: 1.5,
    image: require("../assets/sprite.png"),
  },
  {
    id: "3",
    name: "Apple & Grape Juice",
    size: "2L, Price",
    price: 15.99,
    image: require("../assets/tree-top.png"),
  },
  {
    id: "4",
    name: "Orange Juice",
    size: "2L, Price",
    price: 15.99,
    image: require("../assets/orange.png"),
  },
  {
    id: "5",
    name: "Coca Cola Can",
    size: "325ml, Price",
    price: 4.99,
    image: require("../assets/coca.png"),
  },
  {
    id: "6",
    name: "Pepsi Can",
    size: "330ml, Price",
    price: 4.99,
    image: require("../assets/pepsi.png"),
  },
];

export default function BeveragesScreen({ navigation }) {
  const [cart, setCart] = useState([]);

  // ✅ ADD TO CART
  const addToCart = (item) => {
    const exist = cart.find((i) => i.id === item.id);

    let newCart;

    if (exist) {
      // 👉 nếu đã có → tăng số lượng
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

    // 👉 chuyển sang Cart
    navigation.navigate("Cart", { cart: newCart });
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={item.image} style={styles.img} />

      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.desc}>{item.size}</Text>

      <View style={styles.bottomRow}>
        <Text style={styles.price}>${item.price}</Text>

        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => addToCart(item)}
        >
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons
          name="arrow-back"
          size={22}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.title}>Beverages</Text>
        <Ionicons name="options-outline" size={22} />
      </View>

      {/* List */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
    paddingTop: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  card: {
    backgroundColor: "#fff",
    width: "48%",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    elevation: 3,
  },

  img: {
    width: 70,
    height: 70,
    alignSelf: "center",
    resizeMode: "contain",
    marginBottom: 10,
  },

  name: {
    fontWeight: "bold",
    fontSize: 14,
  },

  desc: {
    color: "#777",
    fontSize: 12,
    marginVertical: 5,
  },

  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },

  price: {
    fontWeight: "bold",
    fontSize: 14,
  },

  btnAdd: {
    backgroundColor: "#53B175",
    width: 32,
    height: 32,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  plus: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});