import React, { FunctionComponent, useState } from "react";
import { Text, View } from "react-native";
import { Toggle } from "../toggle/toggle";
import { AntDesign } from "@expo/vector-icons";

interface OwnProps {
  oweThem: boolean;
  setOweThem: (v) => void;
}

type Props = OwnProps;

export const WhoOwesWho: FunctionComponent<Props> = (props: OwnProps) => {
  return (
    <View
      className={`
        flex flex-row items-center w-full justify-between bg-zinc-900 p-2 rounded-md 
        border border-zinc-800 
      `}
    >
      <View className={`flex flex-row gap-1 items-center`}>
        <Text className={`text-xl`}>{props.oweThem ? "😭" : "😃"}</Text>
        <Text className={`text-zinc-400 text-md font-medium`}>
          {props.oweThem ? "I owe them" : "They owe me"}
        </Text>
      </View>

      <Toggle isActive={props.oweThem} setIsActive={props.setOweThem} />
    </View>
  );
};
