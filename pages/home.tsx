import { Animated, SafeAreaView, Text, View } from "react-native";
import React, { useEffect } from "react";
import { UserCard } from "../components/userCard/userCard";
import ScrollView = Animated.ScrollView;
import { arr } from "../data";
import { useBottomSheetContext } from "../lib/context/bottomSheetContext";

export const HomePage: React.FunctionComponent = () => {
  const { setBottomSheetChildren } = useBottomSheetContext();

  useEffect(() => {
    setBottomSheetChildren(<Text>Hello World!</Text>);
  }, []);

  return (
    <View className={`flex flex-col bg-zinc-950 h-full`}>
      <SafeAreaView />
      <ScrollView className={`flex-1 flex-col px-2`}>
        {arr.map((user, index) => {
          const isPos = user.recentTransaction > 0;
          return (
            <UserCard key={index} index={index} user={user} isPos={isPos} />
          );
        })}
      </ScrollView>
    </View>
  );
};
