import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { UserImage } from "../userCard/userImage";

interface OwnProps {
  photoUrl: string;
  name: string;
}

type Props = OwnProps;

export const UserDetailArea: FunctionComponent<Props> = (props) => {
  return (
    <View className={`flex flex-col items-center gap-2`}>
      <View className={``}>
        <UserImage
          Uri={props.photoUrl}
          circle={true}
          height={"h-32"}
          width={"w-32"}
        />
      </View>
      <View className={`flex flex-col items-center`}>
        <Text className={`text-lg text-zinc-400`}>{props.name} </Text>
        <Text className={`text-sm font-light tracking-widest text-zinc-400`}>
          test@gmail.com
        </Text>
      </View>
    </View>
  );
};
