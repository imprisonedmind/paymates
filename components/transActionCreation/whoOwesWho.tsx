import React, { FunctionComponent, useState } from "react";
import { Text, View } from "react-native";
import { Toggle } from "../toggle/toggle";

export const WhoOwesWho: FunctionComponent = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <View
      className={`flex flex-row items-center mt-8 w-full justify-between pr-4`}
    >
      <Text className={`text-zinc-400 text-md font-medium`}>
        {isActive ? "I owe them" : "They owe me"}
      </Text>
      <Toggle isActive={isActive} setIsActive={setIsActive} />
    </View>
  );
};
