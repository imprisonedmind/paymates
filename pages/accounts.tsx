import { FunctionComponent, useEffect } from "react";
import { ScrollView, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { accountData } from "../lib/data/accountData";
import { UserBankInformation } from "../components/userInformation/userBankInformation";

type AccountsProps = RouteProp<
  {
    Accounts: {
      backTitle: string;
    };
  },
  "Accounts"
>;

export const Accounts: FunctionComponent = () => {
  const route = useRoute<AccountsProps>();
  const { backTitle } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: backTitle,
    });
  }, []);

  const accs = accountData.filter(
    (data) => data.owner === "288fb0b8-5b07-11ee-8c99-0242ac120002",
  );

  return (
    <View className={`h-full bg-zinc-950 p-2 pt-4`}>
      <ScrollView
        contentContainerStyle={{ alignItems: "center" }}
        className={`flex flex-col space-y-4`}
      >
        {accs.map((acc) => {
          return (
            <UserBankInformation
              uri={acc.logo}
              bank={acc.bank}
              branchCode={acc.branchCode}
              accountName={acc.accountName}
              accountNumber={acc.accountNumber}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};
