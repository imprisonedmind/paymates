import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { BottomSheetTextInput } from "@gorhom/bottom-sheet";

interface OwnProps {}

type Props = OwnProps;

export const MoneyInputBox: FunctionComponent<Props> = (props) => {
  return (
    <View className={`flex overflow-hidden rounded-md border border-zinc-800`}>
      <View
        className={` 
            absolute top-0 z-50 flex h-full w-10 items-center justify-center bg-zinc-800
          `}
      >
        <Text className={`text-lg font-medium`}>R</Text>
      </View>
      <BottomSheetTextInput
        style={{
          backgroundColor: "#09090b",
          padding: 12,
          paddingLeft: 50,
          color: "#a1a1aa",
          fontSize: 18,
        }}
        inputMode={"decimal"}
        returnKeyType={"done"}
        returnKeyLabel={"test"}
        placeholder={"Enter an amount"}
        placeholderTextColor={"#27272a"}
        onSubmitEditing={() => {
          console.log("on submit");
        }}
      />
    </View>
  );
};
