import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex h-full items-center justify-center w-full bg-red-500">
      <Text className={"w-fit"}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

