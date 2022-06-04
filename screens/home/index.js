import { SafeAreaView, FlatList } from "react-native";
import React from "react";
import { useQuery } from "~/hooks";
import { GET_ALL_USER } from "~/sanity/schema/user/query";
import { CardImage } from "~/components";
import BubbleLayout from "~/Layout/BubbleLayout";
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  Octicons,
} from "@expo/vector-icons";

const list = [
  {
    id: "1",
    name: "Cho vay",
    color: "#3B82F6",
    icon: () => <MaterialIcons name="attach-money" size={50} color="#3B82F6" />,
  },
  {
    id: "2",
    name: "Vay",
    color: "#FF3355",
    icon: () => (
      <MaterialCommunityIcons
        name="hand-coin-outline"
        size={50}
        color="#FF3355"
      />
    ),
  },
  {
    id: "3",
    name: "Tài khoản",
    color: "#FFA566",
    icon: () => <Feather name="user" size={50} color="#FFA566" />,
  },
  {
    id: "4",
    name: "Thống kê",
    color: "violet",
    icon: () => <AntDesign name="linechart" size={50} color="violet" />,
  },
  {
    id: "5",
    name: "Lịch sử",
    color: "#071A68",
    icon: () => <Octicons name="history" size={50} color="#071A68" />,
  },
];

const Home = ({ navigation }) => {
  const { data: userData } = useQuery(GET_ALL_USER);
  return (
    <BubbleLayout>
      <SafeAreaView>
        <FlatList
          data={list}
          renderItem={({ item }) => <CardImage item={item} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
        />
      </SafeAreaView>
    </BubbleLayout>
  );
};

export default Home;
