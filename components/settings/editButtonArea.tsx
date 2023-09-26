import React, { FunctionComponent } from "react";
import { EditYourDetails } from "./editYourDetails";
import { View } from "react-native";
import {
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

interface OwnProps {}

type Props = OwnProps;

export const EditButtonArea: FunctionComponent<Props> = (props) => {
  const navigation = useNavigation();

  return (
    <View
      className={`
          h-full w-full rounded-3xl border border-zinc-800 bg-zinc-900 p-4
        `}
    >
      <View className={`flex flex-col gap-4`}>
        <View>
          <EditYourDetails
            icon={badge}
            iconBgColor={"bg-blue-600"}
            title={"Edit your Details"}
            description={"Edit your username, email, password, etc."}
            callBackFn={() =>
              navigation.navigate("Details", { backTitle: "Settings" })
            }
          />
        </View>
        <View>
          <EditYourDetails
            icon={currency}
            iconBgColor={"bg-orange-600"}
            title={"Currency"}
            description={"Change the currency of transactions."}
            callBackFn={() =>
              navigation.navigate("Currency", { backTitle: "Settings" })
            }
          />
        </View>
        <View>
          <EditYourDetails
            icon={card}
            iconBgColor={"bg-rose-600"}
            title={"Your Accounts"}
            description={"Edit your accounts or add a new one."}
            callBackFn={() =>
              navigation.navigate("Accounts", { backTitle: "Settings" })
            }
          />
        </View>
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
