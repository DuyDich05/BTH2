import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function FavouriteScreen({ navigation }) {
  const data = [
    {
      id: 1,
      name: "Sprite Can",
      desc: "325ml, Price",
      price: 1.5,
      image: require("../assets/sprite.png"),
    },
    {
      id: 2,
      name: "Diet Coke",
      desc: "355ml, Price",
      price: 1.99,
      image: require("../assets/pngfuel11.png"),
    },
    {
      id: 3,
      name: "Apple & Grape Juice",
      desc: "2L, Price",
      price: 15.5,
      image: require("../assets/tree-top.png"),
    },
    {
      id: 4,
      name: "Coca Cola Can",
      desc: "325ml, Price",
      price: 4.99,
      image: require("../assets/coca.png"),
    },
    {
      id: 5,
      name: "Pepsi Can",
      desc: "330ml, Price",
      price: 4.99,
      image: require("../assets/pepsi.png"),
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image source={item.image} style={styles.img} />

      <View style={{ flex: 1 }}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.desc}>{item.desc}</Text>
      </View>

      <Text style={styles.price}>${item.price.toFixed(2)}</Text>

      <Ionicons name="chevron-forward" size={20} color="#999" />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favourite</Text>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />

      {/* BUTTON */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Cart", { cart: data })}>
        <Text style={styles.btnText}>Add All To Cart</Text>
      </TouchableOpacity>

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
            icon="cart-outline"
            label="Cart"
            onPress={() => navigation.navigate("Cart", { cart: data })}
/>
        <TabItem icon="heart" label="Favourite" active />
        <TabItem icon="person-outline" label="Account" />
      </View>
    </View>
  );
}

//// TAB ITEM
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
    paddingTop: 50,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  img: {
    width: 50,
    height: 50,
    marginRight: 10,
    resizeMode: "contain",
  },

  name: {
    fontWeight: "bold",
    fontSize: 15,
  },

  desc: {
    color: "#7C7C7C",
    marginTop: 3,
  },

  price: {
    fontWeight: "bold",
    marginRight: 10,
  },

  btn: {
    backgroundColor: "#53B175",
    margin: 20,
    borderRadius: 20,
    padding: 18,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  tabBar: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  tabItem: {
    alignItems: "center",
  },
});