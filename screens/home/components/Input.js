import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";

const Input = ({ item }) => {
  return (
    <>
      <TouchableOpacity onPress={() => console.log("hello")}>
        <View style={[styles.view, { backgroundColor: `${item.background}` }]}>
          <Image
            style={styles.tinyLogo}
            source={require(`../../../assets/images/${item.image}`)}
          />
          <View style={styles.textview}>
            <Text style={[styles.text, { color: `${item.color}` }]}>
              {item.name}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default Input;
const styles = StyleSheet.create({
  view: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
    borderWidth: 1,
    borderRadius: 7,
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
  textview: {
    justifyContent: "center",
    alignItems: "center",
  },
});
