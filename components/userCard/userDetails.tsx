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
    <View className={`flex flex-col `}>
      <Text className={`text-zinc-400 text-lg font-medium`}>{props.name}</Text>
      <Text className={`text-zinc-400 text-md`}>
        {props.isPos ? `You bought ${props.name}  ` : "Bought You "}
        {props.recentCategory}
      </Text>
    </View>
  );
};
