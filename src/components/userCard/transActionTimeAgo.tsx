import React, { FunctionComponent } from "react";

import { Text, ViewStyle } from "react-native";

import { timeAgo } from "../../utilities";

interface OwnProps {
  style?: ViewStyle;
  msEpoch: number;
}

type Props = OwnProps;

export const TransActionTimeAgo: FunctionComponent<Props> = (props) => {
  const { style, msEpoch } = props;

  return (
    <Text
      style={style}
      className={`flex text-xs font-light tracking-wider text-zinc-400`}
    >
      {timeAgo(msEpoch)}
    </Text>
  );
};
