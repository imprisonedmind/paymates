import React, { FunctionComponent } from "react";
import { ScrollView, View } from "react-native";
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
