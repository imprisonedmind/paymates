import { FunctionComponent } from "react";
import { Text, TextInput, View, ViewStyle } from "react-native";

interface OwnProps {
  style?: ViewStyle;
  title: string;
  value: string;
  callback: (v) => void;
}

type Props = OwnProps;

export const CustomTextInput: FunctionComponent<Props> = (props) => {
  const { style, value, title, callback } = props;

  return (
    <View style={style} className={`flex flex-col space-y-2`}>
      <Text className={`text-zinc-400`}>{title}</Text>
      <View className={`rounded-xl bg-zinc-900 p-2 pb-4`}>
        <TextInput
          value={value}
          onChangeText={callback}
          className={"text-xl text-zinc-400"}
        />
      </View>
    </View>
  );
};
