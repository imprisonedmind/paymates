import React, { FunctionComponent } from "react";
import { Image, View } from "react-native";

interface OwnProps {
  Uri: string;
  circle?: boolean;
  isSelected?: boolean;
}

type Props = OwnProps;
export const UserImage: FunctionComponent<Props> = (props) => {
  return (
    // TODO: don't use mr-2 here
    <View
      className={` 
        ${props.circle ? "rounded-full" : "rounded-2xl"}
        ${props.isSelected ? "border-blue-600" : "border-zinc-700 "}
      }
        flex bg-zinc-950 h-14 w-14 border overflow-hidden relative mr-2
      `}
    >
      <Image
        source={{ uri: props.Uri }}
        className={`h-full w-full object-cover overflow-hidden `}
      />
    </View>
  );
};
