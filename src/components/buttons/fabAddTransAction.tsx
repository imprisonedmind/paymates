import { TouchableOpacity, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { Ionicons } from "@expo/vector-icons";

import { useBottomSheetContext } from "../../context/bottomSheetContext";
import TransActionCreation from "../transActionCreation/transActionCreation";

export interface OwnProps {
  show: boolean;
}

type Props = OwnProps;

export default function FabAddTransAction(props: OwnProps) {
  const { show } = props;

  const { setBottomSheetChildren } = useBottomSheetContext();
  const { setIsOpen } = useBottomSheetContext();

  const scale = useSharedValue(1);
  const scaleConfig = {
    damping: 300, // Adjust as needed
    stiffness: 300, // Adjust as needed
    mass: 1,
  };

  const animatedStyles = useAnimatedStyle(() => {
    return {
      transform: [{ scale: withSpring(show ? 1 : 0, scaleConfig) }],
      opacity: withSpring(show ? 1 : 0), // Add opacity animation
    };
  });

  return (
    <Animated.View
      style={animatedStyles}
      className={`absolute bottom-2 right-2 z-[500] flex`}
    >
      <TouchableOpacity
        onPress={() => {
          setIsOpen(true);
          setBottomSheetChildren(<TransActionCreation />);
        }}
        className={`flex items-center justify-center overflow-hidden rounded-full`}
      >
        <View
          className={`
          flex h-[70px] w-[70px] items-center justify-center rounded-full bg-blue-600
        `}
        >
          <Ionicons name={"add"} size={44} color={"#09090b"} />
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
}
