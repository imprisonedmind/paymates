import React, { FunctionComponent } from "react";
import { Text, View, ViewStyle } from "react-native";

interface OwnProps {
  style?: ViewStyle;
  title: string;
}

type Props = OwnProps;

export const AreaTitle: FunctionComponent<Props> = (props) => {
  const { style, title } = props;

  return (
    <Text style={style} className={`text-md font-medium text-zinc-400`}>
      {title}
    </Text>
  );
};
