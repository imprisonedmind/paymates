import React, { FunctionComponent } from "react";
import { ScrollView, Text, View } from "react-native";
import { UserBankInformation } from "../userInformation/userBankInformation";
import { MaterialCommunityIcons, Octicons } from "@expo/vector-icons";
import { accountData } from "../../lib/data/accountData";

interface OwnProps {}

type Props = OwnProps;

export const yourAccounts: FunctionComponent<Props> = (props) => {
  const accounts = accountData.filter((account) => account.owner === user.uid);

  return (
    <View
      className={`
          mt-4 flex h-min w-full flex-col items-center justify-between overflow-hidden
          rounded-xl bg-zinc-800
        `}
    >
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className={`p-2`}
      >
        {accounts.map((account) => (
          <UserBankInformation
            uri={account.logo}
            bank={account.bank}
            branchCode={account.branchCode}
            accountName={account.accountName}
            accountNumber={account.accountNumber}
          />
        ))}
      </ScrollView>
      <View
        className={`
                mt-2 flex h-min w-full flex-row items-center justify-between 
                rounded-xl border-t border-t-zinc-700 bg-zinc-800
          `}
      >
        <View className={`p-2`}>
          <View className={`flex flex-row items-center gap-3`}>
            <View className={`rounded-md bg-blue-600 p-2`}>
              <MaterialCommunityIcons
                name={"badge-account"}
                size={24}
                style={{ color: "#f4f4f5" }}
              />
            </View>
            <View className={`flex flex-col justify-center`}>
              <Text className={`text-lg text-zinc-400`}>Your Accounts</Text>
              <Text className={`text-xs font-light text-zinc-400`}>
                Edit your accounts or add a
              </Text>
            </View>
          </View>
          <Octicons
            name={"chevron-right"}
            size={18}
            style={{ color: "#a1a1aa" }}
          />
        </View>
      </View>
    </View>
  );
};
