import React, { FunctionComponent } from "react";
import { Switch } from "react-native";

interface OwnProps {
  isActive: boolean;
  setIsActive: (value) => void;
}

type Props = OwnProps;

export const Toggle: FunctionComponent<Props> = (props) => {
  const { isActive, setIsActive } = props;

  return (
    <Switch
      value={isActive}
      onChange={() => setIsActive(!isActive)}
      trackColor={{ false: "#27272a", true: "#22c55e" }}
      thumbColor={isActive ? "#f4f4f5" : "#52525b"}
    />
  );
};
