import React, { FunctionComponent } from "react";
import { friendData } from "../../lib/data/friendData";
import { TouchableOpacity } from "react-native";
import { UserImage } from "../userCard/userImage";
import { useBottomSheetContext } from "../../lib/context/bottomSheetContext";
import { UserInformation } from "../userInformation/userInformation";

interface OwnProps {
  UID: string;
}

type Props = OwnProps;

export const HeaderUserImage: FunctionComponent<Props> = (props) => {
  const { setIsOpen, setBottomSheetChildren } = useBottomSheetContext();
  const user = friendData.find((user) => user.uid === props.UID);

  const handlePress = () => {
    setIsOpen(true);
    // @ts-ignore TODO: Fix this type error
    setBottomSheetChildren(<UserInformation user={user} />);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.5}
      className={`flex h-11 w-min items-end justify-center`}
    >
      <UserImage
        Uri={user.photoUrl}
        circle={true}
        height={"h-10"}
        width={"w-10"}
      />
    </TouchableOpacity>
  );
};
