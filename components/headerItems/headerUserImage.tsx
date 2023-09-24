import React, { FunctionComponent } from "react";
import { friendData } from "../../lib/data/friendData";
import { View } from "react-native";
import { UserImage } from "../userCard/userImage";

interface OwnProps {
  UID: string;
}

type Props = OwnProps;

export const HeaderUserImage: FunctionComponent<Props> = (props) => {
  const user = friendData.find((user) => user.uid === props.UID);

  return (
    <View className={`flex h-11 w-min items-end justify-center`}>
      <UserImage
        Uri={user.photoUrl}
        circle={true}
        height={"h-10"}
        width={"w-10"}
      />
    </View>
  );
};
