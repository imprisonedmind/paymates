import { Animated, SafeAreaView, View } from "react-native";
import React from "react";
import { UserCard } from "../components/userCard/userCard";
import { friendData } from "../lib/data/friendData";
import { transActionData } from "../lib/data/transActionData";
import { useNavigation } from "@react-navigation/native";
import ScrollView = Animated.ScrollView;

export const HomePage: React.FunctionComponent = () => {
  const navigation = useNavigation<any>();

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
                    backTitle: "Home",
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
