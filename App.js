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
import { StatusBar } from "expo-status-bar";
import { UserToUserHistory } from "./pages/userToUserHistory";
import { Details } from "./pages/details";
import { Currency } from "./pages/currency";
import { Accounts } from "./pages/accounts";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <GestureHandlerRootView className={`flex-1`}>
      <BottomSheetContextProvider>
        <BottomSheetModalProvider>
          <BottomSheet />
          <StatusBar style="light" />
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: "#18181b",
                },
                headerTitleStyle: {
                  color: "#2563eb",
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
                options={{
                  headerLeft: () => null,
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="U2U"
                component={UserToUserHistory}
                options={{
                  headerShown: true,
                }}
              />
              <Stack.Screen
                name="Settings"
                component={SettingsPage}
                options={{ headerShown: true, headerLeft: () => null }}
              />
              <Stack.Screen name="Details" component={Details} />
              <Stack.Screen name="Currency" component={Currency} />
              <Stack.Screen name="Accounts" component={Accounts} />
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </BottomSheetContextProvider>
    </GestureHandlerRootView>
  );
};

export default App;
