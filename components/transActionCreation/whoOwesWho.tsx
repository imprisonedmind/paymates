import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { Toggle } from "../toggle/toggle";

interface OwnProps {
  oweThem: boolean;
  setOweThem: (v) => void;
}

type Props = OwnProps;

export const WhoOwesWho: FunctionComponent<Props> = (props: OwnProps) => {
  return (
    <View
      className={`
        flex w-full flex-row items-center justify-between rounded-md border border-zinc-800 
        bg-zinc-900 p-2 
      `}
    >
      <View className={`flex flex-row items-center gap-1`}>
        <Text className={`text-xl`}>{props.oweThem ? "😭" : "😃"}</Text>
        <Text className={`text-md font-medium text-zinc-400`}>
          {props.oweThem ? "I owe them" : "They owe me"}
        </Text>
      </View>

      <Toggle isActive={props.oweThem} setIsActive={props.setOweThem} />
    </View>
  );
};
