import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Card = ({ item }) => {
  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.day}>
            <AntDesign name="clockcircleo" size={15} color="black" />
            <Text style={{ marginLeft: 7, marginTop: 4 }}>{item.debt_day}</Text>
          </View>
        </View>
        <View style={styles.viewMoney}>
          <Text style={styles.money}>{item.money}</Text>
        </View>
      </View>
    </>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 5,
    marginBottom: 4,
    borderRadius: 7,
    marginVertical: 7,
    marginHorizontal: 10,
    backgroundColor: " rgba(255, 255, 255, 0.4)",
  },
  title: {
    paddingLeft: 4,
    fontWeight: "bold",
    color: "#FF3355",
    fontSize: 18,
  },
  money: {
    paddingRight: 4,
    fontWeight: "bold",
    color: "#FF5C77",
    fontSize: 18,
  },
  day: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
    paddingLeft: 4,
  },
  viewMoney: {
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-end",
  },
});
