import { View, Text, FlatList } from "react-native";
import React from "react";
import Card from "../component/card";
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
  return (
    <View>
      <FlatList
        data={info}
        renderItem={({ item }) => <Card item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Infor_loan;
