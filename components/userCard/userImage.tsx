import React, { FunctionComponent } from "react";
import { Image, View, ViewStyle } from "react-native";

interface OwnProps {
  style?: ViewStyle;
  uri: string;
  height?: string;
  width?: string;
  circle?: boolean;
  isSelected?: boolean;
}

type Props = OwnProps;
export const UserImage: FunctionComponent<Props> = (props) => {
  const { style, uri, height, width, circle, isSelected } = props;

  return (
    <View
      style={style}
      className={` 
        ${height ?? "h-14"}
        ${width ?? "w-14"}
        ${circle ? "rounded-full" : "rounded-2xl"}
        ${isSelected ? "border-blue-600" : "border-zinc-800 "}
      }
        relative flex overflow-hidden border bg-zinc-950
      `}
    >
      <Image
        source={{ uri: uri }}
        className={`h-full w-full overflow-hidden object-cover `}
      />
    </View>
  );
};
