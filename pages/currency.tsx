import { FunctionComponent, useEffect } from "react";
import { Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

type CurrencyProps = RouteProp<
  {
    Currency: {
      backTitle: string;
    };
  },
  "Currency"
>;

export const Currency: FunctionComponent = () => {
  const route = useRoute<CurrencyProps>();
  const { backTitle } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: backTitle,
    });
  }, []);

  return (
    <View className={`h-full bg-zinc-950`}>
      <Text className={``}>Hello Currency</Text>
    </View>
  );
};
