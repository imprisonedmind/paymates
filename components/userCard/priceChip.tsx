import React, { FunctionComponent } from "react";
import { Text, View, ViewStyle } from "react-native";

interface OwnProps {
  style?: ViewStyle;
  isPos: boolean;
  title?: string;
  recentTransaction: number;
}

type Props = OwnProps;

export const PriceChip: FunctionComponent<Props> = (props) => {
  const { style, isPos, title, recentTransaction } = props;

  return (
    <View
      style={style}
      className={`
        ${isPos ? "bg-green-600/20" : "bg-red-600/20"}  
         flex flex-row items-center rounded-md
      `}
    >
      <View
        className={`
          ${isPos ? "bg-green-700/20" : "bg-red-700/20"} 
          mr-2 rounded-l-md p-1 px-2
      `}
      >
        <Text
          className={`
            ${isPos ? "text-green-500" : "text-red-500"} 
            text-md
          `}
        >
          {title || "R"}
        </Text>
      </View>
      <Text
        className={`
          ${isPos ? "text-green-500" : "text-red-500"} 
          text-md pr-2 font-medium tracking-wider
        `}
      >
        {recentTransaction}
      </Text>
    </View>
  );
};
