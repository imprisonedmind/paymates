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
    <View className={`h-full flex flex-col justify-center`}>
      <Text className={`text-zinc-400 text-lg`}>{props.name}</Text>
      <Text className={`text-zinc-400 text-md font-light tracking-wide`}>
        {props.isPos ? `You got them ` : "Got You "}
        {props.recentCategory}
      </Text>
    </View>
  );
};
