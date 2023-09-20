import React, { FunctionComponent } from "react";
import { TouchableOpacity, View } from "react-native";
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
      className={`bg-zinc-900 p-2 pr-3 rounded-3xl border border-zinc-700 mb-4`}
    >
      <View className={`flex flex-row items-center w-max justify-between`}>
        <View className={`flex flex-row items-center`}>
          <UserImage Uri={props.user.photoUrl} />
          <UserDetails
            name={props.user.name}
            isPos={props.isPos}
            recentCategory={props.user.recentCategory}
          />
        </View>
        <PriceChip
          isPos={props.isPos}
          recentTransaction={props.user.recentTransaction}
        />
      </View>
    </TouchableOpacity>
  );
};
