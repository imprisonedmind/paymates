import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

interface OwnProps {
  isPos: boolean;
  recentTransaction: number;
}

type Props = OwnProps;

export const PriceChip: FunctionComponent<Props> = (props) => {
  return (
    <View
      className={`
        ${props.isPos ? "bg-green-600/20" : "bg-red-600/20"}  
         flex flex-row items-center rounded-md
      `}
    >
      <View
        className={`
          ${props.isPos ? "bg-green-700/20" : "bg-red-700/20"} 
          mr-2 rounded-l-md p-1 px-2
      `}
      >
        <Text
          className={`
            ${props.isPos ? "text-green-500" : "text-red-500"} 
            text-md
          `}
        >
          R
        </Text>
      </View>
      <Text
        className={`
          ${props.isPos ? "text-green-500" : "text-red-500"} 
          text-md pr-2 font-medium tracking-wider
        `}
      >
        {props.recentTransaction}
      </Text>
    </View>
  );
};
