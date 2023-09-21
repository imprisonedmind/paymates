import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { PickYourPaymates } from "./pickYourPaymates";

interface OwnProps {}

type Props = OwnProps;

export const TransActionCreation: FunctionComponent<Props> = (props) => {
  return (
    <View className={`flex flex-col p-4 pr-0`}>
      <PickYourPaymates />
    </View>
  );
};
