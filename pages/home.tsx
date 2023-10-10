import { ScrollView, View } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import React, { useRef, useState } from "react";
import { UserCard } from "../components/userCard/userCard";
import { friendData } from "../lib/data/friendData";
import { transActionData } from "../lib/data/transActionData";
import { useNavigation } from "@react-navigation/native";
import FabAddTransAction from "../components/buttons/fabAddTransAction";

export const HomePage: React.FunctionComponent = () => {
  const navigation = useNavigation<any>();

  const [scrollHeight, setScrollHeight] = useState(0);
  const scrollViewRef = useRef(null);

  const handleScroll = (event) => {
    setScrollHeight(event.nativeEvent.contentOffset.y);
  };

  return (
    <View className={`relative flex h-full w-full flex-col bg-zinc-950`}>
      <SafeAreaView />
      <FabAddTransAction show={scrollHeight < 10} />
      <ScrollView
        ref={scrollViewRef}
        onScrollEndDrag={handleScroll}
        onMomentumScrollEnd={handleScroll}
        className={`w-full flex-1 flex-col space-y-4 px-2`}
      >
        {friendData.map((user, index) => {
          if (user.uid == "288fb0b8-5b07-11ee-8c99-0242ac120002") return;
          const transActionUID = user.recentTransaction;
          const transAction = transActionData.find(
            (t) => t.uid === transActionUID,
          );
          const isPos = transAction.amount[0] > 0;
          return (
            <UserCard
              key={user.uid}
              user={user}
              transAction={transAction}
              isPos={isPos}
              navigate={() =>
                navigation.navigate("U2U", {
                  title: "test this",
                  backTitle: "Home",
                  userID: user.uid,
                })
              }
            />
          );
        })}
        <View className={`h-12`}></View>
      </ScrollView>
    </View>
  );
};
