import React, { FunctionComponent } from "react";
import { Image, View } from "react-native";

interface OwnProps {
  Uri: string;
}

type Props = OwnProps;
export const UserImage: FunctionComponent<Props> = (props) => {
  return (
    // TODO: don't use mr-2 here
    <View
      className={` 
        flex bg-zinc-950 h-14 w-14 rounded-2xl border border-zinc-700 overflow-hidden 
        relative mr-2
      `}
    >
      <Image
        source={{ uri: props.Uri }}
        className={`h-full w-full object-cover overflow-hidden `}
      />
    </View>
  );
};
