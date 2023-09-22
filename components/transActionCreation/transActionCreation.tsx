import React, { FunctionComponent, useState } from "react";
import { Text, TextInput, View } from "react-native";
import { PickYourPaymates } from "./pickYourPaymates";
import { Toggle } from "../toggle/toggle";
import { WhoOwesWho } from "./whoOwesWho";
import { AreaTitle } from "./areaTitle";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

interface OwnProps {}

type Props = OwnProps;

export const TransActionCreation: FunctionComponent<Props> = (props) => {
  return (
    <View className={`flex flex-col p-4 pr-0 gap-8 pb-8`}>
      <View>
        <PickYourPaymates />
      </View>
      <View>
        <WhoOwesWho />
      </View>
      <View className={`pr-4`}>
        <AreaTitle title={"How much do they owe you? 🤑"} />
        <BottomSheetTextInput
          style={{
            backgroundColor: "#09090b",
            padding: 12,
            borderRadius: 8,
            color: "#a1a1aa",
          }}
          inputMode={"text"}
          placeholder={"Enter an amount"}
          placeholderTextColor={"#27272a"}
          onSubmitEditing={() => {
            console.log("test");
          }}
        />
      </View>
    </View>
  );
};
