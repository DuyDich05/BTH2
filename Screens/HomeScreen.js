import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.logo}>🥕</Text>
          <Text style={styles.location}>
            <Ionicons name="location-outline" size={16} /> Dhaka, Banassre
          </Text>
        </View>

        {/* SEARCH */}
        <View style={styles.searchBox}>
          <Ionicons name="search" size={18} color="#888" />
          <TextInput placeholder="Search Store" style={styles.searchInput} />
        </View>

        {/* BANNER */}
        <View style={styles.banner}>
          
          <Image source={require("../assets/banner.png")} style={styles.bannerImg} />
        </View>

        {/* EXCLUSIVE OFFER */}
        <Section title="Exclusive Offer" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ProductCard
            name="Organic Bananas"
            desc="7pcs, Priceg"
            price="$4.99"
            image={require("../assets/92f1ea7dcce3b5d06cd1b1418f9b9413 3.png")}
            navigation={navigation}
          />
          <ProductCard
            name="Red Apple"
            desc="1kg, Priceg"
            price="$4.99"
            image={require("../assets/Vector.png")}
            navigation={navigation}
          />
        </ScrollView>

        {/* BEST SELLING */}
        <Section title="Best Selling" />

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ProductCard
            name="Organic Bananas"
            desc="7pcs, Priceg"
            price="$4.99"
            image={require("../assets/pepper.png")}
            navigation={navigation}
          />
          <ProductCard
            name="Organic Bananas"
            desc="7pcs, Priceg"
            price="$4.99"
            image={require("../assets/pngfuel3.png")}
            navigation={navigation}
          />
        </ScrollView>

      </ScrollView>

      {/* ⭐ GIỮ LẠI TAB BAR 5 NÚT */}
      <View style={styles.tabBar}>
        <TabItem icon="grid-outline" label="Shop" active />
        <TabItem
  icon="search-outline"
  label="Explore"
  onPress={() => navigation.navigate("Explore")}
/>
        <TabItem icon="cart-outline" label="Cart" />
        <TabItem icon="heart-outline" label="Favourite" />
        <TabItem icon="person-outline" label="Account" />
      </View>
    </View>
  );
}

//// ===== COMPONENTS =====

// Section Title
const Section = ({ title }) => (
  <View style={styles.sectionHeader}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.seeAll}>See all</Text>
  </View>
);

// Product Card
const ProductCard = ({ name, desc, price, image, navigation }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImg} />

      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardDesc}>{desc}</Text>

      <View style={styles.row}>
        <Text style={styles.cardPrice}>{price}</Text>

        <TouchableOpacity
          style={styles.addBtn}
          onPress={() =>
            navigation.navigate("ProductDetail", {
              product: { name, desc, price, image },
            })
          }
        >
          <Ionicons name="add" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// Tab Item
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

//// ===== STYLES =====

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  header: {
    alignItems: "center",
    marginTop: 40,
  },

  logo: {
    fontSize: 30,
  },

  location: {
    color: "#555",
    marginTop: 5,
  },

  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F3F2",
    margin: 20,
    padding: 12,
    borderRadius: 12,
  },

  searchInput: {
    marginLeft: 10,
    flex: 1,
  },

  banner: {
    
    marginHorizontal: 20,
    
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
  borderRadius: 20,
  overflow: "hidden", // để bo góc ảnh
  },

  bannerTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  bannerSub: {
    color: "#53B175",
    marginTop: 5,
  },

  bannerImg: {
  width: "100%",
  height: 140,
  resizeMode: "cover", // ảnh phủ full
},

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 20,
  },

  sectionTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },

  seeAll: {
    color: "#53B175",
  },

  card: {
    width: 170,
    backgroundColor: "#fff",
    marginLeft: 20,
    marginTop: 10,
    borderRadius: 20,
    padding: 15,
    borderWidth: 1,
    borderColor: "#E2E2E2",
  },

  cardImg: {
    width: "100%",
    height: 100,
    resizeMode: "contain",
  },

  cardTitle: {
    fontWeight: "bold",
    fontSize: 16,
    marginTop: 10,
  },

  cardDesc: {
    color: "#7C7C7C",
    marginTop: 5,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 15,
  },

  cardPrice: {
    fontSize: 18,
    fontWeight: "bold",
  },

  addBtn: {
    backgroundColor: "#53B175",
    padding: 10,
    borderRadius: 15,
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