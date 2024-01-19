import { FunctionComponent } from "react";

import { View } from "react-native";

import { EditButtonArea } from "../components/settings/editButtonArea";
import { UserDetailArea } from "../components/settings/userDetailArea";
import { friendData } from "../data/friendData";

export const SettingsPage: FunctionComponent<{}> = () => {
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
