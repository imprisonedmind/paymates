import { Button, Text, TouchableOpacity, View } from "react-native";
import { LongRectangularButton } from "../components/buttons/longRectangularButton";

export default function OnboardingPage() {
  return (
    <View className={`flex flex-col p-4 justify-between h-full pb-20`}>
      <Text className={`text-[70px] text-zinc-300 font-bold text-center`}>
        PayMates
      </Text>
      <View className={`flex`}>
        <LongRectangularButton
          title={"Continue with Google"}
          buttonColour={"bg-zinc-200 border-zinc-100"}
          textColour={"text-zinc-900"}
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
