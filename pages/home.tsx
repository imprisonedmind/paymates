import { Animated, SafeAreaView, View } from "react-native";
import React, { useEffect } from "react";
import { UserCard } from "../components/userCard/userCard";
import { useBottomSheetContext } from "../lib/context/bottomSheetContext";
import { TransActionCreation } from "../components/transActionCreation/transActionCreation";
import { friendData } from "../lib/data/friendData";
import { transActionData } from "../lib/data/transActionData";
import ScrollView = Animated.ScrollView;

export const HomePage: React.FunctionComponent = () => {
  const { setBottomSheetChildren } = useBottomSheetContext();

  useEffect(() => {
    setBottomSheetChildren(<TransActionCreation />);
  }, []);

  return (
    <View className={`flex h-full flex-col bg-zinc-950`}>
      <SafeAreaView />
      <ScrollView className={`flex-1 flex-col gap-4 px-2`}>
        {friendData.map((user, index) => {
          const transActionUID = user.recentTransaction;
          const transAction = transActionData.find(
            (t) => t.uid === transActionUID,
          );
          const isPos = transAction.amount[0] > 0;
          return (
            <View className={`flex h-fit`}>
              <UserCard
                key={index}
                index={index}
                user={user}
                transAction={transAction}
                isPos={isPos}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
