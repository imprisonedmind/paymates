import React, { FunctionComponent } from "react";
import { Text } from "react-native";

interface OwnProps {
  title: string;
}

type Props = OwnProps;

export const AreaTitle: FunctionComponent<Props> = (props) => {
  return (
    <Text className={`text-md font-medium text-zinc-400`}>{props.title}</Text>
  );
};
