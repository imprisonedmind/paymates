import React, { FunctionComponent } from "react";
import { TouchableOpacity, View, ViewStyle } from "react-native";
import { UserImage } from "./userImage";
import { UserDetails } from "./userDetails";
import { PriceChip } from "./priceChip";
import { TransActionTimeAgo } from "./transActionTimeAgo";

interface OwnProps {
  style?: ViewStyle;
  user: {
    name: string;
    photoUrl: string;
  };
  transAction: {
    icon: string;
    title: string;
    amount: number[];
    timeAgo: number;
  };
  isPos: boolean;
  navigate: () => void;
}

type Props = OwnProps;

export const UserCard: FunctionComponent<Props> = (props) => {
  const { style, user, transAction, isPos, navigate } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.navigate}
      style={style}
      className={`
        flex h-fit w-full rounded-3xl border border-zinc-800 bg-zinc-900 p-2 pr-3
      `}
    >
      <View
        className={`
          flex h-14 flex-row items-center justify-between 
        `}
      >
        <View className={`flex h-full flex-row items-center gap-2`}>
          <UserImage uri={user.photoUrl} />
          <UserDetails
            name={user.name}
            isPos={isPos}
            recentCategory={transAction.icon}
          />
        </View>
        <View className={`flex h-full flex-col items-end justify-center gap-2`}>
          <PriceChip isPos={isPos} recentTransaction={transAction.amount[0]} />
          <TransActionTimeAgo msEpoch={transAction.timeAgo} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
