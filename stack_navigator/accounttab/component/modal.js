import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import DatePicker from "@react-native-community/datetimepicker";
const Model = ({ setModal, data }) => {
  const [date, setDate] = useState({
    debt_date: new Date(data.debt_day),
    pay_date: new Date(data.pay_day),
  });
  const [show, setShow] = useState({
    isShowDedt_day: false,
    isShowPay_day: false,
  });

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    if (show.isShowDedt_day) {
      setShow(() => {
        return { ...show, ["isShowDedt_day"]: false };
      });
      setDate(() => {
        return { ...date, ["debt_date"]: currentDate };
      });
    }
    if (show.isShowPay_day) {
      setShow(() => {
        return { ...show, ["isShowPay_day"]: false };
      });
      setDate(() => {
        return { ...date, ["pay_date"]: currentDate };
      });
    }
  };
  return (
    <>
      <View style={styles.viewBack}>
        <View style={styles.btn}>
          <TouchableOpacity onPress={setModal}>
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.detail}>Chi tiết</Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={setModal}>
            <MaterialIcons name="update" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>Nội dung</Text>
        <TextInput style={styles.textTitle}>{data.title}</TextInput>
        <Text style={styles.title}>Chi tiết</Text>
        <TextInput style={[styles.textTitle, { height: 100 }]}>
          {data.description}
        </TextInput>
        <Text style={styles.title}>Số tiền</Text>
        <TextInput style={styles.textTitle}>{data.description}</TextInput>
        <Text style={styles.title}>Ngày lập</Text>
        <View style={styles.viewDate}>
          <Text style={styles.textDate}>
            {date.debt_date.getDate() +
              " - " +
              date.debt_date.getMonth() +
              " - " +
              date.debt_date.getFullYear()}
          </Text>
          <TouchableOpacity
            onPress={() =>
              setShow(() => {
                return { ...show, ["isShowDedt_day"]: true };
              })
            }
            style={styles.TouchableOpacity}
          >
            <MaterialIcons name="date-range" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {show.isShowDedt_day && (
          <DatePicker
            testID="dateTimePicker"
            value={date.debt_date}
            onChange={onChange}
          />
        )}
        <Text style={styles.title}>Ngày hẹn</Text>
        <View style={styles.viewDate}>
          <Text style={styles.textDate}>
            {date.pay_date.getDate() +
              " - " +
              date.pay_date.getMonth() +
              " - " +
              date.pay_date.getFullYear()}
          </Text>
          <TouchableOpacity
            onPress={() =>
              setShow(() => {
                return { ...show, ["isShowPay_day"]: true };
              })
            }
            style={styles.TouchableOpacity}
          >
            <MaterialIcons name="date-range" size={24} color="black" />
          </TouchableOpacity>
        </View>
        {show.isShowPay_day && (
          <DatePicker
            testID="dateTimePicker"
            value={date.pay_date}
            onChange={onChange}
          />
        )}
      </View>
    </>
  );
};

export default Model;
const marginTop = { marginTop: 7 };
const styles = StyleSheet.create({
  viewBack: {
    margin: 7,
    // justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    flexDirection: "row",
  },
  btn: {
    padding: 7,
  },
  viewTitle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
    paddingVertical: 5,
  },
  detail: {
    fontSize: 20,
    fontWeight: "500",
    color: "#FF5C77",
  },
  content: {
    marginLeft: 7,
  },
  title: {
    fontSize: 18,
    color: "#FF5C77",
  },
  viewDate: {
    flexDirection: "row",
    marginLeft: 60,
    marginTop: 7,
    justifyContent: "space-between",
  },
  textTitle: {
    marginTop: 7,
    marginBottom: 7,
    fontSize: 18,
    borderWidth: 1,
    paddingVertical: 2,
    marginHorizontal: 8,
    borderRadius: 7,
    paddingHorizontal: 4,
    marginLeft: 60,
    borderColor: "#FF5C77",
  },
  textDate: {
    fontSize: 18,
    marginRight: 8,
  },
  TouchableOpacity: {
    paddingRight: 8,
  },
});
