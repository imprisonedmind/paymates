import React, { FunctionComponent, useEffect } from "react";
import { ScrollView, Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { HeaderUserImage } from "../components/headerItems/headerUserImage";
import { transActionData } from "../lib/data/transActionData";
import { PriceChip } from "../components/userCard/priceChip";
import { UserImage } from "../components/userCard/userImage";
import { friendData } from "../lib/data/friendData";
import { TransActionTimeAgo } from "../components/userCard/transActionTimeAgo";

// Define the type for the route prop specific to this screen
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
    // TODO: AGAIN! very strange flex behaviour here, cannot use gap!!
    <ScrollView className={`scroll-pb-64 bg-zinc-950 px-2 pt-2`}>
      {transActionHistory.map((transAction) => {
        const isPos = transAction.amount[0] > 0;
        const user = friendData.find(
          (friend) => friend.uid === transAction.from,
        );

        return (
          <View
            key={transAction.uid}
            className={`flex flex-row ${isPos && "ml-auto flex-row-reverse"}`}
          >
            <View className={isPos ? "ml-2" : "mr-2"}>
              <UserImage
                Uri={user.photoUrl}
                circle={true}
                height={"h-8"}
                width={"w-8"}
              />
            </View>
            <View
              key={transAction.uid}
              className={`
              ${
                isPos
                  ? "rounded-2xl rounded-tr-none"
                  : "rounded-2xl rounded-tl-none"
              }
               mt-3.5 flex h-fit w-4/6 justify-between border border-zinc-800 bg-zinc-900 p-2
            `}
            >
              <View
                className={`${
                  isPos ? "flex-row-reverse" : "flex-row"
                } flex h-min  items-start justify-between`}
              >
                <View className={`flex flex-row items-center gap-2`}>
                  <Text className={`text-xl`}>{transAction.icon}</Text>
                  <Text className={`text-lg text-zinc-400`}>
                    {transAction.title}
                  </Text>
                </View>

                <View
                  className={`${
                    isPos ? "items-start" : "items-end"
                  } flex flex-col gap-2`}
                >
                  <View>
                    <PriceChip
                      isPos={isPos}
                      recentTransaction={transAction.amount[0]}
                    />
                  </View>
                  <View>
                    <TransActionTimeAgo timeAgo={transAction.timeAgo} />
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};
