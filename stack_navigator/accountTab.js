import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import "react-native-gesture-handler";
import BubbleLayout from "~/Layout/BubbleLayout";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { width } from "~/utils/screen";
import {
  Ionicons,
  FontAwesome,
  AntDesign,
  MaterialIcons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { urlFor } from "~/sanity/config";
import { InforLoan, InforMoney, Other } from "~/screens";
import { createStackNavigator } from "@react-navigation/stack";
import { Modal } from "~/components";

const TopTab = createMaterialTopTabNavigator();

const AccountTab = (props) => {
  const { route, navigation } = props;
  const info = [
    {
      data: route.params.birthday,
      icon: {
        Component: FontAwesome,
        name: "birthday-cake",
      },
    },
    {
      data: route.params.phone,
      icon: {
        Component: AntDesign,
        name: "phone",
      },
    },
    {
      data: route.params.facebook,
      icon: {
        Component: AntDesign,
        name: "facebook-square",
      },
    },
    {
      data: route.params.zalo,
      icon: {
        Component: MaterialIcons,
        name: "snooze",
      },
    },
    {
      data: route.params.gmail,
      icon: {
        Component: MaterialCommunityIcons,
        name: "gmail",
      },
    },
  ];
  return (
    <BubbleLayout>
      <View style={styles.header}>
        <View style={styles.back}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-outline" size={24} color="#FF8599" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerContent}>
          <View style={styles.viewImage}>
            <Image
              style={styles.image}
              source={{ uri: urlFor(route.params.image) }}
            />
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: 8,
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontWeight: "500",
                color: "#FF5C77",
              }}
            >
              {route.params.name}
            </Text>
            <View
              style={{
                marginTop: 5,
                flexDirection: "row",
                flexWrap: "wrap",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
                padding: 3,
                borderRadius: 7,
              }}
            >
              {info.map((item, index) =>
                item.data ? (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginRight: 16,
                      paddingVertical: 3,
                      marginBottom: 7,
                    }}
                  >
                    <item.icon.Component
                      name={item.icon.name}
                      size={18}
                      color="#FF8599"
                    />
                    <Text style={{ marginLeft: 5 }}>{item.data}</Text>
                  </View>
                ) : null
              )}
            </View>
          </View>
        </View>
      </View>

      <View style={styles.body}>
        <TopTab.Navigator
          initialRouteName="Loan"
          screenOptions={{
            headerShown: false,
          }}
          sceneContainerStyle={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        >
          <TopTab.Screen name="Loan" component={LoanStack} />
          <TopTab.Screen name="Money" component={MoneyStack} />
          <TopTab.Screen name="Other" component={Other} />
        </TopTab.Navigator>
      </View>
    </BubbleLayout>
  );
};

const Stack = createStackNavigator();

const LoanStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={InforLoan} />
      <Stack.Screen name="Detail" component={Modal} />
    </Stack.Navigator>
  );
};

const MoneyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Main" component={InforMoney} />
      <Stack.Screen name="Detail" component={Modal} />
    </Stack.Navigator>
  );
};

export default AccountTab;

const styles = StyleSheet.create({
  view: {
    marginVertical: 16,
    width: width * 0.9,
  },
  header: {
    flex: 0.3,
    width,
  },
  body: {
    flex: 0.7,
    width,
  },

  back: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerContent: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 10,
  },
  viewImage: {
    flexShrink: 0,
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    padding: 5,
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9999999,
    marginTop: 30,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "contain",
    borderRadius: 9999999,
  },
});
