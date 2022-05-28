// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Detail, Account } from "./screens";

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Detail" component={Detail} />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
