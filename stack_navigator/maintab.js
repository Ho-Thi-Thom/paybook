import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Account, Detail } from "../screens";
import "react-native-gesture-handler";
import { View, StyleSheet } from "react-native";
import {
  MaterialIcons,
  AntDesign,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();
const tabButtons = [
  {
    name: "Loan",
    Component: Detail,
    icon: {
      Component: MaterialIcons,
      name: "attach-money",
    },
  },
  {
    name: "Money",
    Component: Home,
    icon: {
      Component: MaterialCommunityIcons,
      name: "hand-coin-outline",
    },
  },
  {
    name: "Home",
    Component: Home,
    icon: {
      Component: AntDesign,
      name: "home",
    },
  },
  {
    name: "Account",
    Component: Account,
    icon: {
      Component: Feather,
      name: "user",
    },
  },
  {
    name: "Other",
    Component: Home,
    icon: {
      Component: MaterialCommunityIcons,
      name: "dots-horizontal",
    },
  },
];

const MainTab = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
      }}
    >
      {tabButtons.map((item, index) => (
        <BottomTab.Screen
          key={index}
          name={item.name}
          component={item.Component}
          options={{
            tabBarIcon: ({ focused }) => {
              const focusedBorder = focused && <View style={styles.focused} />;

              return Math.floor(tabButtons.length / 2) === index ? (
                <View style={{ marginBottom: 5 }}>
                  <View style={styles.home}>
                    <item.icon.Component
                      name={item.icon.name}
                      size={40}
                      color="white"
                    />
                  </View>
                  {focusedBorder}
                </View>
              ) : (
                <View style={{ marginBottom: 5 }}>
                  <item.icon.Component
                    name={item.icon.name}
                    size={28}
                    color={focused ? "#FF5C77" : "#9CA3AF"}
                  />
                  {focusedBorder}
                </View>
              );
            },
          }}
        />
      ))}
    </BottomTab.Navigator>
  );
};

export default MainTab;
const styles = StyleSheet.create({
  focused: {
    position: "absolute",
    bottom: -10,
    height: 5,
    left: 0,
    right: 0,
    borderRadius: 8,
    backgroundColor: "#FF5C77",
  },
  home: {
    marginTop: -50,
    marginBottom: 10,
    borderRadius: 99999999,
    backgroundColor: "#FF5C77",
    width: 70,
    height: 70,
    justifyContent: "center",
    alignItems: "center",
  },
});
