import React, { useState } from "react";
import { View } from "react-native";
import { PickYourPaymates } from "./pickYourPaymates";
import { WhoOwesWho } from "./whoOwesWho";
import { HowMuch } from "./howMuch";
import { WhatWasIt } from "./whatWasIt";
import { LongRectangularButton } from "../buttons/longRectangularButton";

export default function TransActionCreation() {
  const [selectedUserIndices, setSelectedUserIndices] = useState<number[]>([]);
  const [oweThem, setOweThem] = useState(false);

  return (
    <View className={`flex flex-col space-y-4 pb-8 `}>
      <PickYourPaymates
        selectedUserIndices={selectedUserIndices}
        setSelectedUserIndices={setSelectedUserIndices}
      />
      <WhoOwesWho oweThem={oweThem} setOweThem={setOweThem} />
      <WhatWasIt oweThem={oweThem} />
      <HowMuch oweThem={oweThem} selectedUserIndices={selectedUserIndices} />
      <View className={`px-4 pt-4`}>
        <LongRectangularButton
          title={"Submit"}
          textColour={"text-zinc-300"}
          buttonColour={"bg-blue-600"}
        />
      </View>
    </View>
  );
}
