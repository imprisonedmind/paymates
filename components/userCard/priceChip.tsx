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
          mr-2 p-1 px-2 rounded-l-md
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
          text-md font-medium tracking-wider pr-2
        `}
      >
        {props.recentTransaction}
      </Text>
    </View>
  );
};
