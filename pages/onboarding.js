import { SafeAreaView, Text, View } from "react-native";
import { LongRectangularButton } from "../components/buttons/longRectangularButton";

export default function OnboardingPage({ navigation }) {
  return (
    <View
      className={`flex h-full flex-col justify-between bg-zinc-950 p-4 pb-20`}
    >
      <SafeAreaView />
      <Text className={`text-center text-[70px] font-bold text-zinc-300`}>
        PayMates
      </Text>
      <View className={`flex`}>
        <LongRectangularButton
          title={"Continue with Google"}
          buttonColour={"bg-zinc-200 border-zinc-100"}
          textColour={"text-zinc-900"}
          callBackFn={() => navigation.navigate("Landing", { name: "Jane" })}
        />
        <LongRectangularButton
          title={"Sign Up"}
          buttonColour={"bg-blue-600 border-blue-500"}
          textColour={"text-zinc-300"}
        />
        <LongRectangularButton title={"Sign In"} />
      </View>
    </View>
  );
}
