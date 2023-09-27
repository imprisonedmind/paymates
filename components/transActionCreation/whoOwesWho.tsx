import React, { FunctionComponent } from "react";
import { Text, View, ViewStyle } from "react-native";
import { Toggle } from "../toggle/toggle";

interface OwnProps {
  style?: ViewStyle;
  oweThem: boolean;
  setOweThem: (v) => void;
}

type Props = OwnProps;

export const WhoOwesWho: FunctionComponent<Props> = (props: OwnProps) => {
  const { style, oweThem, setOweThem } = props;

  return (
    <View style={style} className={`px-4`}>
      <View
        className={`
        flex w-full flex-row items-center justify-between rounded-md border border-zinc-800 
        bg-zinc-900 p-2 
      `}
      >
        <View className={`flex flex-row items-center gap-1`}>
          <Text className={`text-xl`}>{oweThem ? "😭" : "😃"}</Text>
          <Text className={`text-md font-medium text-zinc-400`}>
            {oweThem ? "I owe them" : "They owe me"}
          </Text>
        </View>

        <Toggle isActive={oweThem} setIsActive={setOweThem} />
      </View>
    </View>
  );
};
