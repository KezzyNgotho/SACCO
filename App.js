import HomeScreen from "./screeens/HomeScreen";
import SettingsScreen from "./screeens/SettingsScreen";
import HistoryScreen from "./screeens/HistoryScreen";
import * as React from "react";
import ProductsScreen from "./screeens/ProductsScreen";
import MilkScreen from "./screeens/MilkScreen";
import SalesScreen from "./screeens/SalesScreen";
import VegetablesScreen from "./screeens/VegetablesScreen";

import PotatoesScreen from "./screeens/PotatoesScreen"; 
import StoreScreen from "./screeens/StoreScreen"; 
import DeliveryScreen from "./screeens/DeliveryScreen";
import OverviewScreen from "./screeens/OverviewScreen";
import AboutusScreen from "./screeens/AboutusScreen";
import TalktousScreen from "./screeens/TalktousScreen";
import SignUpScreen from "./screeens/SignUpScreen";
import LoginScreen from "./screeens/LoginScreen";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="History" component={HistoryScreen} />
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="Milk" component={MilkScreen} />
      <Stack.Screen name="Vegetables" component={VegetablesScreen} />

      <Stack.Screen name="Potatoes" component={PotatoesScreen} />
      <Stack.Screen name="Sales" component={SalesScreen} />
      <Stack.Screen name="Store" component={StoreScreen} />
      <Stack.Screen name="Delivery" component={DeliveryScreen} />
      <Stack.Screen name="Overview" component={OverviewScreen} />
      <Stack.Screen name="Aboutus" component={AboutusScreen} />
      <Stack.Screen name="Talk to us" component={TalktousScreen} />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator
      initialRouteName="Settings"
      screenOptions={{ headerShown: true }}
    >
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="AuthStack"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="HomeStack" component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;