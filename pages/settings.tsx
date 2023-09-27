import { View } from "react-native";
import { FC } from "react";
import { friendData } from "../lib/data/friendData";
import { UserDetailArea } from "../components/settings/userDetailArea";
import { EditButtonArea } from "../components/settings/editButtonArea";

export const SettingsPage: FC<{}> = () => {
  const user = friendData.find(
    (friend) => friend.uid === "288fb0b8-5b07-11ee-8c99-0242ac120002",
  );

  return (
    <View className={`flex flex-col space-y-4 bg-zinc-950 pt-12`}>
      <UserDetailArea photoUrl={user.photoUrl} name={user.name} />
      <EditButtonArea />
    </View>
  );
};
