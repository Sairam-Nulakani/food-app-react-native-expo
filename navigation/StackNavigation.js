import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Welcome from "../screens/Welcome";
import ReceipeDetails from "../screens/ReceipeDetails";

const Tab = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Welcome">
        <Tab.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Tab.Screen
          name="ReceipeDetails"
          component={ReceipeDetails}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
