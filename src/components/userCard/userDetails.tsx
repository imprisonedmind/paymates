import React, { FunctionComponent } from "react";
import { Text, View, ViewStyle } from "react-native";

interface OwnProps {
  style?: ViewStyle;
  name: string;
  isPos: boolean;
  recentCategory: string;
}

type Props = OwnProps;

export const UserDetails: FunctionComponent<Props> = (props) => {
  const { style, name, isPos, recentCategory } = props;

  return (
    <View style={style} className={`flex h-full flex-col justify-center`}>
      <Text className={`text-lg text-zinc-400`}>{name}</Text>
      <Text className={`text-md font-light tracking-wide text-zinc-400`}>
        {isPos ? `You got them ` : "Got You "}
        {recentCategory}
      </Text>
    </View>
  );
};
