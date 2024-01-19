import React, { FunctionComponent } from "react";

import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from "react-native";

import { friendData } from "../../data/friendData";
import { UserImage } from "../userCard/userImage";
import { AreaTitle } from "./areaTitle";

interface OwnProps {
  style?: ViewStyle;
  selectedUserIndices: number[];
  setSelectedUserIndices: (v) => void;
}

type Props = OwnProps;

export const PickYourPaymates: FunctionComponent<Props> = (props) => {
  const { style, selectedUserIndices, setSelectedUserIndices } = props;

  const toggleUserSelection = (index: number) => {
    // Check if the index is already in the selectedUserIndices array
    const isSelected = selectedUserIndices.includes(index);

    if (isSelected) {
      // If the user is already selected, remove them from the array
      setSelectedUserIndices((prevSelectedUserIndices) =>
        prevSelectedUserIndices.filter((i) => i !== index),
      );
    } else {
      // If the user is not selected, add them to the array
      setSelectedUserIndices((prevSelectedUserIndices) => [
        ...prevSelectedUserIndices,
        index,
      ]);
    }
  };

  return (
    <View style={style} className={`flex flex-col space-y-4`}>
      <View className={`pl-4`}>
        <AreaTitle title={"Pick your Paymates"} />
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className={`flex flex-row space-x-2 pl-4`}
      >
        {friendData.map((user, index) => {
          const isSelected = selectedUserIndices.includes(index);
          if (user.uid === "288fb0b8-5b07-11ee-8c99-0242ac120002") return;
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.5}
              onPress={() => toggleUserSelection(index)}
            >
              <View className={`flex flex-col items-center space-y-1`}>
                <UserImage
                  uri={user.photoUrl}
                  circle={true}
                  isSelected={isSelected}
                />
                <Text
                  className={`
                  ${isSelected ? "text-blue-500" : "text-zinc-500"}`}
                >
                  {user.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <View className={`w-4`}></View>
      </ScrollView>
    </View>
  );
};
