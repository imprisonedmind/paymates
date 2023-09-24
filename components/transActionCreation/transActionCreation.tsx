import React, { FunctionComponent, useState } from "react";
import { View } from "react-native";
import { PickYourPaymates } from "./pickYourPaymates";
import { WhoOwesWho } from "./whoOwesWho";
import { HowMuch } from "./howMuch";
import { LongRectangularButton } from "../buttons/longRectangularButton";
import { WhatWasIt } from "./whatWasIt";

interface OwnProps {}

type Props = OwnProps;

export const TransActionCreation: FunctionComponent<Props> = (props) => {
  const [selectedUserIndices, setSelectedUserIndices] = useState<number[]>([]);
  const [oweThem, setOweThem] = useState(false);

  return (
    <View className={`flex flex-col gap-4 pt-4 pb-8`}>
      <View>
        <PickYourPaymates
          selectedUserIndices={selectedUserIndices}
          setSelectedUserIndices={setSelectedUserIndices}
        />
      </View>
      <View className={`px-4`}>
        <WhoOwesWho oweThem={oweThem} setOweThem={setOweThem} />
      </View>
      <View className={`px-4`}>
        <WhatWasIt oweThem={oweThem} />
      </View>
      <View className={`px-4 mb-4`}>
        <HowMuch oweThem={oweThem} selectedUserIndices={selectedUserIndices} />
      </View>
      <View className={`px-4`}>
        <LongRectangularButton
          title={"Submit"}
          textColour={"text-zinc-300"}
          buttonColour={"bg-blue-600"}
        />
      </View>
    </View>
  );
};
