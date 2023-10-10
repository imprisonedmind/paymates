import React, { FunctionComponent, useEffect } from "react";
import { ScrollView, View } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { HeaderUserImage } from "../components/headerItems/headerUserImage";
import { transActionData } from "../lib/data/transActionData";
import { PriceChip } from "../components/userCard/priceChip";
import { UserImage } from "../components/userCard/userImage";
import { friendData } from "../lib/data/friendData";
import { TransActionCard } from "../components/transActions/transActionCards";

type UserToUserHistoryRouteProp = RouteProp<
  {
    U2U: {
      title: string;
      backTitle: string;
      userID: string;
    };
  },
  "U2U"
>;

export const UserToUserHistory: FunctionComponent = () => {
  const navigation = useNavigation();
  const route = useRoute<UserToUserHistoryRouteProp>();
  const { title, backTitle, userID } = route.params;

  const transActionHistory = transActionData.filter(
    (transactions) =>
      transactions.to.includes(userID) || transactions.from.includes(userID),
  );

  let total = 0;

  for (const transAction of transActionHistory) {
    if (transAction.hasOwnProperty("amount")) {
      total += transAction.amount[0];
    }
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <PriceChip
          isPos={total > 0}
          title={"Total"}
          recentTransaction={total}
        />
      ),
      headerBackTitle: backTitle,
      headerRight: () => <HeaderUserImage UID={userID} />,
    });
  }, []);

  return (
    <ScrollView className={`scroll-pb-64 bg-zinc-950 px-2 pt-2`}>
      {transActionHistory.map((transAction) => {
        const isPos = transAction.amount[0] > 0;
        const user = friendData.find(
          (friend) => friend.uid === transAction.from,
        );

        return (
          <View
            key={transAction.uid}
            className={`
              flex flex-row space-x-2 ${isPos && "flex-row-reverse"} 
            `}
          >
            <UserImage
              uri={user.photoUrl}
              circle={true}
              height={"h-8"}
              width={"w-8"}
            />
            <TransActionCard
              icon={transAction.icon}
              title={transAction.title}
              isPos={isPos}
              amount={transAction.amount[0]}
              timeAgo={transAction.timeAgo}
            />
          </View>
        );
      })}
      <View className={`h-12`}></View>
    </ScrollView>
  );
};
