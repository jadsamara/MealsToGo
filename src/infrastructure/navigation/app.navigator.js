import { NavigationContainer } from "@react-navigation/native";
import { Text, View, SafeAreaView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { SafeArea } from "../../utils/safe-area.component";
import { RestaurantsNavigator } from "./restaurants.navigator";

const Tab = createBottomTabNavigator();

function SettingsScreen() {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Settings!</Text>
      </View>
    </SafeArea>
  );
}

function Map() {
  return (
    <SafeArea>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Map!</Text>
      </View>
    </SafeArea>
  );
}

function Restaurants() {
  return <RestaurantsScreen />;
}

const TAB_ICON = {
  Restaurants: "md-restaurant",
  Map: "md-map",
  Settings: "md-settings",
};

const screenOptions = ({ route }) => {
  const iconName = TAB_ICON[route.name];
  return {
    tabBarIcon: ({ size, color }) => (
      <Ionicons name={iconName} size={size} color={color} />
    ),
    tabBarActiveTintColor: "tomato",
    tabBarInactiveTintColor: "gray",
    tabBarStyle: [
      {
        display: "flex",
      },
      null,
    ],
  };
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={Map} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
