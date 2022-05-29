// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Home, Detail, Account } from "./screens";
import "react-native-gesture-handler";
import BubbleLayout from "./Layout/BubbleLayout";
import { Fragment } from "react";
import { View, TouchableOpacity, Image, StyleSheet, Text } from "react-native";
import { width } from "./utils/screen";
import { Ionicons } from "@expo/vector-icons";
import { urlFor } from "./sanity/config";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const Stack = createStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainTab"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="AccountTab" component={AccountTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const BottomTab = createBottomTabNavigator();

const tabButtons = [
  {
    name: "Loan",
    Component: Home,
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

function MainTab() {
  return (
    <BottomTab.Navigator
      initialRouteName="Account"
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
              const focusedBorder = focused && (
                <View
                  style={{
                    position: "absolute",
                    bottom: -10,
                    height: 5,
                    left: 0,
                    right: 0,
                    borderRadius: 8,
                    backgroundColor: "#FF5C77",
                  }}
                />
              );

              return Math.floor(tabButtons.length / 2) === index ? (
                <View style={{ marginBottom: 5 }}>
                  <View
                    style={{
                      marginTop: -50,
                      marginBottom: 10,
                      borderRadius: 99999999,
                      backgroundColor: "#FF5C77",
                      width: 70,
                      height: 70,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
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
      {/* <BottomTab.Screen name="Account" component={Account} /> */}
    </BottomTab.Navigator>
  );
}

const TopTab = createMaterialTopTabNavigator();

function AccountTab(props) {
  const { route, navigation } = props;
  console.log(route.params);
  const info = [
    {
      data: route.params.birthday,
      icon: {
        Component: FontAwesome,
        name: "birthday-cake",
      },
    },
    {
      data: route.params._createdAt,
      icon: {
        Component: AntDesign,
        name: "login",
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

      <View style={{ flex: 0.7, width }}>
        <TopTab.Navigator
          initialRouteName="AccountDetail"
          screenOptions={{
            headerShown: false,
          }}
          sceneContainerStyle={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        >
          <TopTab.Screen
            name="AccountDetail"
            options={{
              tabBarLabel: "Vay",
            }}
            component={() => <Detail {...props} />}
          />
          <TopTab.Screen
            name="AccountDetail1"
            options={{
              tabBarLabel: "Cho Vay",
            }}
            component={() => <Detail {...props} />}
          />
          <TopTab.Screen
            name="AccountDetail2"
            options={{
              tabBarLabel: "Tùy chọn",
            }}
            component={() => <Detail {...props} />}
          />
        </TopTab.Navigator>
      </View>
    </BubbleLayout>
  );
}

export default App;
const styles = StyleSheet.create({
  view: {
    marginVertical: 16,
    width: width * 0.9,
  },
  header: {
    flex: 0.3,
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
