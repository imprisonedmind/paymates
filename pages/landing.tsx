import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SettingsPage } from "./settings";
import { HomePage } from "./home";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { useBottomSheetContext } from "../lib/context/bottomSheetContext";

const Tab = createBottomTabNavigator();

export const LandingPage: React.FC<{}> = () => {
  const { setIsOpen } = useBottomSheetContext();

  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: "#18181b" },
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
        name="Test"
        component={HomePage}
        options={{
          tabBarIcon: ({ color, size }) => (
            <TouchableOpacity
              onPress={() => setIsOpen(true)}
              className={`
                absolute flex bottom-2 rounded-full h-[80px] w-[80px] overflow-hidden 
                justify-center items-center
              `}
            >
              <View
                className={`absolute flex bg-zinc-950 h-10 w-20 bottom-0 scale-105`}
              />
              <View
                className={`
                  flex items-center h-[70px] w-[70px] justify-center bg-blue-600 
                  rounded-full
                `}
              >
                <Ionicons
                  name={"add"}
                  size={44}
                  color={"#09090b"}
                  className={`bg-red-500`}
                />
              </View>
            </TouchableOpacity>
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
