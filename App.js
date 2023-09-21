import "react-native-gesture-handler";
import OnboardingPage from "./pages/onboarding";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage, LandingPage } from "./pages/landing";
import { SettingsPage } from "./pages/settings";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import BottomSheet from "./components/bottomSheet/bottomSheet";
import { BottomSheetContextProvider } from "./lib/context/bottomSheetContext";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView className={`flex-1`}>
      <BottomSheetContextProvider>
        <BottomSheetModalProvider>
          <BottomSheet />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#18181b",
                },
              }}
            >
              <Stack.Screen
                name="Welcome"
                component={OnboardingPage}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Landing"
                component={LandingPage}
                options={{ headerLeft: () => null, headerShown: false }}
              />
              <Stack.Screen
                name="Settings"
                component={SettingsPage}
                options={{ headerLeft: () => null }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </BottomSheetContextProvider>
    </GestureHandlerRootView>
  );
};

export default App;
//
// import "react-native-gesture-handler";
// import React, { useCallback, useMemo, useRef } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import BottomSheet from "@gorhom/bottom-sheet";
// import { GestureHandlerRootView } from "react-native-gesture-handler";
//
// const App = () => {
//   // ref
//   const bottomSheetRef = useRef(null);
//
//   // variables
//   const snapPoints = useMemo(() => ["25%", "50%"], []);
//
//   // callbacks
//   const handleSheetChanges = useCallback((index) => {
//     console.log("handleSheetChanges", index);
//   }, []);
//
//   // renders
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <View style={styles.container}>
//         <BottomSheet
//           ref={bottomSheetRef}
//           index={1}
//           snapPoints={snapPoints}
//           onChange={handleSheetChanges}
//         >
//           <View style={styles.contentContainer}>
//             <Text>Awesome 🎉</Text>
//           </View>
//         </BottomSheet>
//       </View>
//     </GestureHandlerRootView>
//   );
// };
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 24,
//     backgroundColor: "grey",
//   },
//   contentContainer: {
//     flex: 1,
//     alignItems: "center",
//   },
// });
//
// export default App;
