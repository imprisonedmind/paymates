import React, { FunctionComponent } from "react";
import { View, Text, ViewStyle } from "react-native";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

interface OwnProps {
  style?: ViewStyle;
  icon: string;
  handleChange: (v) => void;
}

type Props = OwnProps;

export const WhatWasItInputBox: FunctionComponent<Props> = (props) => {
  const { style, icon, handleChange } = props;

  return (
    <View
      style={style}
      className={`flex w-full overflow-hidden rounded-md border border-zinc-800`}
    >
      <View
        className={` 
            absolute top-0 z-50 flex h-full w-10 items-center justify-center bg-zinc-800
          `}
      >
        <Text className={`text-lg font-medium`}>{icon}</Text>
      </View>
      <BottomSheetTextInput
        style={{
          backgroundColor: "#09090b",
          padding: 12,
          paddingLeft: 50,
          color: "#a1a1aa",
          fontSize: 18,
        }}
        inputMode={"text"}
        returnKeyType={"done"}
        returnKeyLabel={"test"}
        placeholder={"Enter a name"}
        placeholderTextColor={"#27272a"}
        onChangeText={(v) => handleChange(v)}
        onSubmitEditing={() => {
          console.log("onsubmit");
        }}
      />
    </View>
  );
};
