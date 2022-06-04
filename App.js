// In App.js in a new project

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import { AccountTab, MainTab } from "./stack_navigator";

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

export default App;
