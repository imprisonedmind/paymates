import React, { FunctionComponent } from "react";
import { Text } from "react-native";

interface OwnProps {
  title: string;
}

type Props = OwnProps;

export const AreaTitle: FunctionComponent<Props> = (props) => {
  return (
    <Text className={`text-zinc-400 text-md font-medium mb-4`}>
      {props.title}
    </Text>
  );
};
