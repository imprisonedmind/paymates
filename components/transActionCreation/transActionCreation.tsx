import React, { FunctionComponent, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { UserImage } from "../userCard/userImage";
import { arr } from "../../data";

interface OwnProps {}

type Props = OwnProps;

export const TransActionCreation: FunctionComponent<Props> = (props) => {
  const [selectedUserIndices, setSelectedUserIndices] = useState<number[]>([]);

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
    <>
      <View className={`flex gap-2 p-4 pr-0`}>
        <Text className={`text-zinc-400 text-lg font-medium`}>
          Select a mate or more
        </Text>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className={`flex flex-row`}
        >
          {arr.map((user, index) => {
            const isSelected = selectedUserIndices.includes(index);
            return (
              <TouchableOpacity
                onPress={() => toggleUserSelection(index)}
                className={`flex items-center justify-center`}
              >
                <UserImage
                  Uri={user.photoUrl}
                  circle={true}
                  isSelected={isSelected}
                />
                <Text className={`mt-1 text-zinc-500`}>{user.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};
