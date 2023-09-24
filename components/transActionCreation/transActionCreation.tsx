import React, { FunctionComponent, useState } from "react";
import { View } from "react-native";
import { PickYourPaymates } from "./pickYourPaymates";
import { WhoOwesWho } from "./whoOwesWho";
import { HowMuch } from "./howMuch";

interface OwnProps {}

type Props = OwnProps;

export const TransActionCreation: FunctionComponent<Props> = (props) => {
  const [oweThem, setOweThem] = useState(false);

  return (
    <View className={`flex flex-col p-4 pr-0 gap-8 pb-8`}>
      <View>
        <PickYourPaymates />
      </View>
      <View className={`pr-4`}>
        <WhoOwesWho oweThem={oweThem} setOweThem={setOweThem} />
      </View>
      <View className={`pr-4`}>
        <HowMuch oweThem={oweThem} />
      </View>
    </View>
  );
};
