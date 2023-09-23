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
    <View
      className={` 
        ${props.circle ? "rounded-full" : "rounded-2xl"}
        ${props.isSelected ? "border-blue-600" : "border-zinc-800 "}
      }
        flex bg-zinc-950 h-14 w-14 border overflow-hidden relative
      `}
    >
      <Image
        source={{ uri: props.Uri }}
        className={`h-full w-full object-cover overflow-hidden `}
      />
    </View>
  );
};
