import React, { FunctionComponent } from "react";
import { Switch } from "react-native";

interface OwnProps {
  isActive: boolean;
  setIsActive: (value) => void;
}

type Props = OwnProps;

export const Toggle: FunctionComponent<Props> = (props) => {
  return (
    <Switch
      value={props.isActive}
      onChange={() => props.setIsActive(!props.isActive)}
      trackColor={{ false: "#27272a", true: "#22c55e" }}
      thumbColor={props.isActive ? "#f4f4f5" : "#52525b"}
    />
  );
};
