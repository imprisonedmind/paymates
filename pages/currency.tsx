import { FunctionComponent, useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { friendData } from "../lib/data/friendData";
import { commonCurrency } from "../lib/data/commonCurrency";
import { CurrencyFlag } from "../components/currency/currencyFlag";

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

  const myData = friendData.find(
    (object) => object.uid === "288fb0b8-5b07-11ee-8c99-0242ac120002",
  );

  const currencyData = Object.values(commonCurrency);
  const myCurrencyData = currencyData.find(
    (object) => object.code === myData.currency,
  );
  const myCurrencyCode = myCurrencyData.code;

  const [currentCurrency, setCurrentCurrency] = useState(myCurrencyData);

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: backTitle,
    });
  }, []);

  return (
    <View className={`flex h-full items-center space-y-4 bg-zinc-950 p-2 pt-4`}>
      <View
        className={`flex w-fit flex-row space-x-4 rounded-xl bg-zinc-900 p-2`}
      >
        <CurrencyFlag
          currency={currentCurrency.code}
          height={"h-20"}
          width={"w-20"}
        />
        <View className={`flex flex-col items-end justify-center`}>
          <Text className={`text-[45px] font-bold text-zinc-400`}>
            {currentCurrency.code}
          </Text>
          <Text className={`text-zinc-400`}>{currentCurrency.name}</Text>
        </View>
      </View>

      <ScrollView className={"flex w-full flex-col space-y-4"}>
        {currencyData.map((currency) => {
          return (
            <TouchableOpacity
              key={currency.code}
              activeOpacity={0.8}
              onPress={() => setCurrentCurrency(currency)}
            >
              <View
                className={`
                flex flex-row items-center justify-between space-x-4 rounded-lg
                bg-zinc-900 p-2
              `}
              >
                <View className={`flex flex-row items-center space-x-2`}>
                  <CurrencyFlag currency={currency.code} />
                  <Text className={`font-bold text-zinc-400`}>
                    {currency.code}
                  </Text>
                </View>

                <Text className={`mr-auto flex text-zinc-400`}>
                  {currency.name}
                </Text>

                <View className={`flex rounded-md bg-zinc-800 p-1`}>
                  <Text className={`text-zinc-400`}>
                    {currency.symbol_native}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
