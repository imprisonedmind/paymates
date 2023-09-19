import {
  Animated,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import ScrollView = Animated.ScrollView;

export const HomePage: React.FC<{}> = () => {
  const arr = [
    {
      name: "Justin",
      photoUrl:
        "https://images.hola.com/us/images/0266-1197a831fb20-d4b3b80e6ea4-1000/square-800/apple-memoji.jpg",
      recentCategory: "🌭",
      recentTransaction: 65,
    },
    {
      name: "Zac",
      photoUrl:
        "https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_421,h_421/https://rodrigovarejao.com/wp-content/uploads/2020/03/e1b15bb6c52837a140a593a99a3c3066-sticker.png",
      recentCategory: "🍺",
      recentTransaction: -55,
    },
    {
      name: "Amy",
      photoUrl:
        "https://sites.uci.edu/sbass/files/2022/05/0C4433B0-E175-4827-BCF5-B2A2077B90DD-400x400.png",
      recentCategory: "🌿",
      recentTransaction: 200,
    },
    {
      name: "James",
      photoUrl:
        "https://forums.macrumors.com/attachments/67fb2b05-cbec-4a5b-9aa0-146d642f1b4d-png.1774138/",
      recentCategory: "❄️",
      recentTransaction: -800,
    },
    {
      name: "Jade",
      photoUrl: "https://pbs.twimg.com/media/EE7wKuQU4AAprWP.png",
      recentCategory: "🎟️",
      recentTransaction: -145,
    },
  ];

  return (
    <View className={`flex flex-col bg-zinc-950 h-full`}>
      <SafeAreaView />
      <ScrollView className={`flex flex-col gap-4 p-4 `}>
        {arr.map((user, index) => {
          const isPos = user.recentTransaction > 0;
          return (
            <TouchableOpacity
              key={index}
              className={`
            bg-zinc-900 p-2 pr-3 rounded-3xl border border-zinc-700
          `}
            >
              <View
                className={`flex flex-row items-center w-max justify-between`}
              >
                <View className={`flex flex-row gap-4 items-center`}>
                  <View
                    className={`
                      flex bg-zinc-950 h-14 w-14 rounded-2xl border border-zinc-700 
                      overflow-hidden
                    `}
                  >
                    <Image
                      source={{ uri: user.photoUrl }}
                      className={`h-full w-full object-cover overflow-hidden `}
                    />
                  </View>

                  <View className={`flex flex-col `}>
                    <Text className={`text-zinc-400 text-lg font-medium`}>
                      {user.name}
                    </Text>
                    <Text className={`text-zinc-400 text-md`}>
                      {isPos ? `You bought ${user.name}  ` : "Bought You "}
                      {user.recentCategory}
                    </Text>
                  </View>
                </View>
                <View
                  className={`
                  ${
                    isPos ? "bg-green-600/20" : "bg-red-600/20"
                  }  flex flex-row items-center rounded-md
                  `}
                >
                  <View
                    className={`${
                      isPos ? "bg-green-700/20" : "bg-red-700/20"
                    } mr-2 p-1 px-2 rounded-l-md`}
                  >
                    <Text
                      className={`${
                        isPos ? "text-green-500" : "text-red-500"
                      } text-md`}
                    >
                      R
                    </Text>
                  </View>
                  <Text
                    className={`
                    ${
                      isPos ? "text-green-500" : "text-red-500"
                    } text-md font-medium tracking-wider pr-2`}
                  >
                    {user.recentTransaction}
                  </Text>
                </View>
                {/*<TouchableOpacity>*/}
                {/*  <MaterialIcons*/}
                {/*    name="arrow-right"*/}
                {/*    size={24}*/}
                {/*    color={"#52525b"}*/}
                {/*  />*/}
                {/*</TouchableOpacity>*/}
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
