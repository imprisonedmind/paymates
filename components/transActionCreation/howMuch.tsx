import React, { FunctionComponent } from "react";
import { AreaTitle } from "./areaTitle";
import { Text, View } from "react-native";
import { MoneyInputBox } from "./moneyInputBox";

interface OwnProps {
  oweThem: boolean;
  selectedUserIndices: number[];
}

type Props = OwnProps;

export const HowMuch: FunctionComponent<Props> = (props) => {
  return (
    <View className={`flex flex-col gap-2`}>
      <View>
        <AreaTitle
          title={`How much do ${props.oweThem ? "you" : "they"} owe ${
            props.oweThem ? "them" : "you"
          }? `}
        />
      </View>
      <View>
        <MoneyInputBox />
      </View>
      {props.selectedUserIndices.length > 1 && (
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
