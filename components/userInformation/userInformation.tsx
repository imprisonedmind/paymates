import React, { FunctionComponent } from "react";
import { ScrollView, View, Text } from "react-native";
import { UserImage } from "../userCard/userImage";
import { AreaTitle } from "../transActionCreation/areaTitle";
import { UserBankInformation } from "./userBankInformation";
import { accountData } from "../../lib/data/accountData";

interface OwnProps {
  user: {
    uid: string;
    name: string;
    photoUrl: string;
  };
}

type Props = OwnProps;

export const UserInformation: FunctionComponent<Props> = (props) => {
  const accounts = accountData.filter(
    (account) => account.owner === props.user.uid,
  );

  return (
    <View className={`flex items-center gap-8 pb-12 pt-4`}>
      <View className={`flex flex-col items-center gap-1`}>
        <View>
          <UserImage
            Uri={props.user.photoUrl}
            circle={true}
            height={"h-24"}
            width={"w-24"}
          />
        </View>
        <Text className={`text-lg text-zinc-400`}>{props.user.name} </Text>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className={`px-4`}
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
      </ScrollView>
    </View>
  );
};
