import { Text, TouchableOpacity } from "react-native";
import React from "react";

interface LongRectangularButton {
  title: string;
  buttonColour?: string;
  textColour?: string;
}

export const LongRectangularButton: React.FC<LongRectangularButton> = ({
  title,
  buttonColour,
  textColour,
}) => {
  return (
    <TouchableOpacity
      className={`
				${buttonColour ?? "bg-zinc-800 border-zinc-700"}
				flex w-fit p-4 rounded-2xl mt-4 border
			`}
    >
      {/*<FontAwesomeIcon name={icon} size={30}/>*/}
      <Text
        className={`
        ${textColour ?? "text-zinc-400"} text-lg w-fit flex text-center
      `}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
