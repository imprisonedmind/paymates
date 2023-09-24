import React, { FunctionComponent } from "react";
import { Text } from "react-native";
import { timeAgo } from "../../lib/utilities";

interface OwnProps {
  timeAgo: number;
}

type Props = OwnProps;

export const TransActionTimeAgo: FunctionComponent<Props> = (props) => {
  return (
    <Text className={`flex text-xs font-light tracking-wider text-zinc-400`}>
      {timeAgo(props.timeAgo)}
    </Text>
  );
};
