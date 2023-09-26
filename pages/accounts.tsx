import { FunctionComponent, useEffect } from "react";
import { Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

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

  return (
    <View className={`h-full bg-zinc-950`}>
      <Text className={``}>Hello Accounts</Text>
    </View>
  );
};
