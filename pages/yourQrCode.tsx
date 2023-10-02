import { FunctionComponent } from "react";
import { Alert, Share, View, ViewStyle } from "react-native";
import QRCode from "react-qr-code";
import { LongRectangularButton } from "../components/buttons/longRectangularButton";

interface OwnProps {
  style: ViewStyle;
}

type Props = OwnProps;

export const YourQrCode: FunctionComponent<Props> = (props) => {
  const { style } = props;

  // TODO: Pass a real qr code here
  const value = "288fb0b8-5b07-11ee-8c99-0242ac120002";

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: value,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };

  return (
    <View
      style={style}
      className={`flex h-full flex-col items-center space-y-12 bg-zinc-950 pt-12`}
    >
      <View
        className={`flex h-fit w-min rounded-xl border border-zinc-800 bg-zinc-900 p-4`}
      >
        <QRCode
          style={{ height: "100%", maxWidth: "100%", width: "100%" }}
          value={value}
          bgColor={"#18181b"}
          fgColor={"#a1a1aa"}
        />
      </View>

      <LongRectangularButton title={"Copy your userID"} callBackFn={onShare} />
    </View>
  );
};
