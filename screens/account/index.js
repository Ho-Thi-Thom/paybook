import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import { useQuery } from "~/hooks";
import { GET_ALL_USER } from "~/sanity/schema/user/query";
import { Input, TextInput } from "~/components";
import BubbleLayout from "~/Layout/BubbleLayout";
import { AntDesign } from "@expo/vector-icons";
import { width } from "~/utils/screen";
const addUser = {
  _id: "0",
  name: "Thêm",
  icon: () => <AntDesign name="adduser" size={70} color="black" />,
};

const Account = () => {
  const { data: userData, loading } = useQuery(GET_ALL_USER);

  console.log("=========" + JSON.stringify(userData));
  if (loading) {
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  }
  return (
    <BubbleLayout>
      <View style={styles.view}>
        <TextInput placeholder="Tìm kiếm" />
      </View>
      <FlatList
        data={[addUser, ...userData]}
        renderItem={({ item }) => <Input item={item} />}
        keyExtractor={(item) => item._id}
        numColumns={2}
      />
    </BubbleLayout>
  );
};

export default Account;

const styles = StyleSheet.create({
  view: {
    marginVertical: 16,
    width: width * 0.9,
  },
});
