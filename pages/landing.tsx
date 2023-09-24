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
                absolute bottom-2 flex h-[80px] w-[80px] items-center justify-center 
                overflow-hidden rounded-full
              `}
            >
              <View
                className={`absolute bottom-0 flex h-10 w-20 scale-105 bg-zinc-950`}
              />
              <View
                className={`
                  flex h-[70px] w-[70px] items-center justify-center rounded-full 
                  bg-blue-600
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
