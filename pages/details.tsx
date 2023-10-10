import { FunctionComponent, useEffect, useState } from "react";
import { View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { friendData } from "../lib/data/friendData";
import { UserImage } from "../components/userCard/userImage";
import { LongRectangularButton } from "../components/buttons/longRectangularButton";
import { CustomTextInput } from "../components/input/textInput";

type DetailsProps = RouteProp<
  {
    Details: {
      backTitle: string;
    };
  },
  "Details"
>;

export const Details: FunctionComponent = () => {
  const route = useRoute<DetailsProps>();
  const { backTitle } = route.params;
  const navigation = useNavigation();

  const details = friendData.find(
    (friend) => friend.uid === "288fb0b8-5b07-11ee-8c99-0242ac120002",
  );

  const [name, setName] = useState(details.name);
  const [email, setEmail] = useState(details.email);

  useEffect(() => {
    navigation.setOptions({
      headerBackTitle: backTitle,
    });
  }, []);

  return (
    <View className={`flex h-full flex-col space-y-8 bg-zinc-950 p-2 pt-8`}>
      <View className={`space-y-4`}>
        <View className={`mx-auto`}>
          <UserImage
            uri={details.photoUrl}
            height={"h-24"}
            width={"w-24"}
            circle={true}
          />
        </View>
        <CustomTextInput
          title={"Your Name"}
          value={name}
          callback={(v) => setName(v)}
        />
        <CustomTextInput
          title={"Your Email"}
          value={email}
          callback={(v) => setEmail(v)}
        />
      </View>
      <LongRectangularButton
        title={"Save"}
        buttonColour={"bg-blue-600"}
        textColour={"text-zinc-300"}
      />
    </View>
  );
};
