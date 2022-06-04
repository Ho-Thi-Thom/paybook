import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import DatePicker from "@react-native-community/datetimepicker";
import moment from "moment";

const Modal = ({ route, navigation }) => {
  const data = route.params;
  const [date, setDate] = useState({
    debt_date: moment(data.debt_day).toDate(),
    pay_date: moment(data.pay_day).toDate(),
  });
  const [show, setShow] = useState({ open: false, value: null, key: null });

  const onChange = (event, currentDate, key) => {
    setShow(false);
    setDate({ ...date, [key]: currentDate });
  };

  return (
    <>
      <View style={styles.viewBack}>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.viewTitle}>
          <Text style={styles.detail}>Chi tiết</Text>
        </View>
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => {}}>
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
            {moment(date.debt_date).format("DD/MM/YYYY")}
          </Text>
          <TouchableOpacity
            onPress={() =>
              setShow({ open: true, value: date.debt_date, key: "debt_date" })
            }
            style={styles.TouchableOpacity}
          >
            <MaterialIcons name="date-range" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Ngày hẹn</Text>
        <View style={styles.viewDate}>
          <Text style={styles.textDate}>
            {moment(date.pay_date).format("DD/MM/YYYY")}
          </Text>
          <TouchableOpacity
            onPress={() =>
              setShow({ open: true, value: date.pay_date, key: "pay_date" })
            }
            style={styles.TouchableOpacity}
          >
            <MaterialIcons name="date-range" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {show.open && (
        <DatePicker
          testID="dateTimePicker"
          value={show.value}
          onChange={(event, currentDate) =>
            onChange(event, currentDate, show.key)
          }
        />
      )}
    </>
  );
};

export default Modal;

const styles = StyleSheet.create({
  viewBack: {
    margin: 7,
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
