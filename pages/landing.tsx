import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SettingsPage } from "./settings";
import { HomePage } from "./home";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export const LandingPage: React.FC<{}> = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopColor: "#52525b",
          backgroundColor: "#18181b",
        },
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name="money-bill-wave" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsPage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
