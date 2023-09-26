import React, { FunctionComponent } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Octicons } from "@expo/vector-icons";

interface OwnProps {
  icon: any;
  iconBgColor: any;
  title: string;
  description: string;
  callBackFn: () => void;
}

type Props = OwnProps;

export const EditYourDetails: FunctionComponent<Props> = (props) => {
  const { icon, iconBgColor, title, description, callBackFn } = props;

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={callBackFn}
      className={`
        flex h-min w-full flex-row items-center justify-between rounded-xl bg-zinc-800
        p-2 pr-4
      `}
    >
      <View className={`flex flex-row items-center gap-3`}>
        <View
          className={`${iconBgColor} flex w-10 items-center rounded-md p-2`}
        >
          {icon}
        </View>
        <View className={`flex flex-col justify-center`}>
          <Text className={`text-lg text-zinc-400`}>{title}</Text>
          <Text className={`text-xs font-light text-zinc-400`}>
            {description}
          </Text>
        </View>
      </View>
      <Octicons name={"chevron-right"} size={18} style={{ color: "#a1a1aa" }} />
    </TouchableOpacity>
  );
};
