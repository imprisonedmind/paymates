import React, { FunctionComponent, useState } from "react";

import { View, ViewStyle } from "react-native";

import { iconData } from "../../data/iconData";
import { AreaTitle } from "./areaTitle";
import { WhatWasItInputBox } from "./whatWasItInputBox";

interface OwnProps {
  style?: ViewStyle;
  oweThem: boolean;
}

type Props = OwnProps;

export const WhatWasIt: FunctionComponent<Props> = (props) => {
  const { style, oweThem } = props;

  const [icon, setIcon] = useState<string>("?");

  const handleChange = (text) => {
    let currentText = text.toLowerCase().replace(" ", "");
    setIcon(iconData[currentText] || "?");
  };

  const title = `What did ${oweThem ? "they" : "you"} get ${
    oweThem ? "you" : "them"
  }?`;

  return (
    <View style={style} className={`flex flex-col space-y-2 px-4`}>
      <AreaTitle title={title} />
      <WhatWasItInputBox icon={icon} handleChange={handleChange} />
    </View>
  );
};
