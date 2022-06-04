import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const Card = ({ item }) => {
  return (
    <View
      style={{
        flex: 1,
        marginBottom: 4,
        paddingVertical: 7,
        paddingHorizontal: 7,
        marginHorizontal: 5,
        flexDirection: "row",
        marginBottom: 12,
        borderRadius: 8,
        backgroundColor: "rgba(255, 255, 255, 0.4)",
        alignItems: "center",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <item.icon.Component name={item.icon.name} size={20} color="#FF8599" />
        <Text style={{ marginLeft: 7, fontSize: 18 }}>{item.name}</Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <AntDesign name="right" size={15} color="black" />
      </View>
    </View>
  );
};

export default Card;
