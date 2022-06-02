import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Othercard from "./othercard";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

const list = [
  {
    id: "1",
    name: "Chỉnh sửa",
    icon: {
      Component: AntDesign,
      name: "setting",
    },
  },
  {
    id: "2",
    name: "Ẩn",
    icon: {
      Component: Feather,
      name: "eye-off",
    },
  },
  {
    id: "3",
    name: "Ghim",
    icon: {
      Component: AntDesign,
      name: "pushpino",
    },
  },
  {
    id: "4",
    name: "Vay",
    icon: {
      Component: MaterialCommunityIcons,
      name: "hand-coin-outline",
    },
  },
  {
    id: "5",
    name: "Cho vay",
    icon: {
      Component: MaterialIcons,
      name: "attach-money",
    },
  },
];
const Other = ({ navigation, route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tùy chọn khác</Text>
      <View style={styles.flatlist}>
        <FlatList
          data={list}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => console.log("ssssssssssssss")}>
              <Othercard item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};

export default Other;
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginHorizontal: 5,
  },
  text: {
    paddingVertical: 10,
    fontSize: 20,
    color: "#FF5C77",
    fontWeight: "500",
  },
  flatlist: {
    marginLeft: 15,
  },
});
