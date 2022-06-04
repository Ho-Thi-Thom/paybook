import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useQuery } from "~/hooks";
import { GET_ALL_USER } from "~/sanity/schema/user/query";
import { CardImage, TextInput } from "~/components";
import BubbleLayout from "~/Layout/BubbleLayout";
import { AntDesign } from "@expo/vector-icons";
import { width } from "~/utils/screen";
import { useDebounce } from "use-debounce";

const addUser = {
  _id: "0",
  name: "Thêm",
  icon: () => <AntDesign name="adduser" size={70} color="black" />,
};

const Account = ({ navigation }) => {
  const {
    data: userData,
    loading,
    setParams,
  } = useQuery(GET_ALL_USER, { search: "*" });
  const [searchText, setSearchText] = useState("");

  console.log("=========" + JSON.stringify(userData));

  const [value] = useDebounce(searchText.toLowerCase().trim(), 800);

  useEffect(() => {
    setParams({
      search: value === "" ? "*" : `*${value}*`,
    });
  }, [value]);

  // if (loading) {
  //   return (
  //     <View>
  //       <Text>loading</Text>
  //     </View>
  //   );
  // }

  return (
    <BubbleLayout>
      <View style={styles.view}>
        <TextInput
          placeholder="Tìm kiếm"
          onChange={setSearchText}
          value={searchText}
          onClear={() => setSearchText("")}
        />
      </View>
      <FlatList
        data={[addUser, ...userData]}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("AccountTab", {
                ...item,
                screen: "Loan",
                params: { ...item },
              })
            }
          >
            <CardImage item={item} />
          </TouchableOpacity>
        )}
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
