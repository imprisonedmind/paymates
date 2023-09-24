import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

interface OwnProps {
  name: string;
  isPos: boolean;
  recentCategory: string;
}

type Props = OwnProps;

export const UserDetails: FunctionComponent<Props> = (props) => {
  return (
    <View className={`flex h-full flex-col justify-center`}>
      <Text className={`text-lg text-zinc-400`}>{props.name}</Text>
      <Text className={`text-md font-light tracking-wide text-zinc-400`}>
        {props.isPos ? `You got them ` : "Got You "}
        {props.recentCategory}
      </Text>
    </View>
  );
};
