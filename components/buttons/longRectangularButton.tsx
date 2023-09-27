import { Text, TouchableOpacity, ViewStyle } from "react-native";
import React from "react";

interface LongRectangularButton {
  style?: ViewStyle;
  title: string;
  callBackFn?: () => void;
  buttonColour?: string;
  textColour?: string;
}

export const LongRectangularButton: React.FC<LongRectangularButton> = ({
  style,
  title,
  buttonColour,
  textColour,
  callBackFn,
}) => {
  return (
    <TouchableOpacity
      onPress={callBackFn}
      style={style}
      className={`
				${buttonColour ?? "border-zinc-700 bg-zinc-800"}
				flex w-fit rounded-2xl border p-4
			`}
    >
      {/*<FontAwesomeIcon name={icon} size={30}/>*/}
      <Text
        className={`
        ${textColour ?? "text-zinc-400"} flex w-fit text-center text-lg
      `}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
