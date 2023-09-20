import OnboardingPage from "./pages/onboarding";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomePage, LandingPage } from "./pages/landing";
import { SettingsPage } from "./pages/settings";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
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
  );
}
