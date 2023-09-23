import { Animated, SafeAreaView, Text, View } from "react-native";
import React, { useEffect } from "react";
import { UserCard } from "../components/userCard/userCard";
import ScrollView = Animated.ScrollView;
import { arr } from "../data";
import { useBottomSheetContext } from "../lib/context/bottomSheetContext";
import { TransActionCreation } from "../components/transActionCreation/transActionCreation";

export const HomePage: React.FunctionComponent = () => {
  const { setBottomSheetChildren } = useBottomSheetContext();

  useEffect(() => {
    setBottomSheetChildren(<TransActionCreation />);
  }, []);

  return (
    <View className={`flex flex-col bg-zinc-950 h-full`}>
      <SafeAreaView />
      <ScrollView className={`flex-1 flex-col px-2 gap-4`}>
        {arr.map((user, index) => {
          const isPos = user.recentTransaction > 0;
          return (
            <View className={`flex h-fit`}>
              <UserCard key={index} index={index} user={user} isPos={isPos} />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};
