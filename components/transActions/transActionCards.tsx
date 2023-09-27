import React, { FunctionComponent } from "react";
import { Text, View, ViewStyle } from "react-native";
import { PriceChip } from "../userCard/priceChip";
import { TransActionTimeAgo } from "../userCard/transActionTimeAgo";

interface OwnProps {
  style?: ViewStyle;
  isPos: boolean;
  icon: string;
  title: string;
  amount: number;
  timeAgo: number;
}

type Props = OwnProps;

export const TransActionCard: FunctionComponent<Props> = (props) => {
  const { style, isPos, icon, title, amount, timeAgo } = props;

  // TODO: line-27 has strange flex behaviour
  return (
    <View
      style={style}
      className={`
              ${
                isPos
                  ? "mr-2 rounded-2xl rounded-tr-none"
                  : "rounded-2xl rounded-tl-none"
              }
               mt-3.5 flex h-fit w-4/6 justify-between border border-zinc-800 bg-zinc-900 
               p-2
            `}
    >
      <View
        className={`${
          isPos ? "flex-row-reverse" : "flex-row"
        } flex h-min  items-start justify-between`}
      >
        <View className={`flex flex-row items-center space-x-2`}>
          <Text className={`text-xl`}>{icon}</Text>
          <Text className={`text-lg text-zinc-400`}>{title}</Text>
        </View>

        <View
          className={`${
            isPos ? "items-start" : "items-end"
          } flex flex-col gap-2`}
        >
          <PriceChip isPos={isPos} recentTransaction={amount} />
          <TransActionTimeAgo msEpoch={timeAgo} />
        </View>
      </View>
    </View>
  );
};
