import { FunctionComponent, useEffect } from "react";
import { Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

type DetailsProps = RouteProp<
  {
    Details: {
      backTitle: string;
    };
  },
  "Details"
>;

export const Details: FunctionComponent = () => {
  const route = useRoute<DetailsProps>();
  const { backTitle } = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: backTitle,
    });
  }, []);

  return (
    <View className={`h-full bg-zinc-950`}>
      <Text className={``}>Hello Details</Text>
    </View>
  );
};
