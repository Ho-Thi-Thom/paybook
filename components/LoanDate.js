import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";
import { MaterialIcons } from "@expo/vector-icons";

const LoanDate = ({ title, date, onPress }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.viewDate}>
        <TouchableOpacity onPress={onPress} style={styles.TouchableOpacity}>
          <Text style={styles.textDate}>
            {moment(date).format("DD/MM/YYYY")}
          </Text>
          <MaterialIcons name="date-range" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoanDate;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: "#FF5C77",
  },
  viewDate: {
    marginTop: 7,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: "#FF5C77",
    borderRadius: 8,
    backgroundColor: "white",
    marginRight: 7,
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
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 7,
    paddingHorizontal: 14,
  },
});
