import React, { FunctionComponent } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { UserImage } from "../userCard/userImage";
import { AreaTitle } from "./areaTitle";
import { friendData } from "../../lib/data/friendData";

interface OwnProps {
  selectedUserIndices: number[];
  setSelectedUserIndices: (v) => void;
}

type Props = OwnProps;

export const PickYourPaymates: FunctionComponent<Props> = (props) => {
  const toggleUserSelection = (index: number) => {
    // Check if the index is already in the selectedUserIndices array
    const isSelected = props.selectedUserIndices.includes(index);

    if (isSelected) {
      // If the user is already selected, remove them from the array
      props.setSelectedUserIndices((prevSelectedUserIndices) =>
        prevSelectedUserIndices.filter((i) => i !== index),
      );
    } else {
      // If the user is not selected, add them to the array
      props.setSelectedUserIndices((prevSelectedUserIndices) => [
        ...prevSelectedUserIndices,
        index,
      ]);
    }
  };

  return (
    <View className={`flex flex-col gap-2`}>
      <View className={`pl-4`}>
        <AreaTitle title={"Pick your Paymates"} />
      </View>

      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        className={`flex flex-row pl-4`}
      >
        {friendData.map((user, index) => {
          const isSelected = props.selectedUserIndices.includes(index);
          if (user.uid === "288fb0b8-5b07-11ee-8c99-0242ac120002") return;
          return (
            // TODO: I don't like using mr here!! **standard gap issue**
            <TouchableOpacity
              key={index}
              activeOpacity={0.5}
              onPress={() => toggleUserSelection(index)}
              className={`mr-3 flex items-center justify-center`}
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
