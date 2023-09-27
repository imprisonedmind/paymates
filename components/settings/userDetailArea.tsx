import React, { FunctionComponent } from "react";
import { Text, View, ViewStyle } from "react-native";
import { UserImage } from "../userCard/userImage";

interface OwnProps {
  style?: ViewStyle;
  photoUrl: string;
  name: string;
}

type Props = OwnProps;

export const UserDetailArea: FunctionComponent<Props> = (props) => {
  const { style, photoUrl, name } = props;

  return (
    <View style={style} className={`flex flex-col items-center gap-2`}>
      <UserImage
        uri={props.photoUrl}
        circle={true}
        height={"h-32"}
        width={"w-32"}
      />
      <View className={`flex flex-col items-center`}>
        <Text className={`text-lg text-zinc-400`}>{props.name} </Text>
        <Text className={`text-sm font-light tracking-widest text-zinc-400`}>
          test@gmail.com
        </Text>
      </View>
    </View>
  );
};
