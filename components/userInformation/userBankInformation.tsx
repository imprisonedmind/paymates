import React, { FunctionComponent } from "react";
import { Image, Text, View } from "react-native";
import { cardColorData } from "../../lib/data/cardColorData";

interface OwnProps {
  uri: string;
  bank: string;
  branchCode: number;
  accountName: string;
  accountNumber: number;
}

type Props = OwnProps;

export const UserBankInformation: FunctionComponent<Props> = (props) => {
  const color = cardColorData.find(
    (colorData) => colorData.bank === props.bank.toLowerCase().replace(" ", ""),
  );

  console.log(color);

  return (
    <View
      style={{
        backgroundColor: color?.bgColor ?? "#3f3f46",
        borderColor: color?.borderColor ?? "#52525b",
      }}
      className={`
        mr-4 mt-4 flex w-[250] rounded-2xl border p-4
      `}
    >
      <View className={`flex flex-row items-center justify-between`}>
        <Image
          source={{ uri: props.uri }}
          className={`object-c flex h-10 w-10 rounded-full bg-zinc-100`}
        />
        <View className={`items-end`}>
          <Text>{props.bank}</Text>
          <Text>{props.branchCode}</Text>
        </View>
      </View>
      <Text className={`mt-4 text-sm`}>{props.accountName}</Text>
      <Text className={`text-xl tracking-widest`}>{props.accountNumber}</Text>
    </View>
  );
};
