import {
  StyleSheet,
  TextInput as TextInputRn,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const TextInput = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <Ionicons
        name="search-outline"
        size={24}
        color="#FF1C52"
        style={styles.icon}
      />
      <TextInputRn style={styles.text} placeholder={placeholder} />
      <View style={styles.close}>
        <TouchableOpacity>
          <Ionicons name="close-outline" size={24} color="#777" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TextInput;

const styles = StyleSheet.create({
  container: {
    paddingLeft: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.7)",
    borderRadius: 8,
  },
  icon: {
    flexShrink: 0,
  },
  text: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
    paddingLeft: 8,
  },
  close: {
    padding: 8,
  },
});
