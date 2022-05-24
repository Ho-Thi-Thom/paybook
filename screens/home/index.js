import { View, SafeAreaView, FlatList, StyleSheet } from "react-native";
import React from "react";
import { useQuery } from "../../hooks";
import { GET_ALL_USER } from "../../sanity/schema/user/query";
import Input from "./components/Input";
const Home = () => {
  const { data: userData } = useQuery(GET_ALL_USER);
  const list = [
    {
      id: "1",
      name: "Cho vay",
      image: "loan.png",
      background: "#56C222",
      color: "#B20093",
    },
    {
      id: "2",
      name: "Vay",
      image: "hand.png",
      background: "#FF2531",
      color: "#02AFAE",
    },
    {
      id: "3",
      name: "Tài khoản",
      image: "group.png",
      background: "#5188CA",
      color: "#FFA566",
    },
    {
      id: "4",
      name: "Thống kê",
      image: "bar_chart.png",
      background: "#8366B4",
      color: "#FCF471",
    },
    {
      id: "5",
      name: "Lịch sử",
      image: "clock.png",
      background: "#CCCCCC",
      color: "#071A68",
    },
  ];
  console.log(userData);
  return (
    <View style={styles.view}>
      <SafeAreaView>
        <FlatList
          data={list}
          renderItem={({ item }) => <Input item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </SafeAreaView>
    </View>
  );
};

export default Home;
const styles = StyleSheet.create({
  view: {
    paddingTop: 25,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
