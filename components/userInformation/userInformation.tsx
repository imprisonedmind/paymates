import React, { FunctionComponent } from "react";
import { ScrollView, View } from "react-native";
import { UserImage } from "../userCard/userImage";
import { AreaTitle } from "../transActionCreation/areaTitle";
import { UserBankInformation } from "./userBankInformation";
import { cardColorData } from "../../lib/data/cardColorData";

interface OwnProps {
  user: {
    name: string;
    photoUrl: string;
    accounts: {
      logo: any;
      bank: string;
      branchCode: number;
      accountNumber: number;
      accountName: string;
    }[];
  };
}

type Props = OwnProps;

export const UserInformation: FunctionComponent<Props> = (props) => {
  return (
    <View className={`flex items-center pb-12 pt-4`}>
      <View className={`flex flex-col items-center`}>
        <View className={`scale-125`}>
          <UserImage Uri={props.user.photoUrl} circle={true} />
        </View>
        <View className={`mt-4`}>
          <AreaTitle title={props.user.name} />
        </View>
      </View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className={`px-4`}
      >
        {props.user.accounts.map((card) => {
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
