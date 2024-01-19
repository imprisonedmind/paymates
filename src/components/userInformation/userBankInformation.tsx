import React, { FunctionComponent } from "react";

import { Image, Text, View, ViewStyle } from "react-native";

import { cardColorData } from "../../data/cardColorData";

interface OwnProps {
  style?: ViewStyle;
  width?: string;
  uri: string;
  bank: string;
  branchCode: string;
  accountName: string;
  accountNumber: string;
}

type Props = OwnProps;

export const UserBankInformation: FunctionComponent<Props> = (props) => {
  const { style, width, uri, bank, branchCode, accountName, accountNumber } =
    props;

  const color = cardColorData.find(
    (colorData) => colorData.bank === bank.toLowerCase().replace(" ", ""),
  );

  return (
    <View
      //Tailwind colors are not in memory,  so we need to use hash values
      style={[
        style,
        {
          backgroundColor: color?.bgColor ?? "#3f3f46",
          borderColor: color?.borderColor ?? "#52525b",
        },
      ]}
      className={`
      ${width ?? "w-[250]"}
        flex space-y-4 rounded-2xl border p-4
      `}
    >
      <View className={`flex flex-row items-center justify-between`}>
        <Image
          source={{ uri: uri }}
          className={`flex h-10 w-10 rounded-full bg-zinc-100`}
        />
        <View className={`items-end`}>
          <Text>{bank}</Text>
          <Text>{branchCode}</Text>
        </View>
      </View>
      <View>
        <Text className={`text-sm`}>{accountName}</Text>
        <Text className={`text-xl tracking-widest`}>{accountNumber}</Text>
      </View>
    </View>
  );
};
