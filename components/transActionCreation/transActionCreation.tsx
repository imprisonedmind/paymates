import React, { FunctionComponent, useState } from "react";
import { Text, View } from "react-native";
import { PickYourPaymates } from "./pickYourPaymates";
import { Toggle } from "../toggle/toggle";

interface OwnProps {}

type Props = OwnProps;

export const TransActionCreation: FunctionComponent<Props> = (props) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <View className={`flex flex-col p-4 pr-0`}>
      <PickYourPaymates />
      <View
        className={`
          flex flex-row items-center mt-8 w-full justify-between pr-4
      `}
      >
        <Text className={`text-zinc-400 text-md font-medium`}>
          {isActive ? "I owe them" : "They owe me"}
        </Text>
        <Toggle isActive={isActive} setIsActive={setIsActive} />
      </View>
    </View>
  );
};
