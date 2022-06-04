import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";

const LoanInput = ({ title, multiline, value = "" }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <TextInput multiline={multiline} style={styles.textTitle}>
        {value}
      </TextInput>
    </View>
  );
};

export default LoanInput;

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    color: "#FF5C77",
  },
  textTitle: {
    marginTop: 7,
    marginBottom: 14,
    borderWidth: 1,
    backgroundColor: "white",
    borderRadius: 8,
    paddingVertical: 7,
    paddingHorizontal: 14,
    borderColor: "#FF5C77",
    marginRight: 7,
  },
});
