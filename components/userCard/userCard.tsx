import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { UserImage } from "./userImage";
import { UserDetails } from "./userDetails";
import { PriceChip } from "./priceChip";

interface OwnProps {
  index: number;
  user: {
    name: string;
    photoUrl: string;
    recentCategory: string;
    recentTransaction: number;
  };
  isPos: boolean;
}

type Props = OwnProps;

export const UserCard: FunctionComponent<Props> = (props) => {
  return (
    <TouchableOpacity
      key={props.index}
      activeOpacity={0.8}
      className={`
        flex bg-zinc-900 p-2 pr-3 rounded-3xl border border-zinc-800 h-fit w-full
      `}
    >
      <View
        className={`
          flex flex-row items-center justify-between h-14 
        `}
      >
        <View className={`flex flex-row items-center gap-2 h-full`}>
          <View>
            <UserImage Uri={props.user.photoUrl} />
          </View>
          <View className={`h-full`}>
            <UserDetails
              name={props.user.name}
              isPos={props.isPos}
              recentCategory={props.user.recentCategory}
            />
          </View>
        </View>
        <View
          className={`
          flex flex-col h-full justify-center items-end gap-2
        `}
        >
          <View>
            <PriceChip
              isPos={props.isPos}
              recentTransaction={props.user.recentTransaction}
            />
          </View>
          <Text
            className={`flex text-zinc-400 text-xs font-light tracking-wider`}
          >
            {"4:12PM"}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
