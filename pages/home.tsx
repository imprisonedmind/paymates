import { Animated, SafeAreaView, View } from "react-native";
import React, { useEffect } from "react";
import { UserCard } from "../components/userCard/userCard";
import { useBottomSheetContext } from "../lib/context/bottomSheetContext";
import { TransActionCreation } from "../components/transActionCreation/transActionCreation";
import { friendData } from "../lib/data/friendData";
import { transActionData } from "../lib/data/transActionData";
import { RouteProp, useNavigation } from "@react-navigation/native";
import ScrollView = Animated.ScrollView;
//
// type NavigationProp = <
//   {
//     U2U: {
//       title: string;
//       backTitle: string;
//       userID: string;
//     };
//   },
//   "U2U"
// >;

export const HomePage: React.FunctionComponent = () => {
  const { setBottomSheetChildren } = useBottomSheetContext();
  const navigation = useNavigation<any>();

  useEffect(() => {
    setBottomSheetChildren(<TransActionCreation />);
  }, []);

  return (
    <View className={`flex h-full flex-col bg-zinc-950`}>
      <SafeAreaView />
      <ScrollView className={`flex-1 flex-col gap-4 px-2`}>
        {friendData.map((user, index) => {
          if (user.uid == "288fb0b8-5b07-11ee-8c99-0242ac120002") return;
          const transActionUID = user.recentTransaction;
          const transAction = transActionData.find(
            (t) => t.uid === transActionUID,
          );
          const isPos = transAction.amount[0] > 0;
          return (
            <View key={index} className={`flex h-fit`}>
              <UserCard
                index={index}
                user={user}
                transAction={transAction}
                isPos={isPos}
                navigate={() => {
                  navigation.navigate("U2U", {
                    title: "test this",
                    backTitle: "back",
                    userID: user.uid,
                  });
                }}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
