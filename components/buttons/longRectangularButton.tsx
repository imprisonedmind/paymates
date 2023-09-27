import { Text, TouchableOpacity, View, ViewStyle } from "react-native";
import { FunctionComponent } from "react";

interface OwnProps {
  style?: ViewStyle;
  title: string;
  callBackFn?: () => void;
  buttonColour?: string;
  textColour?: string;
}

type Props = OwnProps;

export const LongRectangularButton: FunctionComponent<Props> = (props) => {
  const { style, title, buttonColour, textColour, callBackFn } = props;

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
