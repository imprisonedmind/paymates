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
        relative flex h-14 w-14 overflow-hidden border bg-zinc-950
      `}
    >
      <Image
        source={{ uri: props.Uri }}
        className={`h-full w-full overflow-hidden object-cover `}
      />
    </View>
  );
};
