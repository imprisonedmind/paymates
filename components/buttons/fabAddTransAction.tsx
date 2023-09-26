import { TransActionCreation } from "../transActionCreation/transActionCreation";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { useBottomSheetContext } from "../../lib/context/bottomSheetContext";

export default function FabAddTransAction() {
  const { setBottomSheetChildren } = useBottomSheetContext();
  const { setIsOpen } = useBottomSheetContext();

  return (
    <TouchableOpacity
      onPress={() => {
        setIsOpen(true);
        setBottomSheetChildren(<TransActionCreation />);
      }}
      className={`
        absolute bottom-4 right-4 z-[500] flex items-center justify-center 
        overflow-hidden rounded-full
      `}
    >
      <View
        className={`
          flex h-[70px] w-[70px] items-center justify-center rounded-full bg-blue-600
        `}
      >
        <Ionicons name={"add"} size={44} color={"#09090b"} />
      </View>
    </TouchableOpacity>
  );
}
