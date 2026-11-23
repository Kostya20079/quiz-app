import { createDrawerNavigator } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text, View } from "react-native";

import HomeScreen from "../../screens/HomeScreen/HomeScreen";
import QuizScreen from "../../screens/QuizScreen/QuizScreen";
import DrawerContent from "./DrawerContent";
import { HomeStackParamList, RootDrawerParamList } from "./types";
import ResultsScreen from "../../screens/ResultsScreen/ResultsScreen";

const Stack = createNativeStackNavigator<HomeStackParamList>();
const Drawer = createDrawerNavigator<RootDrawerParamList>();

function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Quiz"
        component={QuizScreen}
      />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerContent {...props} />}
      screenOptions={{ headerShown: true }}
    >
      <Drawer.Screen
        name="Main"
        component={HomeStack}
        options={{ title: "Quiz Application" }}
      />
      <Drawer.Screen
        name="Results"
        component={ResultsScreen}
        options={{ title: "Wyniki" }}
      />
    </Drawer.Navigator>
  );
}

export default RootNavigator;
