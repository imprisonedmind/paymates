import React, { FunctionComponent } from "react";

import { ScrollView, Text, View } from "react-native";

import { accountData } from "../../data/accountData";
import { UserImage } from "../userCard/userImage";
import { UserBankInformation } from "./userBankInformation";

interface OwnProps {
  user: {
    uid: string;
    name: string;
    photoUrl: string;
  };
}

type Props = OwnProps;

export const UserInformation: FunctionComponent<Props> = (props) => {
  const { user } = props;

  const accounts = accountData.filter((account) => account.owner === user.uid);

  return (
    <View className={`flex items-center space-y-4 pb-12 pt-4`}>
      <View className={`flex flex-col items-center space-y-1`}>
        <UserImage
          uri={user.photoUrl}
          circle={true}
          height={"h-24"}
          width={"w-24"}
        />
        <Text className={`text-lg text-zinc-400`}>{user.name} </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className={`flex flex-row space-x-4 px-4`}
      >
        {accounts.map((card) => {
          return (
            <UserBankInformation
              key={card.bank}
              uri={card.logo}
              bank={card.bank}
              branchCode={card.branchCode}
              accountName={card.accountName}
              accountNumber={card.accountNumber}
            />
          );
        })}
        <View className={`w-4`}></View>
      </ScrollView>
    </View>
  );
};
