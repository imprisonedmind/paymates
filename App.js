import {SafeAreaView, View} from 'react-native';
import OnboardingPage from "./pages/onboarding";

export default function App() {
  return (
    <>
      <SafeAreaView className={`bg-zinc-800 border-b border-zinc-700`}/>
      <View className={`flex h-max w-full bg-zinc-900`}>
        <OnboardingPage/>
      </View>
    </>
  );
}

