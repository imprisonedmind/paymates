import React, { FunctionComponent, useState } from "react";
import { AreaTitle } from "./areaTitle";
import { Text, View } from "react-native";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";
import { iconData } from "../../lib/data/iconData";

interface OwnProps {
  oweThem: boolean;
}

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
        <AreaTitle
          title={`What did ${props.oweThem ? "they" : "you"} get ${
            props.oweThem ? "you" : "them"
          }?`}
        />
      </View>
      <View
        className={`flex overflow-hidden rounded-md border border-zinc-800`}
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
            console.log("test");
          }}
        />
      </View>
    </View>
  );
};
