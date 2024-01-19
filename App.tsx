import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BottomSheet from "./src/components/bottomSheet/bottomSheet";
import { BottomSheetContextProvider } from "./src/context/bottomSheetContext";
import { Accounts } from "./src/pages/accounts";
import { Currency } from "./src/pages/currency";
import { Details } from "./src/pages/details";
import { LandingPage } from "./src/pages/landing";
import OnboardingPage from "./src/pages/onboarding";
import { SettingsPage } from "./src/pages/settings";
import { UserToUserHistory } from "./src/pages/userToUserHistory";
import { YourQrCode } from "./src/pages/yourQrCode";

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
              <Stack.Screen name="QrCode" component={YourQrCode} />
            </Stack.Navigator>
          </NavigationContainer>
        </BottomSheetModalProvider>
      </BottomSheetContextProvider>
    </GestureHandlerRootView>
  );
};

export default App;
