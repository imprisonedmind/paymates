import React, { FunctionComponent } from "react";
import { EditYourDetails } from "./editYourDetails";
import { View, ViewStyle } from "react-native";
import {
  AntDesign,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface OwnProps {
  style?: ViewStyle;
}

type Props = OwnProps;

export const EditButtonArea: FunctionComponent<Props> = (props) => {
  const { style } = props;

  const navigation = useNavigation();

  return (
    <View
      style={style}
      className={`
          h-full w-full rounded-3xl border border-zinc-800 bg-zinc-900 p-4
        `}
    >
      <View className={`flex flex-col space-y-4`}>
        <EditYourDetails
          icon={badge}
          iconBgColor={"bg-blue-600"}
          title={"Edit your Details"}
          description={"Edit your username, email, password, etc."}
          callBackFn={() =>
            // @ts-ignore
            navigation.navigate("Details", { backTitle: "Settings" })
          }
        />
        <EditYourDetails
          icon={currency}
          iconBgColor={"bg-orange-600"}
          title={"Currency"}
          description={"Change the currency of transactions."}
          callBackFn={() =>
            // @ts-ignore
            navigation.navigate("Currency", { backTitle: "Settings" })
          }
        />
        <EditYourDetails
          icon={card}
          iconBgColor={"bg-rose-600"}
          title={"Your Accounts"}
          description={"Edit your accounts or add a new one."}
          callBackFn={() =>
            // @ts-ignore
            navigation.navigate("Accounts", { backTitle: "Settings" })
          }
        />
        <EditYourDetails
          icon={qr}
          iconBgColor={"bg-lime-600"}
          title={"Your Qr Code"}
          description={"View or share your qr code."}
          callBackFn={() =>
            // @ts-ignore
            navigation.navigate("QrCode", { backTitle: "Settings" })
          }
        />
      </View>
    </View>
  );
};

const badge = (
  <MaterialCommunityIcons
    name={"badge-account"}
    size={24}
    style={{ color: "#f4f4f5" }}
  />
);

const card = (
  <FontAwesome
    name={"credit-card-alt"}
    size={24}
    style={{ color: "#f4f4f5" }}
  />
);

const currency = (
  <FontAwesome5 name={"dollar-sign"} size={24} style={{ color: "#f4f4f5" }} />
);

const qr = <AntDesign name={"qrcode"} size={24} style={{ color: "#f4f4f5" }} />;
