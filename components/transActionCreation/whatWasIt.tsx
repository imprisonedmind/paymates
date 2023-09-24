import React, { FunctionComponent, useState } from "react";
import { AreaTitle } from "./areaTitle";
import { Text, View } from "react-native";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { iconData } from "../../lib/iconData";

interface OwnProps {}

type Props = OwnProps;

export const WhatWasIt: FunctionComponent<Props> = (props) => {
  const [icon, setIcon] = useState<string>("?");

  const handleChange = (text) => {
    let currentText = text.toLowerCase().replace(" ", "");
    setIcon(iconData[currentText] || "?");
  };

  return (
    <View className={`flex flex-col gap-2`}>
      <View>
        <AreaTitle title={"What did you get them?"} />
      </View>
      <View
        className={`flex rounded-md overflow-hidden border border-zinc-800`}
      >
        <View
          className={` 
            absolute top-0 h-full w-10 bg-zinc-800 z-50 flex items-center justify-center
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
            console.log("test");
          }}
        />
      </View>
    </View>
  );
};
