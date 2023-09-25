import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";
import { Octicons } from "@expo/vector-icons";

interface OwnProps {
  icon: any;
  iconBgColor: any;
  title: string;
  description: string;
}

type Props = OwnProps;

export const EditYourDetails: FunctionComponent<Props> = (props) => {
  return (
    <View
      className={`
        flex h-min w-full flex-row items-center justify-between rounded-xl bg-zinc-800
        p-2 pr-4
      `}
    >
      <View className={`flex flex-row items-center gap-3`}>
        <View
          className={`${props.iconBgColor} flex w-10 items-center rounded-md p-2`}
        >
          {props.icon}
        </View>
        <View className={`flex flex-col justify-center`}>
          <Text className={`text-lg text-zinc-400`}>{props.title}</Text>
          <Text className={`text-xs font-light text-zinc-400`}>
            {props.description}
          </Text>
        </View>
      </View>
      <Octicons name={"chevron-right"} size={18} style={{ color: "#a1a1aa" }} />
    </View>
  );
};
