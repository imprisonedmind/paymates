import React, { FunctionComponent, useState } from "react";
import { Text, View } from "react-native";
import { PickYourPaymates } from "./pickYourPaymates";
import { Toggle } from "../toggle/toggle";
import { WhoOwesWho } from "./whoOwesWho";

interface OwnProps {}

type Props = OwnProps;

export const TransActionCreation: FunctionComponent<Props> = (props) => {
  return (
    <View className={`flex flex-col p-4 pr-0`}>
      <PickYourPaymates />
      <WhoOwesWho />
    </View>
  );
};
