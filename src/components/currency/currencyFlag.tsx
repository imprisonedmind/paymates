import React, { FunctionComponent } from "react";

import { Image, View, ViewStyle } from "react-native";

import { currencyFlagData } from "../../data/currencyFlag";

interface OwnProps {
  style?: ViewStyle;
  currency: string;
  height?: string;
  width?: string;
}

type Props = OwnProps;

export const CurrencyFlag: FunctionComponent<Props> = (props) => {
  const { style, currency, height, width } = props;
  const img = currencyFlagData[currency];

  return (
    <View className={``} style={style}>
      <Image
        source={{ uri: img }}
        className={`${height ?? "h-8"} ${width ?? "w-8"} rounded-md`}
      />
    </View>
  );
};
