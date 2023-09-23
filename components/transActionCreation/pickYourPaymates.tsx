import React, { FunctionComponent, useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { arr } from "../../data";
import { UserImage } from "../userCard/userImage";
import { AreaTitle } from "./areaTitle";

interface OwnProps {}

type Props = OwnProps;

export const PickYourPaymates: FunctionComponent<Props> = (props) => {
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
    <View className={`flex flex-col`}>
      <AreaTitle title={"Pick your Paymate(s) 🤝"} />

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className={`flex flex-row gap-2`}
      >
        {arr.map((user, index) => {
          const isSelected = selectedUserIndices.includes(index);
          return (
            <TouchableOpacity
              key={index}
              activeOpacity={0.5}
              onPress={() => toggleUserSelection(index)}
              className={`flex items-center justify-center`}
            >
              <UserImage
                Uri={user.photoUrl}
                circle={true}
                isSelected={isSelected}
              />
              <Text
                className={`
                  ${isSelected ? "text-blue-500" : "text-zinc-500"} mt-1 `}
              >
                {user.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};
