import React, { FunctionComponent, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Toggle } from "../toggle/toggle";

export const WhoOwesWho: FunctionComponent = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <View
      className={`
        flex flex-row items-center w-full justify-between bg-zinc-900 p-2 rounded-md 
        border border-zinc-800
      `}
    >
      <Text className={`text-zinc-400 text-md font-medium`}>
        {isActive ? "I owe them 😢" : "They owe me 😆"}
      </Text>
      <Toggle isActive={isActive} setIsActive={setIsActive} />
    </View>
  );
};
