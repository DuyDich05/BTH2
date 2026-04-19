import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CartScreen({ route, navigation }) {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (route?.params?.cart) {
      const unique = [];

      route.params.cart.forEach((item) => {
        const exist = unique.find((i) => i.id === item.id);

        if (!exist) {
          unique.push({
            ...item,
            quantity: 1,
          });
        }
      });

      setCartItems(unique);
    }
  }, [route?.params?.cart]);

  // ➕
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // ➖
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // ❌
  const removeItem = (id) => {
    setCartItems((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  // 💰 TOTAL
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      {/* LEFT */}
      <Image source={item.image} style={styles.image} />

      {/* CENTER */}
      <View style={{ flex: 1 }}>
        <View style={styles.rowBetween}>
          <Text style={styles.name}>{item.name}</Text>

          {/* ❌ */}
          <TouchableOpacity onPress={() => removeItem(item.id)}>
            <Ionicons name="close" size={18} color="#999" />
          </TouchableOpacity>
        </View>

        <Text style={styles.desc}>{item.desc || "1kg, Price"}</Text>

        <View style={styles.rowBetween}>
          {/* QTY */}
          <View style={styles.qtyBox}>
            <TouchableOpacity
              style={styles.btnMinus}
              onPress={() => decreaseQty(item.id)}
            >
              <Ionicons name="remove" size={16} color="#7C7C7C" />
            </TouchableOpacity>

            <Text style={styles.qty}>{item.quantity}</Text>

            <TouchableOpacity
              style={styles.btnPlus}
              onPress={() => increaseQty(item.id)}
            >
              <Ionicons name="add" size={16} color="#53B175" />
            </TouchableOpacity>
          </View>

          {/* PRICE */}
          <Text style={styles.price}>
            ${item.price.toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* TITLE */}
      <Text style={styles.title}>My Cart</Text>

      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />

      {/* CHECKOUT */}
      <View style={styles.checkoutContainer}>
        <TouchableOpacity style={styles.checkoutBtn}>
          <Text style={styles.checkoutText}>Go to Checkout</Text>

          <View style={styles.priceBadge}>
            <Text style={styles.badgeText}>
              ${total.toFixed(2)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* TAB BAR */}
<View style={styles.tabBar}>
  <TabItem
    icon="grid-outline"
    label="Shop"
    onPress={() =>
      navigation.navigate("Main", { screen: "Home" })
    }
  />

  <TabItem
    icon="search-outline"
    label="Explore"
    onPress={() =>
      navigation.navigate("Main", { screen: "Explore" })
    }
  />

  <TabItem
    icon="cart"
    label="Cart"
    active
  />

  <TabItem
    icon="heart-outline"
    label="Favourite"
    onPress={() => navigation.navigate("Favourite")}
  />

  <TabItem
    icon="person-outline"
    label="Account"
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
//// STYLE

const styles = StyleSheet.create({
  container: {
    flex: 1,
  backgroundColor: "#fff",
  paddingHorizontal: 20,
  paddingTop: 50,
  paddingBottom: 90,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  itemContainer: {
    flexDirection: "row",
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: "#eee",
    paddingBottom: 15,
  },

  image: {
    width: 70,
    height: 70,
    resizeMode: "contain",
    marginRight: 10,
  },

  name: {
    fontSize: 16,
    fontWeight: "bold",
  },

  desc: {
    color: "#7C7C7C",
    marginVertical: 5,
  },

  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  qtyBox: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  qty: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: "bold",
  },

  btnMinus: {
    width: 32,
    height: 32,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
  },

  btnPlus: {
    width: 32,
    height: 32,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },

  price: {
    fontSize: 16,
    fontWeight: "bold",
  },

  checkoutContainer: {
    paddingVertical: 15,
  },

  checkoutBtn: {
    backgroundColor: "#53B175",
    borderRadius: 20,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  checkoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  priceBadge: {
    position: "absolute",
    right: 15,
    backgroundColor: "#489E67",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
  },

  badgeText: {
    color: "#fff",
    fontWeight: "bold",
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
},
});