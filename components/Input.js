import { View, Text, StyleSheet, Image } from "react-native";
import { urlFor } from "~/sanity/config";

const Input = ({ item }) => {
  return (
    <View style={styles.view}>
      <View style={styles.icon}>
        {item.image && (
          <Image
            source={
              typeof item.image === "number"
                ? item.image
                : { uri: urlFor(item.image) }
            }
            style={styles.tinyLogo}
          />
        )}
        {item.icon && item.icon()}
      </View>
      <View style={styles.textview}>
        <Text style={[styles.text, { color: item.color }]}>{item.name}</Text>
      </View>
    </View>
  );
};

export default Input;
const styles = StyleSheet.create({
  view: {
    margin: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  tinyLogo: {
    width: 80,
    height: 80,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#f00",
  },
  textview: {
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f7e9f7",
    borderRadius: 8,
    width: 120,
    height: 120,
  },
});
