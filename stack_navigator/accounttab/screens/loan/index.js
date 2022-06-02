import { View, Text, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import Card from "../../component/card";
import { width } from "~/utils/screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import Modal from "../../component/modal";
const info = [
  {
    id: "1",
    title: "Tiền 1",
    description: "tùm lum",
    money: "10000",
    debt_day: "2022-05-30",
    pay_day: "2022-05-30",
  },
  {
    id: "2",
    title: "Tiền 2",
    description: "tùm lum",
    money: "10000",
    debt_day: "2022-05-30",
    pay_day: "2022-05-30",
  },
  {
    id: "3",
    title: "Tiền 3",
    description: "tùm lum",
    money: "10000",
    debt_day: "2022-05-30",
    pay_day: "2022-05-30",
  },
  {
    id: "4",
    title: "Tiền 4",
    description: "tùm lum",
    money: "10000",
    debt_day: "2022-05-30",
    pay_day: "2022-05-30",
  },
  {
    id: "5",
    title: "Tiền 5",
    description: "tùm lum",
    money: "10000",
    debt_day: "2022-05-30",
    pay_day: "2022-05-30",
  },
  {
    id: "6",
    title: "Tiền 6",
    description: "tùm lum",
    money: "10000",
    debt_day: "2022-05-30",
    pay_day: "2022-05-30",
  },
  {
    id: "7",
    title: "Tiền 7",
    description: "tùm lum",
    money: "10000",
    debt_day: "2022-05-30",
    pay_day: "2022-05-30",
  },
  {
    id: "8",
    title: "Tiền 8",
    description: "tùm lum",
    money: "10000",
    debt_day: "2022-05-30",
    pay_day: "2022-05-30",
  },
  {
    id: "9",
    title: "Tiền 9",
    description: "tùm lum",
    money: "10000",
    debt_day: "2022-05-30",
    pay_day: "2022-05-30",
  },
  {
    id: "10",
    title: "Tiền 10",
    description: "tùm lum",
    money: "10000",
    debt_day: "2022-05-30",
    pay_day: "2022-05-30",
  },
  {
    id: "11",
    title: "Tiền 11",
    description: "tùm lum",
    money: "10000",
    debt_day: "2022-05-30",
    pay_day: "2022-05-30",
  },
  {
    id: "12",
    title: "Tiền 12",
    description: "tùm lum",
    money: "10000",
    debt_day: "2022-05-30",
    pay_day: "2022-05-30",
  },
];
const Infor_loan = ({ id }) => {
  console.log(id);
  const [modalVisible, setModalVisible] = useState(false);
  const [data, setData] = useState();
  const setModal = () => {
    setModalVisible(false);
  };
  return (
    <View>
      {modalVisible ? (
        <Modal setModal={setModal} data={data} setData={setData} />
      ) : (
        <FlatList
          data={info}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
                setData(item);
              }}
            >
              <Card item={item} />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
};

export default Infor_loan;
