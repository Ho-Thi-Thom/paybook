import { View, Text } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native";
const Card = ({ item }) => {
  return (
    <>
      <SafeAreaView>
        <View
          style={{
            paddingVertical: 4,
            borderWidth: 1,
            marginBottom: 4,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text
              style={{
                paddingLeft: 4,
                fontWeight: "bold",
                color: "black",
                fontSize: 18,
              }}
            >
              {item.title}
            </Text>
            <Text
              style={{
                paddingRight: 4,
                fontWeight: "bold",
                color: "#f00",
                fontSize: 18,
              }}
            >
              {item.money}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginTop: 3,
              paddingLeft: 4,
            }}
          >
            <AntDesign name="clockcircleo" size={15} color="black" />
            <Text style={{ marginLeft: 7 }}>{item.debt_day}</Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Card;
