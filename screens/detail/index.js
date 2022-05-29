import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";

const Detail = ({ navigation, route }) => {
  console.log(route.params);
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Detail</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Detail;
