import React, { FunctionComponent } from "react";
import { AreaTitle } from "./areaTitle";
import { Text, View, ViewStyle } from "react-native";
import { MoneyInputBox } from "./moneyInputBox";

interface OwnProps {
  style?: ViewStyle;
  oweThem: boolean;
  selectedUserIndices: number[];
}

type Props = OwnProps;

export const HowMuch: FunctionComponent<Props> = (props) => {
  const { style, oweThem, selectedUserIndices } = props;
  const title = `How much do ${oweThem ? "you" : "they"} owe ${
    oweThem ? "them" : "you"
  }? `;

  return (
    <View style={style} className={`flex flex-col space-y-2 px-4`}>
      <AreaTitle title={title} />
      <MoneyInputBox />
      {selectedUserIndices.length > 1 && (
        <View className={`rounded-md bg-orange-500/10 p-2`}>
          <Text className={`text-xs font-light tracking-wide text-orange-500`}>
            Multiple users have been selected, the amount will be split equally
            between them.
          </Text>
        </View>
      )}
    </View>
  );
};
